namespace VolskNet.Auctor.Domain
{
    using System;

    internal class Participant
    {
        public Guid Id { get; set; }
        public Guid ConsultationId { get; set; }
        public string Matricula { get; set; }
    }
}