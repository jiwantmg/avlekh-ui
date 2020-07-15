class Logger {
    constructor(
        verbosityLevel = 'display-everthing', showErrorOnProduction = false
    ) {
        this.verbosityLevel = verbosityLevel;
        this.showErrorOnProduction = showErrorOnProduction;
        this.isProduction = process.env.NODE_ENV === 'production';
    }

    canPrint(method) {
        const allowedMethods = [];
        if(this.verbosityLevel === 'display-everthing' && this.isProduction === false) {
            allowedMethods.push(...['info','warn','error', 'debug']);
        }else if(this.verbosityLevel === 'only-errors' && (this.isProduction === false || this.showErrorOnProduction === true)){
            allowedMethods.push('error');
        }

        return allowedMethods.indexOf(method) !== -1;
    }

    info(message) {
        if(!this.canPrint('info')) {
            return () => {}
        }

        console.info(message);
    }

    warn(message) {
        if(!this.canPrint('warn')){
            return () => {}
        }

        console.warn(message);
    }


    debug(message) {
        if(!this.canPrint('debug')){
            return () => {}
        }

        console.debug(message);
    }

    error(message) {
        if(!this.canPrint('error')){
            return () => {}
        }

        console.error(message);
    }
}

export default Logger;
