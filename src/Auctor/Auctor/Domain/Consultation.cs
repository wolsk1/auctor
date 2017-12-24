namespace VolskNet.Auctor
{
    using System;

    public class Consultation
    {
        public Guid Id { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public Guid RoomId { get; set; }
        public Guid LecturerId { get; set; }
    }
}