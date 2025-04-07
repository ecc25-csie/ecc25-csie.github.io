(function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const r of t.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && i(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function i(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = n(e);
    fetch(e.href, t);
  }
})();
const m = [
    {
      name: "Naira Hovakimyan",
      affiliation:
        "W. Grafton and Lillian B. Wilkins Professor of Mechanical Science and Engineering",
      workplace: "University of Illinois Urbana-Champaign",
      scholar: "https://scholar.google.com/citations?user=8mA9QpUAAAAJ&hl=en",
    },
    {
      name: "Xiaofeng Wang",
      affiliation: "Associate Professor",
      workplace: "University of South Carolina",
      scholar: "https://scholar.google.com/citations?user=pONu-5EAAAAJ&hl=en",
    },
    {
      name: "Nora Ayanian",
      affiliation: "Associate Professor",
      workplace: "Brown University",
      scholar: "https://scholar.google.com/citations?user=ke2MEF0AAAAJ&hl=en",
    },
    {
        name: "Karl H. Johansson",
        affiliation: "Swedish Research Council Distinguished Professor, Founding Director",
        workplace: "KTH Royal Institute of Technology; Digital Futures",
        scholar: "https://scholar.google.com/citations?user=wWCUYdsAAAAJ&hl=en&oi=ao",
    },
    {
      name: "Maryam Kamgarpour",
      affiliation: "Assistant Professor",
      workplace: "École Polytechnique Fédérale de Lausanne",
      scholar:
        "https://scholar.google.com/citations?user=m6YgGqAAAAAJ&hl=en&oi=ao",
    },
    {
      name: "Gioele Zardini",
      affiliation: "Assistant Professor",
      workplace: "MIT",
      scholar:
        "https://scholar.google.com/citations?user=0c3J5KUAAAAJ&hl=en&oi=ao",
    },
    {
      name: "Venanzio Cichella",
      affiliation: "Associate Professor",
      workplace: "University of Iowa",
      scholar:
        "https://scholar.google.com/citations?user=tYQR_0MAAAAJ&hl=en&oi=ao",
    },
    {
      name: "Petros Voulgaris",
      affiliation:
        "Chair, Founding Aerospace Program Director, and Victor LaMar Lockhart Professor",
      workplace: "University of Nevada, Reno",
      scholar:
        "https://scholar.google.com/citations?user=f6XbyIUAAAAJ&hl=en&oi=ao",
    },
    {
      name: "Srinivasa Salapaka",
      affiliation: "Professor",
      workplace: "University of Illinois at Urbana-Champaign",
      scholar: "https://scholar.google.com/citations?user=55RQlcoAAAAJ&hl=en",
    },
    {
      name: "Yitaek Kim",
      affiliation: "Postdoctoral Scholar",
      workplace: "University of Southern Denmark",
      scholar:
        "https://scholar.google.com/citations?user=gTfx330AAAAJ&hl=en&oi=ao",
    },
    {
      name: "Astghik Hakobyan",
      affiliation: "Assistant Professor; Leading Researcher",
      workplace: "NPUA; CSIE",
      scholar: "https://scholar.google.com/citations?user=vtEfYXsAAAAJ&hl=en",
    },
    {
      name: "Tigran Bakaryan",
      affiliation: "Leading Researcher",
      workplace: "Institute of Mathematics of NAS RA, CSIE",
      scholar: "https://scholar.google.com/citations?user=5rPFjx4AAAAJ&hl=en",
    },
  ],
  p = [
    {
      name: "Naira Hovakimyan",
      workplace: "University of Illinois Urbana-Champaign",
      email: "nhovakim@illinois.edu",
    },
    {
      name: "Pan Zhao",
      workplace: "The University of Alabama",
      email: "pzhao7@ua.edu",
    },
    {
      name: "Astghik Hakobyan",
      workplace: "NPUA, CSIE",
      email: "astghik.hakobyan@csie.am",
    },
    {
      name: "Tigran Bakaryan",
      workplace: "Institute of Mathematics of NAS RA, CSIE",
      email: "tigran.bakaryan@csie.am",
    },
  ],
  d = [
    {
      title: "Session 1",
      items: [
        {
          person: "",
          time: "09:00 AM - 09:10 AM",
          activity: "Opening Remarks",
        },
        {
          person: "Venanzio Cichella",
          time: "09:10 AM - 09:45 AM",
          activity:
            "Coordination and Motion Planning Strategies for Multi-Vehicle Systems in Communication-Constrained Environments",
        },
        {
          person: "Gioele Zardini",
          time: "09:45 AM - 10:20 AM",
          activity: "Compositional Design of Society-Critical Systems",
        },
        {
          person: "Tigran Bakaryan",
          time: "10:20 AM - 10:55 AM",
          activity:
            "Game-Theoretic Coordination For Time-Critical Missions of UAV Systems",
        },
        { person: "", time: "10:55 AM - 11:10 AM", activity: "Coffee break" },
      ],
    },
    {
      title: "Session 2",
      items: [
        {
          person: "Yitaek Kim",
          time: "11:10 AM - 11:45 AM",
          activity:
            "Safety-Ensured Modern Applications under Model Uncertainty",
        },
        {
          person: "Nora Ayanian",
          time: "11:45 AM - 12:20 PM",
          activity:
            "Robust Trajectory Generation and Control for Quadrotor Motion Planning with Field-of-View Control Barrier Certification",
        },
        {
          person: "Astghik Hakobyan",
          time: "12:20 PM - 12:55 PM",
          activity:
            "Risk-Aware Distributed Control for Multi-Agent Systems under Uncertainty",
        },
        { person: "", time: "12:55 PM - 2:00 PM", activity: "Lunch break" },
      ],
    },
    {
      title: "Session 3",
      items: [
        {
          person: "Petros Voulgaris",
          time: "2:00 PM - 2:35 PM",
          activity:
            "Real-time Adversarial Image Perturbations for Autonomous Vehicles using Reinforcement Learning",
        },
        {
          person: "Srinivasa Salapaka",
          time: "2:35 PM - 3:10 PM",
          activity: "Combinatorial Planning Problems in Dynamic Networks",
        },
        {
          person: "Maryam Kamgarpour",
          time: "3:10 PM - 3:45 PM",
          activity:
            "Decentralized Learning of Equilibria in Constrained Multiagent Games",
        },
        { person: "", time: "3:45 PM - 3:55 PM", activity: "Coffee break" },
      ],
    },
    {
      title: "Session 4",
      items: [
        {
          person: "Naira Hovakimyan",
          time: "3:55 PM - 4:30 PM",
          activity: "Safe Learning in Autonomous Systems",
        },
        {
          person: "Xiaofeng Wang",
          time: "4:30 PM - 5:05 PM",
          activity:
            "DiffTune-MPC: Optimizing Model Predictive Control via Closed-Loop Learning",
        },
        { person: "", time: "5:05 PM - 5:15 PM", activity: "Closing Remarks" },
      ],
    },
  ],
  g = document.getElementById("speakers");
m.forEach((o) => {
  const a = document.createElement("div");
  a.classList.add("speaker-ct");
  const n = document.createElement("img");
  n.classList.add("profile-pic"), (n.src = `photos/${o.name}.jpg`);
  const i = document.createElement("div"),
    e = document.createElement("h2");
  (e.textContent = o.name), e.classList.add("name");
  const t = document.createElement("a"),
    r = document.createElement("img");
  r.classList.add("gs-logo"),
    (r.src = "google-scholar.png"),
    t.append(r),
    (t.href = o.scholar),
    (i.style.display = "flex"),
    (i.style.alignItems = "center"),
    (i.style.gap = "5px"),
    i.append(e, t);
  const s = document.createElement("h3");
  (s.textContent = o.affiliation), s.classList.add("affiliation");
  const c = document.createElement("p");
  (c.innerHTML = o.workplace),
    c.classList.add("workplace"),
    a.append(n, i, s, c),
    g.append(a);
});
const f = document.getElementById("organisers");
p.forEach((o) => {
  const a = document.createElement("div");
  a.classList.add("organiser-ct");
  const n = document.createElement("img");
  n.classList.add("profile-pic"), (n.src = `photos/${o.name}.jpg`);
  const i = document.createElement("h2");
  i.textContent = o.name;
  const e = document.createElement("h3");
  (e.textContent = o.workplace), console.log(o.workplace);
  const t = document.createElement("p");
  (t.textContent = o.email),
    (t.style.fontStyle = "italic"),
    a.append(n, i, e),
    f.append(a);
});
const l = document.getElementById("schedule");
d.forEach((o) => {
  const a = document.createElement("div");
  a.style.display = "flex";
  const n = document.createElement("h2");
  n.textContent = o.title;
  const i = document.createElement("button"),
    e = document.createElement("img");
  (e.src = "chevron_down.png"), e.classList.add("toggle"), i.append(e);
  const t = document.createElement("div");
  t.classList.add("schedule-ct"),
    i.addEventListener("click", function () {
      t.classList.contains("hidden")
        ? ((e.src = "chevron_down.png"), t.classList.remove("hidden"))
        : ((e.src = "chevron_right.png"), t.classList.add("hidden"));
    }),
    o.title ? a.append(n, i) : a.append(n),
    l.append(a),
    o.items.forEach((r) => {
      const s = document.createElement("p");
      (s.textContent = r.time), (s.style.fontWeight = "700");
      const c = document.createElement("div");
      (c.innerHTML = `<p><i>${r.person}</i></p>
    <p>${r.activity}</p>`),
        t.append(s, c);
    }),
    l.append(t);
});
