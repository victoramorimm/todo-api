import eventsEmitter from "./EventEmitter";

class Publisher {
  constructor(){
  } 
  
  static publishMessage(eventName: EventNameEnum, data: any){
    eventsEmitter.emit(eventName, data);
  }
}

enum EventNameEnum {
  TASK_CREATION = 'TASK_CREATION'
}

export { Publisher, EventNameEnum }