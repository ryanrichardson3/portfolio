function typeOutText(text, divId, callback) {
    const typingContainer = document.getElementById(divId);
    let index = 0;

    // Append cursor to the typing container
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    typingContainer.appendChild(cursor);

    function typeNextCharacter() {
        if (index < text.length) {
            // Insert text character before the cursor
            cursor.insertAdjacentHTML('beforebegin', text.charAt(index));
            index++;
            setTimeout(typeNextCharacter, 75); // Adjust typing speed here
        } else {
            // Text typing complete, remove the cursor
            cursor.style.display = 'none';

            // Call the callback function when typing is complete
            if (callback) {
                callback();
            }
        }
    }

    // Start typing effect
    typeNextCharacter();
}

const introText = "Welcome!\nI'm Ryan Richardson, a self-taught flask web developer and CS50x graduate.";
const projects = "\n~/projects\n";
const links = "~/links";
const contact = "\ncontact me: ";
const email = "ryanrich275@icloud.com\n"
const github = "github.com/ryanrichardson3";

typeOutText(introText, 'intro', function() {
    typeOutText(projects, 'projects', function() {
        typeOutText(links, 'links', function() {
            typeOutText(contact, 'contact', function() {
                typeOutText(email, 'email', function() {
                    typeOutText(github, 'github');
                });
            });
        });
    });
});
