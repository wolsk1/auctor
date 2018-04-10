namespace VolskNet.Auctor.Api
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class Client
    {
        public Guid Id { get; set; }

        [Required(ErrorMessage = "Name is required")]
        [DisplayFormat(ConvertEmptyStringToNull = false)]
        [RegularExpression(@"[a-zA-Z\.\'\-_]{1,40}", ErrorMessage = "Incorrect First name format")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Surname is required")]
        [DisplayFormat(ConvertEmptyStringToNull = false)]
        [RegularExpression(@"[a-zA-Z\.\'\-_]{1,40}",
            ErrorMessage = "Incorrect Surname format")]
        public string Surname { get; set; }

        [Required(ErrorMessage = "Phone is required")]
        [DisplayFormat(ConvertEmptyStringToNull = false)]
        [RegularExpression(@"[0-9]{8}",
            ErrorMessage = "Incorrect Surname format")]
        public string Phone { get; set; }

        [Required(ErrorMessage = "Email is required")]
        [DisplayFormat(ConvertEmptyStringToNull = false)]
        [RegularExpression(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$",
            ErrorMessage = "Incorrect email address")]
        public string Email { get; set; }
    }
}