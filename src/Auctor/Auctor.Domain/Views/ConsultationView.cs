namespace VolskNet.Auctor.Domain
{
    using System;

    public class ConsultationView
    {
        public Guid Id { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public DateTime Date { get; set; }
        public Room Room { get; set; }
        public Lecturer Lecturer { get; set; }
        public int Capacity { get; set; }
    }
}