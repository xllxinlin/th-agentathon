const RESOURCE_FOLDER_URL = (window.AGENTATHON_CONFIG && window.AGENTATHON_CONFIG.resourceFolderUrl) || "";

const i18n = {
  en: {
    navMission:"Mission", navEssentials:"3 Essentials", navIdeas:"Ideas", navResources:"Resources", navTimeline:"Timeline", navJudging:"Judging",
    resourcesButton:"Resources", heroEyebrow:"Microsoft Copilot Studio Challenge", heroTitle:"Build an AI agent that makes everyday work easier.",
    heroLead:"Design a useful workplace agent for Contoso Thailand. Choose the problem, shape the experience, and show what makes your solution different.",
    startChallenge:"Start Challenge", openResources:"Open Resource Folder", minutes:"minutes", essentials:"essentials",
    knowledge:"Knowledge", instructions:"Instructions", tool:"Tool", floatingA:"Use real knowledge", floatingB:"Make the agent act",
    missionEyebrow:"Your Mission", missionTitle:"Solve one workplace problem well.",
    missionText:"Design and build an AI agent for Contoso Thailand employees. You may focus on Workplace, Technology, Business Travel, or combine them where it creates a better user experience.",
    missionNote:"There is no single correct solution. A focused agent that works reliably is better than a large agent with many unfinished features.",
    missionCheck1Title:"Choose a real problem", missionCheck1Text:"Be specific about the user and the outcome.",
    missionCheck2Title:"Use the provided resources", missionCheck2Text:"Pick only the knowledge and data relevant to your idea.",
    missionCheck3Title:"Show something unique", missionCheck3Text:"Go beyond the baseline with your own design choices.",
    essentialsEyebrow:"02 · The baseline", essentialsTitle:"Every solution must demonstrate these 3 essentials.",
    essentialsIntro:"These are the minimum requirements. Everything beyond them is where your creativity comes in.",
    knowledgeText:"Connect your agent to at least one provided knowledge source and use it to answer relevant questions accurately.",
    knowledgePill:"Grounded answers", instructionsText:"Define the agent’s role, behaviour, boundaries, and how it should handle unclear or unsupported questions.",
    instructionsPill:"Consistent behaviour", toolText:"Create or configure at least one simple tool that retrieves structured information or performs a useful action.",
    toolPill:"Take action", creativeEyebrow:"Make it yours", creativeTitle:"The three essentials get you started. Creativity is what makes your agent stand out.",
    creativeTag1:"Persona", creativeTag2:"Clarification", creativeTag3:"Extra tools", creativeTag4:"Custom flows", creativeTag5:"Structured outputs",
    ideasEyebrow:"03 · Need inspiration?", ideasTitle:"Pick a direction, not a template.",
    ideasIntro:"These are idea starters only. You are encouraged to design something different.",
    workplaceTitle:"Workplace", workplaceText:"Office Concierge · Visitor Assistant · Facilities Navigator · Meeting & Office Guide",
    technologyTitle:"Technology", technologyText:"Equipment Advisor · Device Request Assistant · Digital Workplace Helper",
    travelTitle:"Business Travel", travelText:"Travel Policy Assistant · Expense Advisor · Trip Readiness Agent",
    crossTitle:"Cross-domain", crossText:"A Workplace Service Navigator that understands the need and routes the employee to the right knowledge or action.",
    resourcesEyebrow:"04 · Resource hub", resourcesTitle:"Everything you need is in one folder.",
    resourcesText:"Download the workshop knowledge-base files and structured sample data. Use only the resources relevant to the agent you choose to build.",
    resourceLanguage:"Knowledge-base materials are provided in English.",
    res1Title:"Workplace & Office Guide", res1Text:"Access, visitors, parking, rooms, facilities, deliveries and safety.",
    res2Title:"IT Equipment & Digital Workplace Policy", res2Text:"Devices, monitors, software, lifecycle, lost devices and requests.",
    res3Title:"Business Travel & Expense Policy", res3Text:"Approvals, hotel limits, transport, meals, claims and exceptions.",
    res4Title:"Workplace Services FAQ", res4Text:"Short cross-cutting answers that complement the main policies.",
    res5Title:"Structured Data for Tools", res5Text:"Service catalogue, equipment requests, visitor requests and employee directory.",
    timelineEyebrow:"05 · 60-minute build", timelineTitle:"Keep moving. Test early.",
    t1Title:"Choose the problem", t1Text:"Define the target user, use case and agent name.",
    t2Title:"Set the behaviour", t2Text:"Create the agent and configure clear instructions.",
    t3Title:"Connect knowledge", t3Text:"Add the relevant KB and test realistic questions.",
    t4Title:"Add a tool", t4Text:"Create one useful lookup or action and run it end-to-end.",
    t5Title:"Improve it", t5Text:"Handle ambiguity, missing information and creative enhancements.",
    t6Title:"Prepare your showcase", t6Text:"Pick one strong scenario and make sure it works.",
    judgingEyebrow:"06 · Judging", judgingTitle:"Build something useful — and prove it works.",
    judge1:"Business usefulness", judge2:"Knowledge use & accuracy", judge3:"Tool implementation", judge4:"Agent instructions & behaviour", judge5:"Creativity / innovation", judge6:"Demo quality",
    finishEyebrow:"Before time is up", finishTitle:"Your showcase should make these five things clear.",
    finish1:"What workplace problem does your agent solve?", finish2:"How does it use the provided knowledge?", finish3:"What important behaviour did you configure in the instructions?",
    finish4:"What does your tool do?", finish5:"What makes your solution different or especially useful?", footerText:"Participant challenge portal", backTop:"Back to top ↑"
  },
  th: {
    navMission:"ภารกิจ", navEssentials:"3 สิ่งจำเป็น", navIdeas:"ไอเดีย", navResources:"ทรัพยากร", navTimeline:"เวลา", navJudging:"การตัดสิน",
    resourcesButton:"ทรัพยากร", heroEyebrow:"Microsoft Copilot Studio Challenge", heroTitle:"สร้าง AI Agent ที่ช่วยให้การทำงานในแต่ละวันง่ายขึ้น",
    heroLead:"ออกแบบ Workplace Agent ที่เป็นประโยชน์สำหรับพนักงาน Contoso Thailand เลือกปัญหาที่ต้องการแก้ ออกแบบประสบการณ์ และแสดงให้เห็นว่าโซลูชันของทีมคุณแตกต่างอย่างไร",
    startChallenge:"เริ่มโจทย์", openResources:"เปิดโฟลเดอร์ทรัพยากร", minutes:"นาที", essentials:"สิ่งจำเป็น",
    knowledge:"Knowledge", instructions:"Instructions", tool:"Tool", floatingA:"ใช้ Knowledge จริง", floatingB:"ทำให้ Agent ลงมือทำได้",
    missionEyebrow:"ภารกิจของคุณ", missionTitle:"เลือกแก้หนึ่งปัญหาในที่ทำงานให้ดี",
    missionText:"ออกแบบและสร้าง AI Agent สำหรับพนักงาน Contoso Thailand โดยสามารถโฟกัสที่ Workplace, Technology, Business Travel หรือผสานหลายด้านเข้าด้วยกันหากทำให้ประสบการณ์ผู้ใช้ดีขึ้น",
    missionNote:"ไม่มีคำตอบที่ถูกต้องเพียงแบบเดียว Agent ที่มีขอบเขตชัดเจนและทำงานได้จริง มีคุณค่ามากกว่า Agent ที่มีฟีเจอร์จำนวนมากแต่ยังไม่สมบูรณ์",
    missionCheck1Title:"เลือกปัญหาจริง", missionCheck1Text:"ระบุผู้ใช้และผลลัพธ์ที่ต้องการให้ชัดเจน",
    missionCheck2Title:"ใช้ทรัพยากรที่ให้มา", missionCheck2Text:"เลือกเฉพาะ Knowledge และข้อมูลที่เกี่ยวข้องกับไอเดียของคุณ",
    missionCheck3Title:"แสดงความแตกต่าง", missionCheck3Text:"เพิ่มการออกแบบของคุณให้เหนือกว่าข้อกำหนดพื้นฐาน",
    essentialsEyebrow:"02 · ข้อกำหนดพื้นฐาน", essentialsTitle:"ทุกโซลูชันต้องแสดงให้เห็น 3 สิ่งจำเป็นนี้",
    essentialsIntro:"นี่คือข้อกำหนดขั้นต่ำ ส่วนที่เหนือจากนี้คือพื้นที่สำหรับความคิดสร้างสรรค์ของคุณ",
    knowledgeText:"เชื่อม Agent กับ Knowledge Source ที่ให้มาอย่างน้อย 1 แหล่ง และใช้ข้อมูลนั้นตอบคำถามที่เกี่ยวข้องได้อย่างถูกต้อง",
    knowledgePill:"ตอบโดยอ้างอิงข้อมูล", instructionsText:"กำหนดบทบาท พฤติกรรม ขอบเขต และวิธีที่ Agent ควรรับมือกับคำถามที่ไม่ชัดเจนหรือไม่มีข้อมูลรองรับ",
    instructionsPill:"พฤติกรรมสม่ำเสมอ", toolText:"สร้างหรือกำหนดค่า Tool อย่างน้อย 1 รายการ เพื่อดึงข้อมูลแบบมีโครงสร้างหรือดำเนินการที่เป็นประโยชน์",
    toolPill:"ลงมือทำได้", creativeEyebrow:"สร้างให้เป็นแบบของคุณ", creativeTitle:"3 สิ่งจำเป็นคือจุดเริ่มต้น ความคิดสร้างสรรค์คือสิ่งที่ทำให้ Agent ของคุณโดดเด่น",
    creativeTag1:"Persona", creativeTag2:"คำถามเพิ่มเติม", creativeTag3:"Tool เพิ่มเติม", creativeTag4:"Custom Flow", creativeTag5:"Structured Output",
    ideasEyebrow:"03 · ต้องการไอเดีย?", ideasTitle:"เลือกทิศทาง ไม่ใช่คัดลอกต้นแบบ",
    ideasIntro:"ตัวอย่างด้านล่างมีไว้เพื่อช่วยเริ่มต้นเท่านั้น คุณสามารถออกแบบสิ่งที่แตกต่างออกไปได้",
    workplaceTitle:"Workplace", workplaceText:"Office Concierge · Visitor Assistant · Facilities Navigator · Meeting & Office Guide",
    technologyTitle:"Technology", technologyText:"Equipment Advisor · Device Request Assistant · Digital Workplace Helper",
    travelTitle:"Business Travel", travelText:"Travel Policy Assistant · Expense Advisor · Trip Readiness Agent",
    crossTitle:"Cross-domain", crossText:"Workplace Service Navigator ที่เข้าใจความต้องการของผู้ใช้และพาไปยัง Knowledge หรือ Action ที่เหมาะสม",
    resourcesEyebrow:"04 · Resource hub", resourcesTitle:"ทุกอย่างที่ต้องใช้รวมอยู่ในโฟลเดอร์เดียว",
    resourcesText:"ดาวน์โหลด Knowledge Base และข้อมูลตัวอย่างแบบมีโครงสร้างสำหรับ Workshop ใช้เฉพาะทรัพยากรที่เกี่ยวข้องกับ Agent ที่ทีมคุณเลือกสร้าง",
    resourceLanguage:"เอกสาร Knowledge Base จัดเตรียมเป็นภาษาอังกฤษ",
    res1Title:"Workplace & Office Guide", res1Text:"การเข้าออฟฟิศ ผู้มาติดต่อ ที่จอดรถ ห้องประชุม สิ่งอำนวยความสะดวก การจัดส่ง และความปลอดภัย",
    res2Title:"IT Equipment & Digital Workplace Policy", res2Text:"อุปกรณ์ จอภาพ ซอฟต์แวร์ อายุการใช้งาน อุปกรณ์สูญหาย และคำขอ",
    res3Title:"Business Travel & Expense Policy", res3Text:"การอนุมัติ วงเงินโรงแรม การเดินทาง อาหาร การเบิกค่าใช้จ่าย และข้อยกเว้น",
    res4Title:"Workplace Services FAQ", res4Text:"คำตอบสั้น ๆ ที่เชื่อมโยงหลายหัวข้อและช่วยเสริม Policy หลัก",
    res5Title:"Structured Data for Tools", res5Text:"Service Catalogue, Equipment Requests, Visitor Requests และ Employee Directory",
    timelineEyebrow:"05 · สร้างภายใน 60 นาที", timelineTitle:"เดินหน้าต่อเนื่อง และทดสอบให้เร็ว",
    t1Title:"เลือกปัญหา", t1Text:"กำหนดผู้ใช้เป้าหมาย Use Case และชื่อ Agent",
    t2Title:"กำหนดพฤติกรรม", t2Text:"สร้าง Agent และตั้งค่า Instructions ให้ชัดเจน",
    t3Title:"เชื่อม Knowledge", t3Text:"เพิ่ม KB ที่เกี่ยวข้องและทดสอบด้วยคำถามที่เหมือนผู้ใช้จริง",
    t4Title:"เพิ่ม Tool", t4Text:"สร้าง Lookup หรือ Action ที่เป็นประโยชน์อย่างน้อย 1 อย่าง และทดสอบแบบ End-to-End",
    t5Title:"ปรับปรุง", t5Text:"จัดการคำถามกำกวม ข้อมูลที่ยังขาด และเพิ่มความคิดสร้างสรรค์",
    t6Title:"เตรียม Showcase", t6Text:"เลือกหนึ่ง Scenario ที่แข็งแรงและตรวจสอบให้แน่ใจว่าทำงานได้จริง",
    judgingEyebrow:"06 · การตัดสิน", judgingTitle:"สร้างสิ่งที่มีประโยชน์ — และพิสูจน์ให้เห็นว่าทำงานได้จริง",
    judge1:"ประโยชน์ทางธุรกิจ", judge2:"การใช้ Knowledge และความถูกต้อง", judge3:"การทำงานของ Tool", judge4:"Agent Instructions และพฤติกรรม", judge5:"ความคิดสร้างสรรค์ / นวัตกรรม", judge6:"คุณภาพการ Demo",
    finishEyebrow:"ก่อนหมดเวลา", finishTitle:"Showcase ของคุณควรทำให้ 5 เรื่องนี้ชัดเจน",
    finish1:"Agent ของคุณแก้ปัญหาอะไรในที่ทำงาน?", finish2:"Agent ใช้ Knowledge ที่ให้มาอย่างไร?", finish3:"คุณกำหนดพฤติกรรมสำคัญอะไรไว้ใน Instructions?",
    finish4:"Tool ของคุณทำอะไร?", finish5:"อะไรทำให้โซลูชันของคุณแตกต่างหรือมีประโยชน์เป็นพิเศษ?", footerText:"Participant challenge portal", backTop:"กลับขึ้นด้านบน ↑"
  }
};

function setLanguage(lang){
  const selected = (lang==="th" || lang==="bi") ? lang : "en";
  localStorage.setItem("agentathonLang", selected);
  document.documentElement.lang = selected==="th" ? "th" : "en";

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    const en = i18n.en[key] || "";
    const th = i18n.th[key] || "";
    if(selected === "bi"){
      el.innerHTML = `<span class="bi-en">${en}</span><span class="bi-th">${th}</span>`;
    } else {
      el.textContent = i18n[selected][key] || en;
    }
  });

  document.body.classList.toggle("bilingual-mode", selected==="bi");

  document.querySelectorAll(".lang-btn").forEach(btn=>{
    btn.classList.toggle("active",btn.dataset.lang===selected);
    btn.setAttribute("aria-pressed",btn.dataset.lang===selected?"true":"false");
  });
}

function configureResourceLinks(){
  document.querySelectorAll(".resource-link").forEach(link=>{
    if(RESOURCE_FOLDER_URL.startsWith("http")){
      link.href=RESOURCE_FOLDER_URL;
    }else{
      link.href="#resources";
      link.addEventListener("click",e=>{
        e.preventDefault();
        alert("Resource folder link has not been configured yet. Update RESOURCE_FOLDER_URL in script.js before publishing.");
      });
    }
  });
}

function updateProgress(){
  const doc=document.documentElement;
  const max=doc.scrollHeight-doc.clientHeight;
  const pct=max>0?(doc.scrollTop/max)*100:0;
  document.getElementById("progressBar").style.width=`${pct}%`;
}

document.querySelectorAll(".lang-btn").forEach(btn=>btn.addEventListener("click",()=>setLanguage(btn.dataset.lang)));
window.addEventListener("scroll",updateProgress,{passive:true});
configureResourceLinks();
setLanguage(localStorage.getItem("agentathonLang")||"en");
updateProgress();