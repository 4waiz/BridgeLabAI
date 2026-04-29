import type { Scenario, ScenarioId } from "@/types";

export const SCENARIOS: Record<ScenarioId, Scenario> = {
  "arduino-ground-error": {
    id: "arduino-ground-error",
    labType: "arduino",
    confidence: 0.92,
    status: "needs-attention",
    teacherCategory: "Power & Grounding",
    affectedConcept: "Common ground / Reference voltage",
    sampleImage: "/samples/arduino-ground.svg",
    overlays: [
      { x: 18, y: 38, w: 22, h: 14, label: "Arduino GND" },
      { x: 64, y: 52, w: 22, h: 14, label: "Module GND (missing link)" },
    ],
    copy: {
      en: {
        issueTitle: "Missing common ground between Arduino and external module",
        explanation:
          "The Arduino board and the external module each have their own GND, but they are not connected together. Without a shared reference, signal levels become unpredictable and the module may behave erratically.",
        hint: "Look at where each component takes its 0 V reference. What happens to a digital HIGH/LOW signal if the two boards disagree on what 'ground' means?",
        safetyNote:
          "Floating grounds can cause sudden voltage spikes. Power down before re-wiring.",
        followUpQuestion:
          "If you connect a single jumper between the two GND rails, which other readings on your multimeter should change?",
        suggestedNextAction:
          "Add a jumper from any Arduino GND pin to the module's GND, then re-run your sketch.",
      },
      ar: {
        issueTitle: "غياب الأرضي المشترك بين الأردوينو والوحدة الخارجية",
        explanation:
          "لكل من لوحة الأردوينو والوحدة الخارجية طرف أرضي خاص بها، ولكنهما غير متصلين معاً. بدون مرجع مشترك تصبح مستويات الإشارة غير متوقعة وقد تتصرف الوحدة بشكل غير منتظم.",
        hint: "تأمّل من أين تأخذ كل قطعة مرجع الـ 0 فولت لديها. ماذا يحدث لإشارة رقمية HIGH/LOW إذا اختلفت اللوحتان في تعريف \"الأرضي\"؟",
        safetyNote:
          "الأرضيات العائمة قد تسبب قفزات جهد مفاجئة. أوقف التغذية قبل إعادة التوصيل.",
        followUpQuestion:
          "إذا وصلت سلكاً واحداً بين أرضيي اللوحتين، أي قراءات أخرى على المالتيميتر يجب أن تتغير؟",
        suggestedNextAction:
          "صل سلكاً من أي طرف GND على الأردوينو إلى GND الوحدة، ثم أعد تشغيل الكود.",
      },
    },
  },

  "reversed-led": {
    id: "reversed-led",
    labType: "led-circuit",
    confidence: 0.88,
    status: "safe-to-retry",
    teacherCategory: "Component polarity",
    affectedConcept: "Diode polarity / Anode vs cathode",
    sampleImage: "/samples/reversed-led.svg",
    overlays: [{ x: 38, y: 30, w: 24, h: 30, label: "LED reversed" }],
    copy: {
      en: {
        issueTitle: "LED inserted with reversed polarity",
        explanation:
          "The LED's longer leg (anode, +) appears to be on the ground side and the shorter leg (cathode, −) on the supply side. LEDs only conduct in one direction, so no light is emitted.",
        hint: "Which leg of an LED should face the positive supply rail? Check the leg lengths and the flat edge on the plastic housing.",
        safetyNote:
          "Safe to retry. Reversed LEDs do not light but generally are not damaged at low currents.",
        followUpQuestion:
          "If you flip the LED, what other component in this circuit must still remain in series with it, and why?",
        suggestedNextAction:
          "Flip the LED so the longer leg connects toward +5 V through your resistor.",
      },
      ar: {
        issueTitle: "تركيب الـ LED بقطبية معكوسة",
        explanation:
          "يبدو أن الطرف الأطول للـ LED (المصعد +) موجود في جهة الأرضي، والطرف الأقصر (المهبط −) في جهة التغذية. الـ LED يوصل التيار في اتجاه واحد فقط، لذلك لا يضيء.",
        hint: "أي طرف من الـ LED يجب أن يتجه نحو القطب الموجب؟ تحقق من طول الأطراف ومن الحافة المسطحة على الغلاف.",
        safetyNote: "يمكنك إعادة المحاولة بأمان. الـ LED المعكوس لا يضيء لكنه عادةً لا يتلف عند تيار منخفض.",
        followUpQuestion:
          "إذا قلبت الـ LED، ما المكوّن الآخر الذي يجب أن يبقى على التسلسل معه ولماذا؟",
        suggestedNextAction:
          "اقلب الـ LED بحيث يتصل الطرف الأطول نحو 5 فولت عبر المقاومة.",
      },
    },
  },

  "missing-resistor": {
    id: "missing-resistor",
    labType: "led-circuit",
    confidence: 0.95,
    status: "needs-attention",
    teacherCategory: "Current limiting",
    affectedConcept: "Ohm's Law / Current limiting",
    sampleImage: "/samples/missing-resistor.svg",
    overlays: [{ x: 32, y: 44, w: 36, h: 18, label: "No resistor in series" }],
    copy: {
      en: {
        issueTitle: "LED wired without a current-limiting resistor",
        explanation:
          "The LED is connected directly between +5 V and GND. With no resistor in series, the current is limited only by the LED itself, which causes overheating and rapid failure.",
        hint: "Use Ohm's Law with a 5 V supply, a typical LED forward voltage of 2 V, and a safe LED current around 10 mA. What resistor value falls out?",
        safetyNote:
          "Direct-driven LEDs can overheat and fail almost immediately. Disconnect power before changing the circuit.",
        followUpQuestion:
          "If your supply were 9 V instead of 5 V, would your resistor get bigger or smaller, and why?",
        suggestedNextAction:
          "Add a 220 Ω – 330 Ω resistor in series with the LED before re-applying power.",
      },
      ar: {
        issueTitle: "توصيل LED بدون مقاومة لتحديد التيار",
        explanation:
          "الـ LED موصول مباشرة بين 5 فولت والأرضي. بدون مقاومة على التسلسل، يتحدد التيار فقط بالـ LED نفسه مما يؤدي إلى ارتفاع حرارته وتلفه سريعاً.",
        hint: "طبّق قانون أوم بافتراض تغذية 5 فولت وجهد سقوط للـ LED حوالي 2 فولت وتيار آمن قرابة 10 مللي أمبير. ما قيمة المقاومة الناتجة؟",
        safetyNote: "الـ LED بدون مقاومة قد يحترق فوراً. افصل التغذية قبل أي تعديل.",
        followUpQuestion:
          "لو كانت التغذية 9 فولت بدلاً من 5 فولت، هل ستكبر المقاومة أم تصغر، ولماذا؟",
        suggestedNextAction:
          "أضف مقاومة 220 إلى 330 أوم على التسلسل مع الـ LED قبل توصيل التغذية مجدداً.",
      },
    },
  },

  "wrong-sensor-pin": {
    id: "wrong-sensor-pin",
    labType: "sensors",
    confidence: 0.83,
    status: "teacher-review",
    teacherCategory: "Pin assignment",
    affectedConcept: "Digital vs analog pins / Datasheet reading",
    sampleImage: "/samples/wrong-sensor-pin.svg",
    overlays: [
      { x: 22, y: 26, w: 26, h: 16, label: "Sensor DATA line" },
      { x: 56, y: 24, w: 22, h: 14, label: "Connected to analog pin" },
    ],
    copy: {
      en: {
        issueTitle: "DHT11 data line wired to a non-digital pin",
        explanation:
          "The sensor's DATA line is connected to an analog-only pin. The DHT11 uses a single-wire digital protocol that needs a pin capable of fast digital I/O.",
        hint: "Open the sensor's datasheet. What kind of pin does its DATA line require, and which pins on your board match that capability?",
        safetyNote:
          "No safety risk, but the sketch will return NaN or stale readings until rewired.",
        followUpQuestion:
          "Why does the DHT11 protocol care so much about timing on the data line, and which Arduino library function is matching that timing for you?",
        suggestedNextAction:
          "Move the data wire to a digital pin (e.g. D2) and update DHT.begin(2) in your sketch.",
      },
      ar: {
        issueTitle: "توصيل خط بيانات DHT11 بطرف غير رقمي",
        explanation:
          "خط البيانات (DATA) للحساس موصول بطرف تماثلي فقط. حساس DHT11 يستخدم بروتوكول رقمي ذي سلك واحد ويحتاج إلى طرف رقمي سريع.",
        hint: "افتح ورقة بيانات الحساس. ما نوع الطرف الذي يحتاجه خط البيانات وأيّ أطراف لوحتك مطابقة لذلك؟",
        safetyNote:
          "لا خطر سلامة مباشر، لكن الكود سيعيد قراءات NaN أو قديمة حتى يتم التصحيح.",
        followUpQuestion:
          "لماذا يهتم بروتوكول DHT11 بالتوقيت على خط البيانات، وأي دالة في مكتبة الأردوينو تتولى ذلك التوقيت؟",
        suggestedNextAction:
          "انقل سلك البيانات إلى طرف رقمي مثل D2 وحدّث ‎DHT.begin(2)‎ في الكود.",
      },
    },
  },

  "robot-motor-misconnection": {
    id: "robot-motor-misconnection",
    labType: "robotics",
    confidence: 0.86,
    status: "needs-attention",
    teacherCategory: "Motor driver wiring",
    affectedConcept: "H-bridge / Direction vs enable signals",
    sampleImage: "/samples/robot-motor.svg",
    overlays: [
      { x: 20, y: 30, w: 26, h: 18, label: "IN1 / IN2 swapped" },
      { x: 58, y: 38, w: 26, h: 18, label: "EN line miswired" },
    ],
    copy: {
      en: {
        issueTitle: "Motor driver IN1/IN2 swapped with the enable line",
        explanation:
          "On the L298N driver, IN1 and IN2 control direction while EN gates the motor on/off via PWM. The wiring swaps a direction line with the enable line, so the robot either does not move or always spins one way.",
        hint: "Re-read the driver's truth table. Which two pins decide direction, and which one decides whether the motor is allowed to move at all?",
        safetyNote:
          "Lift wheels off the ground before testing. A misdriven H-bridge can cause sudden full-speed motion.",
        followUpQuestion:
          "If you set IN1=HIGH and IN2=HIGH at the same time, what does the H-bridge do, and why is that not a useful state?",
        suggestedNextAction:
          "Re-route the EN pin to a PWM-capable Arduino pin and put IN1/IN2 back on plain digital pins.",
      },
      ar: {
        issueTitle: "تبديل IN1/IN2 مع طرف التمكين في درايفر المحرك",
        explanation:
          "في درايفر L298N يتحكم IN1 وIN2 بالاتجاه بينما EN يفعّل المحرك عبر PWM. التوصيل الحالي يبدّل خط اتجاه مع خط التمكين فلا يتحرك الروبوت أو يدور باتجاه واحد فقط.",
        hint: "أعد قراءة جدول الحقيقة للدرايفر. أي طرفين يقرران الاتجاه وأي طرف يقرر السماح للمحرك بالدوران أصلاً؟",
        safetyNote:
          "ارفع العجلات عن الأرض قبل الاختبار. التوصيل الخاطئ لجسر H قد يسبب حركة مفاجئة بأقصى سرعة.",
        followUpQuestion:
          "إذا جعلت IN1=HIGH وIN2=HIGH في نفس الوقت، ماذا يفعل جسر H ولماذا تعتبر هذه الحالة غير مفيدة؟",
        suggestedNextAction:
          "أعد توصيل طرف EN إلى طرف يدعم PWM وأعد IN1 وIN2 إلى أطراف رقمية عادية.",
      },
    },
  },
};

export const SCENARIO_LIST = Object.values(SCENARIOS);
