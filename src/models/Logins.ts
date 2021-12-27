export class Logins {
    public Email: string;
    public Password: string;
    public UserRole: string;

    constructor(Email: string ,Password : string ,UserRole: string ){
        this.Email = Email;
        this.Password = Password;
        this.UserRole = UserRole;
    }

  }