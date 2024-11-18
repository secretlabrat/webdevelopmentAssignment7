const contactList = [
  { name: "John Doe", phone: "1234 567 890", email: "john.doe@example.com" },
  {
    name: "Jane Smith",
    phone: "2345 678 901",
    email: "jane.smith@example.com",
  },
  {
    name: "Bob Johnson",
    phone: "3456 789 012",
    email: "bob.johnson@example.com",
  },
];

const contactPattern = (contact) => {
  return `${contact.name} ${contact.phone} ${contact.email}\n`;
};
const displayList = () => {
  let message = "";
  if (!contactList.length) {
    message = "No Contact";
  } else {
    contactList.forEach((e, i) => {
      message += `${i + 1}. ` + contactPattern(e);
    });
  }
  console.log(message);
};

const addContact = (name, phone, email) => {
  contactList.push({ name, phone, email });
  displayList();
};

const displayFirstAndLastContacts = () => {
  const firstContact = contactPattern(contactList[0]);
  const lastContact = contactPattern(contactList[contactList.length - 1]);
  console.log(
    `first contact is ${firstContact} and last contact is ${lastContact}`
  );
};

displayList();
addContact("Maisie Haley", "0913 531 3030", "risus.Quisque@urna.ca");
displayFirstAndLastContacts();
