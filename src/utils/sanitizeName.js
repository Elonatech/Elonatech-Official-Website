// Letters, spaces, hyphens, and apostrophes only — blocks @ and other
// special characters people could otherwise type into a name field.
export const sanitizeName = (value) => value.replace(/[^a-zA-Z\s'-]/g, '');
