import React from 'react'

function Card({ abilities, image, name, weight }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
        <h3 className="text-lg text-gray-600 mb-3">Weight: {weight} kg</h3>
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Abilities:</h4>
          <ul className="space-y-1">
            {abilities.map((abilityObj, index) => (
              <li key={index} className="text-sm text-gray-600">
                {abilityObj.ability.name}
                {abilityObj.is_hidden && (
                  <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    Hidden
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card
