import mqtt from 'mqtt';
const client = mqtt.connect('testurl.com');
export const MqttClient = () => {
  client.on('connect', () => {
    console.log('connected to mqtt broker @');
  });
};
