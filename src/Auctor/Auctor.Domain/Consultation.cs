namespace VolskNet.Auctor.Domain
{
    using System;

    public class Consultation
    {
        public Guid Id { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public Guid RoomId { get; set; }
        public int Capacity { get; set; }
        public Guid LecturerId { get; set; }
        public DateTime Date { get; set; }
        public string RoomName { get; set; }
    }
}