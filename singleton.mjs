class Logger {
  constructor() {
    if (!Logger.instance) {
      Logger.instance = this;
    }

    this.log = (message) => {
      console.log(message);
    };

    return Logger.instance;
  }
}

const instance = new Logger();
Object.freeze(instance);

export default instance;
