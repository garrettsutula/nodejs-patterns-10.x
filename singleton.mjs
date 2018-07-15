class Logger {
  constructor() {
    if (!Logger.instance) {
      this.rand = Math.random();
      Logger.instance = this;
    }

    this.log = (message) => {
      console.log(`${message} - loggerid: ${this.rand}`);
    }

    return Logger.instance;
  }
}

const instance = new Logger();
Object.freeze(instance);

export default instance;
