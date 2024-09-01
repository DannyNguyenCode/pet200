export interface oneTimePasscode{
    passcode:string,
    issueDate:Date,
    expiryDate:Date,
    user:string
    
}
  // table - passcode, issue date, expire date, reference to user (email)