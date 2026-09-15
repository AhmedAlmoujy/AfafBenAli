/**
 * CHALLENGE & PSYCHOLOGICAL ASSESSMENT SCRIPT
 * Dr. Afaf Ben Ali - Psychological Assessment Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // Assessment State
  const answers = {};
  const totalQuestions = 15;

  // Pillar definitions
  const pillars = {
    1: { name: 'السكينة الروحية والاتصال بالله', max: 25, questions: [1, 2, 3, 4, 5] },
    2: { name: 'الجسد، المظهر، والعناية الذاتية', max: 25, questions: [6, 7, 8, 9, 10] },
    3: { name: 'الأهداف، الطموح، واتخاذ القرار', max: 25, questions: [11, 12, 13, 14, 15] }
  };

  // Content for lowest pillar from PDF
  const pillarDetails = {
    1: {
      title: 'السكينة الروحية والاتصال بالله',
      icon: 'fa-hands-praying',
      diagnosis: 'يبدو أن هذا الجانب من حياتكِ يحتاج إلى رعايتكِ واهتمامكِ الأكبر حالياً. قد تشعرين ببعض القلق الداخلي، أو التشتت، أو ربما تجدين صعوبة في التحرر من التعلق بأشخاص أو أمور دنيوية، مما يؤثر على سلامكِ الداخلي ويقينكِ بأن الله هو السند الحقيقي. هذا لا يعني ضعفاً في إيمانكِ، بل هو دعوة لتعميق هذا الاتصال وجعله مصدر قوتكِ وأمانكِ الأبدي.',
      steps: [
        {
          num: 1,
          name: 'ابدئي بـ "لحظات يقين" صغيرة',
          desc: 'خصصي 5 دقائق يومياً في أي وقت يناسبكِ لترديد ذكر الله (سبحان الله، الحمد لله، لا إله إلا الله، الله أكبر) أو الاستغفار. اجعليها لحظات واعية كأنكِ تتحدثين مع أقرب صديق لكِ. الهدف ليس العدد بل الشعور بالاتصال.'
        },
        {
          num: 2,
          name: 'تدبري آية واحدة يومياً',
          desc: 'اختاري آية قصيرة من القرآن الكريم واقرئيها بتمعن. حاولي أن تفهمي معناها وكيف يمكن أن تنطبق على حياتكِ اليومية. هذا سيساعدكِ على ربط كلام الله بواقعكِ.'
        },
        {
          num: 3,
          name: 'مارسي الامتنان الواعي',
          desc: 'قبل النوم، اكتبي 3 نعم صغيرة حدثت لكِ اليوم وتشعرين بالامتنان لله عليها. هذا يحول تركيزكِ من النقص إلى الوفرة ويقوي شعوركِ بالشكر والرضا.'
        }
      ],
      drAfafHelp: 'في «تحدي الحياة الطيبة»، ستتعلمين معنا كيف تبنين جسراً متيناً من اليقين بالله، وتتحررين من التعلقات التي تستنزف طاقتكِ، لتجدي السلام والأمان الحقيقي الذي ينبع من الداخل.'
    },
    2: {
      title: 'الجسد، المظهر، والعناية الذاتية',
      icon: 'fa-heart-pulse',
      diagnosis: 'يشير هذا الجانب إلى أن علاقتكِ بجسدكِ ومظهركِ قد تكون مصدراً لبعض التوتر أو عدم الرضا. قد تشعرين بالإرهاق، أو تهملين العناية بنفسكِ، أو ربما يؤثر مظهركِ على ثقتكِ بنفسكِ. جسدكِ هو أمانة من الله، والعناية به ليست ترفاً بل هي أساس لبريقكِ الداخلي والخارجي. تذكري أن حب الذات يبدأ من تقبل جسدكِ ورعايته.',
      steps: [
        {
          num: 1,
          name: 'ممارسة "مرآة التقبل"',
          desc: 'كل صباح، قفي أمام المرآة وانظري إلى نفسكِ. بدلاً من النقد، اختاري شيئاً واحداً تحبينه في مظهركِ أو جسدكِ وقولي "أنا أتقبل وأحب نفسي". كرري هذا بصدق.'
        },
        {
          num: 2,
          name: 'خطوة حركة صغيرة ممتعة',
          desc: 'لا تضغطي على نفسكِ بممارسة رياضة شاقة. اختاري نشاطاً جسدياً تستمتعين به حقاً ولو لمدة 15 دقيقة يومياً (مثل المشي في الهواء الطلق، الرقص على أنغامكِ المفضلة، أو تمارين الإطالة). اجعليها مكافأة لجسدكِ لا عقاباً.'
        },
        {
          num: 3,
          name: 'وجبة واحدة بوعي',
          desc: 'اختاري وجبة واحدة يومياً (مثل الإفطار أو الغداء) وتناوليها بوعي كامل. ركزي على الألوان، الروائح، والمذاقات. امضغي ببطء. هذا يساعدكِ على إعادة بناء علاقة صحية مع الغذاء وجسدكِ.'
        }
      ],
      drAfafHelp: 'في «تحدي الحياة الطيبة»، ستكتشفين كيف يمكنكِ أن تغذي جسدكِ وروحكِ معاً، وتتعلمين أسرار العناية الذاتية التي لا تقتصر على المظهر الخارجي، بل تنبع من حب عميق لذاتكِ لتشعري بالطاقة والثقة التي تستحقينها.'
    },
    3: {
      title: 'الأهداف، الطموح، واتخاذ القرار',
      icon: 'fa-compass',
      diagnosis: 'يشير هذا الجانب إلى أنكِ قد تشعرين ببعض الضبابية حول مساركِ في الحياة، أو تجدين صعوبة في اتخاذ القرارات، أو ربما يمنعكِ الخوف من الفشل أو حكم الآخرين من المضي قدماً نحو أحلامكِ. الشعور بالهدف هو وقود الروح، ووضوح الرؤية هو بوصلة النجاح. أنتِ تملكين القدرة على تحقيق ما تصبين إليه، وكل ما تحتاجينه هو الخطة الصحيحة والثقة في خطواتكِ.',
      steps: [
        {
          num: 1,
          name: 'تحديد "هدف واحد صغير" لهذا الأسبوع',
          desc: 'فكري في شيء واحد صغير جداً يمكنكِ تحقيقه هذا الأسبوع، سواء كان في حياتكِ الشخصية أو العملية، يجب أن يكون قابلاً للقياس والتحقيق بسهولة (مثال: قراءة 10 صفحات من كتاب، إرسال إيميل واحد بخصوص فكرة مشروع، ترتيب درج واحد في مكتبي).'
        },
        {
          num: 2,
          name: 'دفتر "أحلامي وقيمي"',
          desc: 'خصصي دفتراً صغيراً واكتبي فيه كل ما تحلمين به حتى لو بدا مستحيلاً. ثم اكتبي 3 قيم أساسية تهمكِ في الحياة (مثل: العائلة، الحرية، الإبداع، السلام). هذا يساعدكِ على تحديد بوصلتكِ الداخلية لقراراتكِ المستقبلية.'
        },
        {
          num: 3,
          name: 'تمرين "القرار الصغير"',
          desc: 'اختاري قراراً يومياً صغيراً (مثل: ماذا سأرتدي؟ ماذا سأتناول على الغداء؟) واتخذيه بسرعة وثقة دون تردد أو طلب رأي الآخرين. هذا يبني عضلة اتخاذ القرار لديكِ تدريجياً.'
        }
      ],
      drAfafHelp: 'في «تحدي الحياة الطيبة»، سنرشدكِ خطوة بخطوة لتوضيح رؤيتكِ، وتحديد أهدافكِ الحقيقية، وتزويدكِ بالأدوات اللازمة للتغلب على التسويف والخوف لتبدئي في بناء الحياة التي طالما حلمتِ بها بثقة ويقين.'
    }
  };

  // Stage levels based on total score (out of 75)
  function getStageLevel(total) {
    if (total >= 60) {
      return {
        name: 'مرحلة الإشراق والتمكين',
        icon: 'fa-sun',
        desc: 'ما شاء الله! تعيشين مستوى عالياً من الوعي والتوازن الداخلي، وبوصلتكِ واضحة في أغلب قراراتكِ. تحتاجين فقط لضبط بعض التفاصيل الصغيرة لتستمر رحلة تألقكِ بأعلى طاقة.'
      };
    } else if (total >= 45) {
      return {
        name: 'مرحلة التوازن والوعي الواعد',
        icon: 'fa-scale-balanced',
        desc: 'أنتِ في مسار طيب جداً ولديكِ أسس قوية من الوعي، مع وجود جانب رئيسي يستنزف طاقتكِ ويحتاج منكِ وقفة رعاية حقيقية ليعود التناغم لبقية جوانب حياتكِ.'
      };
    } else {
      return {
        name: 'مرحلة الاستكشاف وإعادة الاتصال بالذات',
        icon: 'fa-seedling',
        desc: 'هذه النتيجة هدية صادقة لكِ؛ تدل على أنكِ حملتِ الكثير وضغطتِ على نفسكِ لفترة طويلة. حان الوقت لتهدئي، وتضعي يدكِ بيدكِ لتبدئي معنا خطوة بخطوة في استعادة بريقكِ وسلامكِ.'
      };
    }
  }

  // Elements
  const progressBarFill = document.getElementById('progressBarFill');
  const progressText = document.getElementById('progressText');
  const progressCount = document.getElementById('progressCount');
  const calculateBtn = document.getElementById('calculateBtn');
  const resultsContainer = document.getElementById('resultsContainer');
  const retakeBtn = document.getElementById('retakeBtn');

  // Option selection logic
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const qNum = parseInt(btn.getAttribute('data-q'), 10);
      const score = parseInt(btn.getAttribute('data-score'), 10);

      // Save answer
      answers[qNum] = score;

      // Update card UI
      const card = btn.closest('.question-card');
      card.classList.add('answered');
      card.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      // Update Progress
      updateProgress();
    });
  });

  function updateProgress() {
    const answeredCount = Object.keys(answers).length;
    const percent = Math.round((answeredCount / totalQuestions) * 100);

    if (progressBarFill) {
      progressBarFill.style.width = `${percent}%`;
    }
    if (progressText) {
      progressText.textContent = `${percent}%`;
    }
    if (progressCount) {
      progressCount.textContent = `${answeredCount} من ${totalQuestions} عبارة مكتملة`;
    }

    // Scroll progress card pulse
    if (answeredCount === totalQuestions) {
      calculateBtn.removeAttribute('disabled');
      calculateBtn.innerHTML = 'عرض نتيجتي وخطة التحول ✨';
      calculateBtn.classList.add('ready');
    } else {
      calculateBtn.setAttribute('disabled', 'true');
      calculateBtn.innerHTML = `أكملي الإجابات (${answeredCount}/${totalQuestions}) لحساب النتيجة`;
    }
  }

  // Calculate & Show Results
  if (calculateBtn) {
    calculateBtn.addEventListener('click', () => {
      const answeredCount = Object.keys(answers).length;
      if (answeredCount < totalQuestions) {
        alert(`يرجى الإجابة على جميع العبارات الـ 15 (تمت الإجابة على ${answeredCount} فقط).`);
        return;
      }

      // Calculate Scores
      let totalScore = 0;
      const pillarScores = { 1: 0, 2: 0, 3: 0 };

      for (let i = 1; i <= 15; i++) {
        const val = answers[i] || 0;
        totalScore += val;
        if (i <= 5) pillarScores[1] += val;
        else if (i <= 10) pillarScores[2] += val;
        else pillarScores[3] += val;
      }

      // Find lowest pillar (tie-breaker: 1 > 2 > 3 in order of fundamental importance)
      let minScore = 999;
      let lowestPillar = 1;

      for (let p = 1; p <= 3; p++) {
        if (pillarScores[p] < minScore) {
          minScore = pillarScores[p];
          lowestPillar = p;
        }
      }

      const stage = getStageLevel(totalScore);
      const lowestDetails = pillarDetails[lowestPillar];

      // Populate UI Safely
      const totalScoreEl = document.getElementById('totalScoreDisplay');
      if (totalScoreEl) totalScoreEl.textContent = `${totalScore} / 75`;

      const p1El = document.getElementById('p1ScoreDisplay');
      if (p1El) p1El.textContent = `${pillarScores[1]} / 25`;

      const p2El = document.getElementById('p2ScoreDisplay');
      if (p2El) p2El.textContent = `${pillarScores[2]} / 25`;

      const p3El = document.getElementById('p3ScoreDisplay');
      if (p3El) p3El.textContent = `${pillarScores[3]} / 25`;

      // Highlight focus card
      document.querySelectorAll('.pillar-score-card').forEach(c => c.classList.remove('focus-area'));
      const focusCard = document.getElementById(`pillarCard${lowestPillar}`);
      if (focusCard) focusCard.classList.add('focus-area');

      // Stage banner
      const stageTitleEl = document.getElementById('stageTitle');
      if (stageTitleEl) stageTitleEl.textContent = stage.name;

      const stageDescEl = document.getElementById('stageDesc');
      if (stageDescEl) stageDescEl.textContent = stage.desc;

      const stageIconEl = document.getElementById('stageIcon');
      if (stageIconEl) stageIconEl.className = `fa-solid ${stage.icon}`;

      // Detailed Lowest Pillar Recommendation
      const lowestTitleEl = document.getElementById('lowestPillarTitle');
      if (lowestTitleEl) lowestTitleEl.textContent = `المحور الذي يحتاج اهتمامكِ الأكبر: ${lowestDetails.title}`;

      const lowestDiagEl = document.getElementById('lowestPillarDiagnosis');
      if (lowestDiagEl) lowestDiagEl.textContent = lowestDetails.diagnosis;

      // Practical Steps
      const stepsContainer = document.getElementById('actionStepsGrid');
      if (stepsContainer) {
        stepsContainer.innerHTML = '';
        lowestDetails.steps.forEach(step => {
          const stepEl = document.createElement('div');
          stepEl.className = 'action-step-card';
          stepEl.innerHTML = `
            <div class="action-step-badge">${step.num}</div>
            <div class="action-step-name">${step.name}</div>
            <div class="action-step-desc">${step.desc}</div>
          `;
          stepsContainer.appendChild(stepEl);
        });
      }

      // Dr Afaf Help
      const drHelpEl = document.getElementById('drAfafHelpText');
      if (drHelpEl) drHelpEl.textContent = lowestDetails.drAfafHelp;

      // Reveal Results & Scroll smoothly
      if (resultsContainer) {
        resultsContainer.classList.add('visible');
        resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // Retake
  if (retakeBtn) {
    retakeBtn.addEventListener('click', () => {
      // Clear answers
      for (let k in answers) delete answers[k];
      document.querySelectorAll('.question-card').forEach(c => {
        c.classList.remove('answered');
        c.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
      });
      updateProgress();
      resultsContainer.classList.remove('visible');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
