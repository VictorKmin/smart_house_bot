// {"id":1,
// "room_title":"Велика кімната",
// "device_ip":"192.168.8.155",
// "last_response":"758345743533",
// "temp":22.5,
// "is_alive":false,
// "auto_mode":true}

export interface RoomInterface {
  id: number;
  room_title: string;
  device_ip: string;
  last_response: string;
  temp: number;
  is_alive: boolean;
  auto_mode: boolean;
}
