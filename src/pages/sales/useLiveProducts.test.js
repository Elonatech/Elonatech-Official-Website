import { renderHook, act } from "@testing-library/react";
import { useLiveProducts } from "./useLiveProducts";

const p = (...ids) => ids.map((_id) => ({ _id }));

// One minute passes; let the async probe settle.
const tick = async () => {
  await act(async () => {
    jest.advanceTimersByTime(60000);
  });
  await act(async () => {});
};

describe("useLiveProducts", () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  const setup = (shown, probe) => {
    const onStale = jest.fn();
    const hook = renderHook(
      ({ shown }) => useLiveProducts({ probe, shown, onStale }),
      { initialProps: { shown } }
    );
    return { onStale, ...hook };
  };

  it("reloads when a new product went live and the visitor isn't filtering", async () => {
    const probe = jest.fn().mockResolvedValue(p("a", "b", "c"));
    const { onStale } = setup(p("a", "b"), probe);
    await tick();
    expect(onStale).toHaveBeenCalledTimes(1);
  });

  it("does nothing when the list is unchanged", async () => {
    const probe = jest.fn().mockResolvedValue(p("b", "a"));
    const { onStale } = setup(p("a", "b"), probe);
    await tick();
    expect(onStale).not.toHaveBeenCalled();
  });

  it("leaves a visitor who is searching or filtering alone", async () => {
    const probe = jest.fn().mockResolvedValue(p("a", "b", "c"));
    const { onStale, rerender } = setup(p("a", "b"), probe);
    rerender({ shown: p("a") }); // visitor narrowed the list
    await tick();
    expect(onStale).not.toHaveBeenCalled();
  });

  it("picks the change up once the filter is cleared", async () => {
    const probe = jest.fn().mockResolvedValue(p("a", "b", "c"));
    const { onStale, rerender } = setup(p("a", "b"), probe);
    rerender({ shown: p("a") });
    await tick();
    rerender({ shown: p("a", "b") }); // filter cleared
    await tick();
    expect(onStale).toHaveBeenCalledTimes(1);
  });

  it("doesn't reload again after the new list arrives", async () => {
    const probe = jest.fn().mockResolvedValue(p("a", "b", "c"));
    const { onStale, rerender } = setup(p("a", "b"), probe);
    await tick();
    rerender({ shown: p("a", "b", "c") }); // the reload brought the new list in
    await tick();
    await tick();
    expect(onStale).toHaveBeenCalledTimes(1);
  });

  it("ignores a failed background check", async () => {
    const probe = jest.fn().mockRejectedValue(new Error("offline"));
    const { onStale } = setup(p("a"), probe);
    await tick();
    expect(onStale).not.toHaveBeenCalled();
  });
});
