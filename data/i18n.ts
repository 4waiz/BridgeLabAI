import type { Lang } from "@/types";

export type DictKey =
  | "nav.product"
  | "nav.student"
  | "nav.teacher"
  | "nav.howItWorks"
  | "nav.lang"
  | "common.tagline"
  | "common.tryStudent"
  | "common.openTeacher"
  | "common.analyze"
  | "common.analyzeAnother"
  | "common.useDemoSample"
  | "common.uploadOrChoose"
  | "common.dropHere"
  | "common.preview"
  | "common.confidence"
  | "common.detectedIssue"
  | "common.whyItMatters"
  | "common.guidedHint"
  | "common.safetyNote"
  | "common.followUp"
  | "common.suggestedNext"
  | "common.share"
  | "common.download"
  | "common.copyLink"
  | "common.exportSummary"
  | "common.statusNeedsAttention"
  | "common.statusSafeToRetry"
  | "common.statusTeacherReview"
  | "common.langEN"
  | "common.langAR"
  | "common.poweredBy"
  | "landing.heroTitle"
  | "landing.heroSubtitle"
  | "landing.heroBlurb"
  | "landing.problemTitle"
  | "landing.problemBody"
  | "landing.featuresTitle"
  | "landing.f1Title"
  | "landing.f1Body"
  | "landing.f2Title"
  | "landing.f2Body"
  | "landing.f3Title"
  | "landing.f3Body"
  | "landing.f4Title"
  | "landing.f4Body"
  | "landing.f5Title"
  | "landing.f5Body"
  | "landing.responsibleTitle"
  | "landing.responsibleHint"
  | "landing.responsibleControl"
  | "landing.responsibleData"
  | "landing.responsibleSafety"
  | "landing.howTitle"
  | "landing.howBlurb"
  | "landing.exploreHow"
  | "student.title"
  | "student.subtitle"
  | "student.languageLabel"
  | "student.samplesLabel"
  | "student.sampleArduinoGround"
  | "student.sampleReversedLED"
  | "student.sampleMissingResistor"
  | "student.sampleWrongSensor"
  | "student.sampleRobotMotor"
  | "student.dropTitle"
  | "student.dropBody"
  | "student.removeFile"
  | "student.step.upload"
  | "student.step.detect"
  | "student.step.diagnose"
  | "student.step.explain"
  | "student.step.hint"
  | "student.analyzing"
  | "student.shareTitle"
  | "student.generatedBy"
  | "teacher.title"
  | "teacher.subtitle"
  | "teacher.kpi.totalUploads"
  | "teacher.kpi.commonMistake"
  | "teacher.kpi.safetyAlerts"
  | "teacher.kpi.needSupport"
  | "teacher.charts.errorCategories"
  | "teacher.charts.errorByLab"
  | "teacher.charts.languageUsage"
  | "teacher.charts.submissionTrend"
  | "teacher.recent.title"
  | "teacher.recent.student"
  | "teacher.recent.issue"
  | "teacher.recent.status"
  | "teacher.recent.lang"
  | "teacher.recent.time"
  | "teacher.gaps.title"
  | "teacher.gaps.subtitle"
  | "teacher.interventions.title"
  | "teacher.interventions.subtitle"
  | "how.title"
  | "how.subtitle"
  | "how.s1Title"
  | "how.s1Body"
  | "how.s2Title"
  | "how.s2Body"
  | "how.s3Title"
  | "how.s3Body"
  | "how.s4Title"
  | "how.s4Body"
  | "how.s5Title"
  | "how.s5Body"
  | "how.s6Title"
  | "how.s6Body"
  | "footer.rights"
  | "footer.note";

const en: Record<DictKey, string> = {
  "nav.product": "BridgeLab AI",
  "nav.student": "Student",
  "nav.teacher": "Teacher",
  "nav.howItWorks": "How it works",
  "nav.lang": "Language",
  "common.tagline":
    "Arabic-English GenAI Lab Troubleshooting Coach for STEM Education",
  "common.tryStudent": "Try Student Demo",
  "common.openTeacher": "Open Teacher Dashboard",
  "common.analyze": "Analyze setup",
  "common.analyzeAnother": "Analyze another setup",
  "common.useDemoSample": "Use a demo sample",
  "common.uploadOrChoose": "Upload a photo or short video",
  "common.dropHere": "Drop your file here",
  "common.preview": "Preview",
  "common.confidence": "Confidence",
  "common.detectedIssue": "Detected issue",
  "common.whyItMatters": "Why it matters",
  "common.guidedHint": "Guided hint",
  "common.safetyNote": "Safety note",
  "common.followUp": "Follow-up checkpoint",
  "common.suggestedNext": "Suggested next step",
  "common.share": "Share",
  "common.download": "Download summary card",
  "common.copyLink": "Copy share link",
  "common.exportSummary": "Export summary",
  "common.statusNeedsAttention": "Needs attention",
  "common.statusSafeToRetry": "Safe to retry",
  "common.statusTeacherReview": "Teacher review recommended",
  "common.langEN": "English",
  "common.langAR": "العربية",
  "common.poweredBy": "Powered by BridgeLab AI",

  "landing.heroTitle": "Help students fix lab setups, without giving away the answer.",
  "landing.heroSubtitle":
    "BridgeLab AI looks at a photo or short video of an electronics or robotics build, spots likely mistakes, and coaches the student in Arabic or English with hint-first guidance.",
  "landing.heroBlurb":
    "Designed for STEM classrooms where teachers can't be at every bench at once.",
  "landing.problemTitle": "The bench is busy. The teacher is one person.",
  "landing.problemBody":
    "In a real STEM lab, twenty students hit small wiring or component mistakes at the same time. They wait, they guess, or they get the answer dumped on them. BridgeLab AI gives every student an Arabic-English coach that explains what's wrong and asks the next right question.",
  "landing.featuresTitle": "What it does",
  "landing.f1Title": "Detects likely setup mistakes",
  "landing.f1Body":
    "Identifies common wiring, polarity, and pin-assignment errors from a single photo or short clip.",
  "landing.f2Title": "Explains in Arabic or English",
  "landing.f2Body":
    "Full bilingual interface with proper RTL layout, not a half-translated tool.",
  "landing.f3Title": "Hint-first learning",
  "landing.f3Body":
    "Returns a guided hint and a follow-up question instead of dumping the full solution.",
  "landing.f4Title": "Teacher class insights",
  "landing.f4Body":
    "Aggregates anonymous results into a dashboard of common errors and learning gaps.",
  "landing.f5Title": "Safety-aware feedback",
  "landing.f5Body":
    "Flags wiring issues that pose burn-out, short-circuit, or sudden-motion risks before the student powers on.",

  "landing.responsibleTitle": "Responsible AI by design",
  "landing.responsibleHint":
    "Hint-first, not answer dumping. Students still have to think.",
  "landing.responsibleControl":
    "Teacher remains in control. Aggregated insights, not student-by-student surveillance.",
  "landing.responsibleData":
    "Minimal student data. No accounts, no PII, history stays local.",
  "landing.responsibleSafety":
    "Designed to support safer lab sessions by surfacing safety-relevant issues first.",
  "landing.howTitle": "How it works",
  "landing.howBlurb":
    "From the photo on the bench to the teacher's dashboard, in five steps.",
  "landing.exploreHow": "See the full pipeline",

  "student.title": "Student lab coach",
  "student.subtitle":
    "Upload a photo of your setup or pick a sample. We will look at the wiring, identify the most likely issue, and walk you through it.",
  "student.languageLabel": "Response language",
  "student.samplesLabel": "Try a demo scenario",
  "student.sampleArduinoGround": "Faulty Arduino circuit",
  "student.sampleReversedLED": "Reversed LED polarity",
  "student.sampleMissingResistor": "Missing resistor",
  "student.sampleWrongSensor": "Wrong sensor wiring",
  "student.sampleRobotMotor": "Robotics connection issue",
  "student.dropTitle": "Drop a photo or short video",
  "student.dropBody": "PNG, JPG, or MP4 up to 25 MB. We never upload it anywhere.",
  "student.removeFile": "Remove file",
  "student.step.upload": "Receiving your file",
  "student.step.detect": "Detecting components",
  "student.step.diagnose": "Finding the most likely issue",
  "student.step.explain": "Generating a clear explanation",
  "student.step.hint": "Preparing your guided hint",
  "student.analyzing": "Analyzing setup",
  "student.shareTitle": "BridgeLab AI lab summary",
  "student.generatedBy": "Generated by BridgeLab AI",

  "teacher.title": "Teacher dashboard",
  "teacher.subtitle":
    "An anonymized view of where your class is getting stuck this week.",
  "teacher.kpi.totalUploads": "Total uploads",
  "teacher.kpi.commonMistake": "Most common mistake",
  "teacher.kpi.safetyAlerts": "Safety warnings raised",
  "teacher.kpi.needSupport": "Students needing support",
  "teacher.charts.errorCategories": "Common error categories",
  "teacher.charts.errorByLab": "Errors by lab type",
  "teacher.charts.languageUsage": "Language usage",
  "teacher.charts.submissionTrend": "Submissions over the last 7 days",
  "teacher.recent.title": "Recent student analyses",
  "teacher.recent.student": "Student",
  "teacher.recent.issue": "Detected issue",
  "teacher.recent.status": "Status",
  "teacher.recent.lang": "Lang",
  "teacher.recent.time": "When",
  "teacher.gaps.title": "Learning gaps",
  "teacher.gaps.subtitle":
    "The concepts behind the mistakes most of your students made this week.",
  "teacher.interventions.title": "Top intervention recommendations",
  "teacher.interventions.subtitle":
    "Suggested 5-minute mini-demos to run with the whole class before the next session.",

  "how.title": "How BridgeLab AI works",
  "how.subtitle":
    "A small, transparent pipeline. Designed so a teacher can explain it in one slide.",
  "how.s1Title": "1. Student uploads",
  "how.s1Body":
    "A photo or short video of the build is captured on a tablet or phone, locally.",
  "how.s2Title": "2. Component detection",
  "how.s2Body":
    "A vision model identifies the components on the bench: board, LED, resistor, sensor, driver, jumpers.",
  "how.s3Title": "3. Rule-guided inference",
  "how.s3Body":
    "Detected components and their relationships are checked against a library of common lab mistakes.",
  "how.s4Title": "4. GenAI explanation",
  "how.s4Body":
    "A language model writes a short, age-appropriate explanation in Arabic or English from the structured diagnosis.",
  "how.s5Title": "5. Hint-first pedagogy",
  "how.s5Body":
    "The response is shaped as a hint plus a follow-up question instead of a full solution.",
  "how.s6Title": "6. Teacher analytics",
  "how.s6Body":
    "Anonymous diagnoses are aggregated into class-level errors, safety alerts, and intervention suggestions.",

  "footer.rights": "BridgeLab AI prototype",
  "footer.note":
    "Demo build. All analysis runs locally with deterministic mock data.",
};

const ar: Record<DictKey, string> = {
  "nav.product": "BridgeLab AI",
  "nav.student": "الطالب",
  "nav.teacher": "المعلّم",
  "nav.howItWorks": "كيف يعمل",
  "nav.lang": "اللغة",
  "common.tagline":
    "مدرّب ذكاء توليدي ثنائي اللغة لتشخيص أعطال مختبرات العلوم والتقنية",
  "common.tryStudent": "تجربة الطالب",
  "common.openTeacher": "لوحة المعلّم",
  "common.analyze": "حلّل التركيب",
  "common.analyzeAnother": "حلّل تركيباً آخر",
  "common.useDemoSample": "استخدم مثالاً جاهزاً",
  "common.uploadOrChoose": "ارفع صورة أو فيديو قصير",
  "common.dropHere": "أفلت الملف هنا",
  "common.preview": "معاينة",
  "common.confidence": "الثقة",
  "common.detectedIssue": "المشكلة المُكتشفة",
  "common.whyItMatters": "لماذا يهم؟",
  "common.guidedHint": "تلميح موجَّه",
  "common.safetyNote": "ملاحظة سلامة",
  "common.followUp": "نقطة تحقّق ختامية",
  "common.suggestedNext": "الخطوة التالية المقترحة",
  "common.share": "مشاركة",
  "common.download": "تنزيل بطاقة الملخّص",
  "common.copyLink": "نسخ رابط المشاركة",
  "common.exportSummary": "تصدير الملخّص",
  "common.statusNeedsAttention": "بحاجة إلى انتباه",
  "common.statusSafeToRetry": "إعادة المحاولة آمنة",
  "common.statusTeacherReview": "يُنصح بمراجعة المعلّم",
  "common.langEN": "English",
  "common.langAR": "العربية",
  "common.poweredBy": "بدعم من BridgeLab AI",

  "landing.heroTitle": "ساعد طلابك على إصلاح تركيبات المختبر دون أن تعطيهم الحل جاهزاً.",
  "landing.heroSubtitle":
    "يحلّل BridgeLab AI صورة أو فيديو قصير لتركيب إلكتروني أو روبوتي، يكتشف الأخطاء المحتملة، ثم يرشد الطالب بالعربية أو الإنجليزية بأسلوب التلميح أولاً.",
  "landing.heroBlurb":
    "صُمّم لفصول العلوم والتقنية حيث لا يستطيع المعلّم متابعة كل طاولة في الوقت نفسه.",
  "landing.problemTitle": "الطاولة مزدحمة، والمعلّم شخصٌ واحد.",
  "landing.problemBody":
    "في أي مختبر STEM حقيقي يقع عشرون طالباً في أخطاء توصيل صغيرة في نفس اللحظة. ينتظرون أو يخمنون أو يحصلون على الإجابة جاهزة. BridgeLab AI يمنح كل طالب مدرّباً ثنائي اللغة يشرح المشكلة ويسأله السؤال الصحيح التالي.",
  "landing.featuresTitle": "ماذا يقدّم",
  "landing.f1Title": "كشف الأخطاء الأكثر شيوعاً",
  "landing.f1Body":
    "يميّز أخطاء التوصيل والقطبية وتعيين الأطراف من صورة واحدة أو مقطع قصير.",
  "landing.f2Title": "شرح بالعربية أو الإنجليزية",
  "landing.f2Body":
    "واجهة ثنائية اللغة كاملة مع دعم صحيح لاتجاه RTL، وليست أداة مترجمة جزئياً.",
  "landing.f3Title": "تعلّم بالتلميح أولاً",
  "landing.f3Body":
    "يُعيد تلميحاً موجّهاً وسؤال متابعة بدلاً من إعطاء الحل كاملاً.",
  "landing.f4Title": "رؤى صفّية للمعلّم",
  "landing.f4Body":
    "يجمع النتائج بشكل مجهول الهوية في لوحة تعرض الأخطاء الشائعة والفجوات التعليمية.",
  "landing.f5Title": "ملاحظات تراعي السلامة",
  "landing.f5Body":
    "يُنبّه إلى أخطاء قد تسبب احتراقاً أو قصراً كهربائياً قبل توصيل التغذية.",

  "landing.responsibleTitle": "ذكاء اصطناعي مسؤول من التصميم",
  "landing.responsibleHint":
    "تلميح أولاً، وليس إفشاء الحل. الطالب لا يزال يُفكّر.",
  "landing.responsibleControl":
    "المعلّم يبقى المتحكّم. رؤى مجمّعة لا مراقبة فردية.",
  "landing.responsibleData":
    "بيانات طلاب أقل ما يمكن. لا حسابات ولا معلومات شخصية، والسجل يبقى محلياً.",
  "landing.responsibleSafety":
    "صُمّم لدعم جلسات مختبر أكثر أماناً عبر إبراز قضايا السلامة أولاً.",
  "landing.howTitle": "كيف يعمل",
  "landing.howBlurb": "من الصورة على الطاولة إلى لوحة المعلّم في خمس خطوات.",
  "landing.exploreHow": "استعرض المسار الكامل",

  "student.title": "مدرّب الطالب",
  "student.subtitle":
    "ارفع صورة لتركيبك أو اختر مثالاً جاهزاً. سننظر إلى التوصيلات، نحدّد المشكلة الأرجح، ونرشدك خطوة بخطوة.",
  "student.languageLabel": "لغة الإجابة",
  "student.samplesLabel": "جرّب سيناريو تجريبياً",
  "student.sampleArduinoGround": "دائرة أردوينو معطوبة",
  "student.sampleReversedLED": "قطبية LED معكوسة",
  "student.sampleMissingResistor": "مقاومة مفقودة",
  "student.sampleWrongSensor": "توصيل حساس خاطئ",
  "student.sampleRobotMotor": "خلل توصيل في الروبوت",
  "student.dropTitle": "أفلت صورة أو فيديو قصير",
  "student.dropBody":
    "PNG أو JPG أو MP4 حتى 25 ميجابايت. لا يتم رفع الملف إلى أي خادم.",
  "student.removeFile": "حذف الملف",
  "student.step.upload": "استلام ملفّك",
  "student.step.detect": "كشف المكوّنات",
  "student.step.diagnose": "تحديد المشكلة الأرجح",
  "student.step.explain": "إنشاء شرح واضح",
  "student.step.hint": "تجهيز التلميح الموجَّه",
  "student.analyzing": "جارٍ التحليل",
  "student.shareTitle": "ملخّص جلسة مختبر BridgeLab AI",
  "student.generatedBy": "أنشئ بواسطة BridgeLab AI",

  "teacher.title": "لوحة المعلّم",
  "teacher.subtitle": "عرض مجهول الهوية لأماكن تعثّر صفّك هذا الأسبوع.",
  "teacher.kpi.totalUploads": "إجمالي الرفعات",
  "teacher.kpi.commonMistake": "أكثر خطأ شيوعاً",
  "teacher.kpi.safetyAlerts": "تنبيهات السلامة",
  "teacher.kpi.needSupport": "طلاب يحتاجون دعماً",
  "teacher.charts.errorCategories": "فئات الأخطاء الشائعة",
  "teacher.charts.errorByLab": "الأخطاء حسب نوع المختبر",
  "teacher.charts.languageUsage": "استخدام اللغات",
  "teacher.charts.submissionTrend": "الرفعات خلال 7 أيام",
  "teacher.recent.title": "آخر التحليلات الطلابية",
  "teacher.recent.student": "الطالب",
  "teacher.recent.issue": "المشكلة المُكتشفة",
  "teacher.recent.status": "الحالة",
  "teacher.recent.lang": "اللغة",
  "teacher.recent.time": "الوقت",
  "teacher.gaps.title": "الفجوات التعليمية",
  "teacher.gaps.subtitle":
    "المفاهيم الكامنة خلف الأخطاء الأكثر تكراراً عند طلابك هذا الأسبوع.",
  "teacher.interventions.title": "أهم تدخّلات المعلّم المقترحة",
  "teacher.interventions.subtitle":
    "عروض قصيرة لمدة 5 دقائق ينصح بتقديمها للصف قبل الجلسة القادمة.",

  "how.title": "كيف يعمل BridgeLab AI",
  "how.subtitle":
    "خطّ معالجة صغير وشفّاف، يمكن للمعلّم شرحه في شريحة واحدة.",
  "how.s1Title": "١. رفع الطالب",
  "how.s1Body":
    "تُلتقط صورة أو فيديو قصير للتركيب من الجهاز اللوحي أو الهاتف محلياً.",
  "how.s2Title": "٢. كشف المكوّنات",
  "how.s2Body":
    "نموذج رؤية يحدّد القطع على الطاولة: اللوحة، LED، المقاومة، الحساس، درايفر المحرك، الأسلاك.",
  "how.s3Title": "٣. استدلال موجّه بالقواعد",
  "how.s3Body":
    "تُقارن المكوّنات وعلاقاتها بمكتبة من الأخطاء المختبرية الشائعة.",
  "how.s4Title": "٤. شرح بالذكاء التوليدي",
  "how.s4Body":
    "نموذج لغوي يكتب شرحاً قصيراً ومناسباً للعمر بالعربية أو الإنجليزية بناءً على التشخيص.",
  "how.s5Title": "٥. أسلوب التلميح أولاً",
  "how.s5Body":
    "تُصاغ الإجابة على شكل تلميح وسؤال متابعة بدل تقديم الحل كاملاً.",
  "how.s6Title": "٦. تحليلات المعلّم",
  "how.s6Body":
    "تُجمع التشخيصات بشكل مجهول الهوية في أخطاء صفّية وتنبيهات سلامة وتدخّلات مقترحة.",

  "footer.rights": "نموذج BridgeLab AI",
  "footer.note":
    "نسخة تجريبية. جميع التحليلات تعمل محلياً ببيانات تجريبية حتمية.",
};

export const DICTIONARY: Record<Lang, Record<DictKey, string>> = { en, ar };
