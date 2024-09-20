import React, { useState } from 'react';

const ColourSettings = () => {
  const [inputs, setInputs] = useState([{ id: Date.now(), name: '' }]);
  const [group, setGroup] = useState('');
  const handleAddInput = () => {
    setInputs([...inputs, { id: Date.now(), name: '' }]);
  };

  const handleInputChange = (id, field, value) => {
    setInputs(inputs.map(input =>
      input.id === id ? { ...input, [field]: value } : input
    ));
  };

  const handleRemoveInput = (id) => {
    setInputs(inputs.filter(input => input.id !== id));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //const checkKey = keyApi == '' ? null : encodeURIComponent(keyApi);
      const params = `shop=${shop}&colorGroup=${group}`;
      const response = await fetch('/api/saveColorGroup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
      });

      const result = await response.json();
      if (result.success) {
        console.log('API key saved successfully!');
      } else {
        console.error('Error saving API key.');
      }
    } catch (err) {
      console.error('Submission error:', err);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Groups Settings</h2>
      {inputs.map(input => (
        <div key={input.id} style={styles.inputGroup}>
          <input
            type="text"
            placeholder="Enter name"
            value={input.name}
            onChange={(e) => handleInputChange(input.id, 'name', e.target.value)}
            onBlur={(e) => setGroup(e.target.value)}
            style={styles.textInput}
          />
          <button
            type="button"
            onClick={() => handleRemoveInput(input.id)}
            style={styles.removeButton}
          >
            Remove
          </button>
        </div>
      ))}
      <div style={styles.buttonContainer}>
        <button type="submit" style={styles.saveButton}>Save Settings</button>
        <button type="button" onClick={handleAddInput} style={styles.addButton}>Add More</button>
      </div>
    </form>
  );
};

const styles = {
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  textInput: {
    marginRight: '1rem',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    flex: 1,
  },
  removeButton: {
    padding: '0.5rem 1rem',
    backgroundColor: 'rgb(244 244 244)',
    color: 'rgb(48 48 48)',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  addButton: {
    padding: '0.5rem 1rem',
    backgroundColor: 'rgb(26 26 26)',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '20px 0',
  },
  saveButton: {
    padding: '0.5rem 1rem',
    backgroundColor: 'rgb(26 26 26)',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '1rem',
  },
};

export default ColourSettings;
