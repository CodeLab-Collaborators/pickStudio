import { useState } from 'react';

const StudioFeatures = () => {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  // List of studio features
  const studioFeatures = [
    'Specialized equipment',
    'Production and editing facilities',
    'Flexible space layout',
    'Proper lighting',
    'Acoustic treatment',
    'HVAC systems',
    'Comfortable seating',
    'Workstations or desks',
    'Waiting areas or lounge spaces',
    'Technical support',
    'Rental services',
    'Event planning services',
    'Access control',
    'Surveillance or security systems',
    'High-speed internet access',
    'Digital platform integration',
    'Power outlets',
    'Plumbing facilities',
    'Storage spaces',
    'Accessibility features',
    'Aesthetic considerations',
    'Meeting rooms or collaborative spaces',
    'Networking opportunities',
    'Workshops or training sessions',
    'Community events',
  ];

  // Handle feature selection
  const handleFeatureClick = (feature:string) => {
    const isSelected = selectedFeatures.includes(feature);

    if (isSelected) {
      setSelectedFeatures((prevSelectedFeatures) =>
        prevSelectedFeatures.filter((selectedFeature) => selectedFeature !== feature)
      );
    } else {
      setSelectedFeatures((prevSelectedFeatures) => [...prevSelectedFeatures, feature]);
    }
  };

  return (
    <div>
      <h1 className='mt-7 font-semibold text-2xl max-md:text-lg'>Select Features Studio Can Offer</h1>

      <div className='mt-4'>
        {studioFeatures.map((feature) => (
          <button
            key={feature}
            className={`${
              selectedFeatures.includes(feature) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
            } p-2 m-2 rounded`}
            onClick={() => handleFeatureClick(feature)}
          >
            {feature}
          </button>
        ))}
      </div>

      <div>
        <h2>Selected Features:</h2>
        <ul>
          {selectedFeatures.map((selectedFeature) => (
            <li key={selectedFeature}>{selectedFeature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudioFeatures;
