import * as React from 'react';
import { Button, Text, View } from 'react-native';

function Campaigns({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Kampanyalar</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('DetailsScreen')}
        />
      </View>
    );
  }

export default Campaigns;