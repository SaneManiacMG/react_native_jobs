import { View, Text, TouchableOpacity, Image } from 'react';

import styles from './popularjobcard.style';

const PopularJobCard = ({ item, selectedJob, handlePressCard }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handlePressCard(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image 
          source={{ uri: item.employer_logo }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
    </TouchableOpacity>
  )
}

export default PopularJobCard;