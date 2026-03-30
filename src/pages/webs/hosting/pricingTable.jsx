import React from 'react';

const PricingTable = () => {
  const plans = [
    { name: 'Iron', price: '$2.33', originalPrice: '$7.00', savePercentage: '73%', renewPrice: '$ 1.66' },
    { name: 'Bronze', price: '$4.80', originalPrice: '$8.99', savePercentage: '53%', renewPrice: '$ 3.50' },
    { name: 'Sliver', price: '$6.20', originalPrice: '$13.99', savePercentage: '58%', renewPrice: '$ 5.25' },
    { name: 'Gold', price: '$12.00', originalPrice: '$18.99', savePercentage: '47%', renewPrice: '$ 10.00' },
  ];

  const features = [
    { name: 'Number of Websites', values: ['1 Website', 'Multiple Websites', 'Multiple Websites', 'Multiple Websites'] },
    { name: 'Bandwidth', values: ['10 GB', 'Unlimited', 'Unlimited', 'Unlimited'] },
    { name: 'Web Space', values: ['1 GB SSD Disk Space', '30 GB NVMe Disk Space', '50 GB NVMe Disk Space', '100 GB NVMe Disk Space'] },
    { name: 'Free Domain Registration', values: ['✓', '✓', '✓', '✓'] },
    { name: 'SSL certificates', values: ['✓', '✓', '✓', '✓'] },
    { name: 'Free Migrations', values: ['✓', '✓', '✓', '✓'] },
    { name: 'cPanel Control Panel', values: ['✓', '✓', '✓', '✓'] },
    { name: 'Daily Backups', values: ['✓', '✓', '✓', '✓'] },
    { name: 'LiteSpeed', values: ['✓', '✓', '✓', '✓'] },
    { name: '45 Days Guarantee', values: ['✓', '✓', '✓', '✓'] },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Cloud Hosting Plan Perfect For You</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="p-4 border border-gray-300 bg-gray-100">
                <div className="text-left">
                  <span className="text-blue-600 text-lg">Cloud Hosting Features</span>
                  <div className="font-bold text-2xl mt-2">CHOOSE PERFECT PLAN</div>
                </div>
              </th>
              {plans.map((plan) => (
                <th key={plan.name} className="p-4 border border-gray-300">
                  <div className="text-center">
                    <div className="font-bold text-2xl mb-4">{plan.name}</div>
                    <div>
                      <del className="text-red-500 mr-2">{plan.originalPrice}</del>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">save {plan.savePercentage}</span>
                    </div>
                    <div className="text-4xl font-bold text-blue-600 my-2">{plan.price}</div>
                    <div className="text-gray-600">monthly</div>
                    <div className="text-sm mt-2">Renews at {plan.renewPrice}</div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={feature.name} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="p-4 border border-gray-300 font-semibold">{feature.name}</td>
                {feature.values.map((value, planIndex) => (
                  <td key={`${feature.name}-${planIndex}`} className="p-4 border border-gray-300 text-center">
                    {value === '✓' ? (
                      <span className="text-green-500 text-xl">✓</span>
                    ) : (
                      value
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Mobile view */}
      <div className="md:hidden mt-8">
        {plans.map((plan) => (
          <div key={plan.name} className="mb-8 border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-4">
              <div className="font-bold text-2xl mb-2">{plan.name}</div>
              <div>
                <del className="text-red-500 mr-2">{plan.originalPrice}</del>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">save {plan.savePercentage}</span>
              </div>
              <div className="text-4xl font-bold text-blue-600 my-2">{plan.price}</div>
              <div className="text-gray-600">monthly</div>
              <div className="text-sm mt-2">Renews at {plan.renewPrice}</div>
            </div>
            <div className="p-4">
              {features.map((feature, index) => (
                <div key={feature.name} className={`py-2 ${index !== features.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <div className="font-semibold">{feature.name}</div>
                  <div className="mt-1">
                    {feature.values[plans.indexOf(plan)] === '✓' ? (
                      <span className="text-green-500 text-xl">✓</span>
                    ) : (
                      feature.values[plans.indexOf(plan)]
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;