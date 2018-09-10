export class LoggingService {
	logStatusChange(name:string, status:string) {
		console.log('Status of the account "' + name + '" changed to: ' + status);
	}
}