var Contact = {
  fullName: function() {
    return this.firstName + " " + this.lastName
  }
}

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedAddress = $("input#new-address").val();

    var newContact = Object.create(Contact);
    newContact.firstName = inputtedFirstName;
    newContact.lastName = inputtedLastName;
    newContact.address = inputtedAddress;

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".address").text(newContact.address);
      $("input#edit-first-name").val(newContact.firstName);
      $("input#edit-last-name").val(newContact.lastName);
      $("input#edit-address").val(newContact.address);

      $("#edit-contact").submit(function(event) {
        newContact.firstName = $("input#edit-first-name").val();
        $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
      event.preventDefault();
      });


      });
    this.reset();

  });
});



