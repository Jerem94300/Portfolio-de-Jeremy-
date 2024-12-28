export const Contact = () => {

    return `
    <div class="contact__container">
      
      <form action="" class="form">
        <div class="form__group">
            <label for="firstName">First Name</label>
            <input type="text" name="firstName" required class="form__control">
        </div>
        <div class="form__group">
            <label for="lastName">Last Name</label>
            <input type="text" name="lastName" required class="form__control">
        </div>
        <div class="form__group">
            <label for="email">Email</label>
            <input type="email" name="email" required class="form__control">
        </div>
        <div class="form__group">
            <label for="message">Your Message</label>
            <textarea name="message" id="textarea" class="form__control"></textarea>
        </div>
        <div class="button__send">
        <a href="#" class="link__send">Send</a>
        </div>
    
        </form>
    </div>
    
    
    
    
    
    
    
    `












}