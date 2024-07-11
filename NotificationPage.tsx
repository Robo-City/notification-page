import React, { useState } from 'react';
import { View, Button } from 'react-native';
import NotificationPage from './NotificationPage'; // Adjust path as needed

const App = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notifications = ['Notification 1', 'Notification 2', 'Notification 3'];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Show Notifications" onPress={() => setShowNotifications(true)} />
      {showNotifications && (
        <NotificationPage
          notifications={notifications}
          onClose={() => setShowNotifications(false)}
        />
      )}
    </View>
  );
};

export default App;
