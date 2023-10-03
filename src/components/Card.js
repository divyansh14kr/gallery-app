import React from 'react';

const Card = ({ content, onClose }) => {
  const { name, url, description, date, type, size, width, height } = content;

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('modal-background')) {
      onClose();
    }
  };

  return (
    <div style={styles.background} onClick={handleBackgroundClick} className="modal-background">
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h1 style={styles.cardTitle}>{name}</h1>
          <button style={styles.cardCloseButton} onClick={onClose}>
            Close
          </button>
        </div>
        <div style={styles.cardImageContainer}>
          <img style={styles.cardImage} src={url} alt={name} />
          <p style={styles.cardDescriptionText}>{description}</p>
        </div>
        <div style={styles.cardDetails}>
          <div style={styles.cardDetailRow}>
            <p style={styles.cardDescriptionText}>Date</p>
            <p style={styles.cardDescriptionText}>{date}</p>
          </div>
          <div style={styles.cardDetailRow}>
            <p style={styles.cardDescriptionText}>Type</p>
            <p style={styles.cardDescriptionText}>{type}</p>
          </div>
          <div style={styles.cardDetailRow}>
            <p style={styles.cardDescriptionText}>Size</p>
            <p style={styles.cardDescriptionText}>{`${size} KB`}</p>
          </div>
          <div style={styles.cardDetailRow}>
            <p style={styles.cardDescriptionText}>Dimensions</p>
            <p style={styles.cardDescriptionText}>{`${width} x ${height}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    overflow: 'auto', 
  },
  card: {
    width: '40%',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    padding: '20px',
    marginTop: '20px', 
    zIndex: 1,
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#000000',
  },
  cardCloseButton: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#000000',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
  },
  cardImageContainer: {
    width: '100%',
    marginBottom: '20px',
  },
  cardImage: {
    width: '100%',
    objectFit: 'contain',
  },
  cardDetails: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  cardDetailRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  cardDescriptionText: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'gray',
    fontStyle: 'italic',
  },
};

export default Card;
