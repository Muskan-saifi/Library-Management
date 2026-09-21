export default function Members({ members, notify }) {
  return (
    <section className="pageSection">
      <div className="pageTop">
        <div><div className="eyebrow">LIBRARY MEMBERS</div><h2>Our active readers 👥</h2></div>
        <button className="primary" onClick={() => notify("Member form can be connected next!")}>Add Member</button>
      </div>

      <div className="cards">
        {members.map((member, index) => (
          <article className="memberCard" style={{ animationDelay: `${index * 70}ms` }} key={member.id}>
            <div className="memberTop">
              <div className="memberAvatar">{member.initials}</div>
              <span className="online">Active</span>
            </div>
            <h3>{member.name}</h3>
            <p>{member.id}</p>
            <div className="memberFooter">
              <span>{member.books}</span>
              <button onClick={() => notify(`Viewing ${member.name}'s profile`)}>View Profile</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}