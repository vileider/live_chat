A threat model is a structured representation of all the information that affects the security of an application. In essence, it is a view of the application and its environment through the lens of security.
### List of potential threats in live chat app

* Sensitive Data
   * Emails
   * Passwords
   * Chats
   * IP address
   * profile details
  
* Internal threat from a new and existing team members
    * Release source code (if not public)
    * New members pushing breaking / vulnerable changes to codebase
    * Changes pushed without pull request / no code review
    * Defection to a competitor (releasing code) / Espionage

* External threats for database/server
    * bots trying to breach server security
    * SQL injection
    * Denial of service attacks(DoS / DDoS)

* External threats for frontend
    * XSS (Cross site scripting attacks)
    * CSRF(Cross site request forgery)

