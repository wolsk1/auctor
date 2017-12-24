namespace VolskNet.Auctor
{
    using System;

    internal class Participant
    {
        public Guid Id { get; set; }
        public Guid ConsultationId { get; set; }
        public string Matricula { get; set; }
    }
}