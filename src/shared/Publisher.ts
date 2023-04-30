import eventsEmitter from "./EventEmitter";

class Publisher {
  constructor(){
  } 
  
  static publishMessage(eventName: string, data: any){
    eventsEmitter.emit(eventName, data);
  }
}

export { Publisher }