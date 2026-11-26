/* Sample data – lives only in memory. Refresh the page and everything resets. */
const pad=n=>String(n).padStart(2,'0');
const iso=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const dayOff=n=>{const d=new Date();d.setDate(d.getDate()+n);return iso(d)};

const DOC={name:'ডা. আনিকা রহমান',spec:'মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ',exp:15,phone:'০১৭০০-০০০০০০',email:'info@dr-demo.example',
 addr:'বাড়ি ১২৩, রোড ৮, ধানমন্ডি, ঢাকা',hours:'শনি–বৃহস্পতি: সকাল ১০টা–১টা, বিকেল ৫টা–রাত ৯টা (শুক্রবার বন্ধ)',
 quals:[['এমবিবিএস','ঢাকা মেডিকেল কলেজ','২০০৫'],['এমডি (মেডিসিন)','বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়','২০১০'],['ডায়াবেটিস ফেলোশিপ','নমুনা ইনস্টিটিউট','২০১৩'],['সদস্য','নমুনা মেডিকেল অ্যাসোসিয়েশন','২০১১ –']]};
const SERVICES=[
 {id:1,name:'সাধারণ পরামর্শ',desc:'সম্পূর্ণ চেক-আপ ও ব্যক্তিগত স্বাস্থ্য পরামর্শ।',price:500,icon:'bi-stethoscope'},
 {id:2,name:'ডায়াবেটিস ব্যবস্থাপনা',desc:'সুগার কন্ট্রোল, ডায়েট ও ওষুধ পরিকল্পনা।',price:800,icon:'bi-droplet-half'},
 {id:3,name:'হৃদরোগ স্ক্রিনিং',desc:'ইসিজি, ব্লাড প্রেসার ও ঝুঁকি মূল্যায়ন।',price:1200,icon:'bi-heart-pulse'},
 {id:4,name:'টিকা ও ইমিউনাইজেশন',desc:'শিশু ও প্রাপ্তবয়স্কদের নিয়মিত টিকা।',price:300,icon:'bi-shield-plus'},
 {id:5,name:'অনলাইন ফলো-আপ',desc:'ভিডিও কলে সংক্ষিপ্ত ফলো-আপ পরামর্শ।',price:400,icon:'bi-camera-video'},
 {id:6,name:'স্বাস্থ্য পরীক্ষা প্যাকেজ',desc:'প্রয়োজনীয় সব পরীক্ষা এক প্যাকেজে।',price:2000,icon:'bi-clipboard2-pulse'}];
const ACATS=[{id:1,name:'ফার্স্ট এইড',icon:'bi-bandaid'},{id:2,name:'মেডিকেল ডিভাইস',icon:'bi-activity'},{id:3,name:'পার্সোনাল কেয়ার',icon:'bi-droplet'},{id:4,name:'ওয়েলনেস',icon:'bi-flower1'}];
const CC={'ফার্স্ট এইড':['#ef6c6c','#f6a56b'],'মেডিকেল ডিভাইস':['#0a6ebd','#3cb4e5'],'পার্সোনাল কেয়ার':['#12a36b','#6fd4a6'],'ওয়েলনেস':['#8a5cf6','#c3a6ff']};
const PRODUCTS=[
 {id:1,name:'ডিজিটাল থার্মোমিটার',cat:'মেডিকেল ডিভাইস',price:350,old:450,stock:40,icon:'bi-thermometer-half',desc:'দ্রুত ও নির্ভুল তাপমাত্রা পরিমাপ, জ্বরের অ্যালার্মসহ।'},
 {id:2,name:'ব্লাড প্রেসার মনিটর',cat:'মেডিকেল ডিভাইস',price:2800,old:3200,stock:15,icon:'bi-activity',desc:'আপার-আর্ম অটোমেটিক মনিটর, মেমোরি সুবিধাসহ।'},
 {id:3,name:'ফার্স্ট এইড কিট (১২০ পিস)',cat:'ফার্স্ট এইড',price:1200,old:null,stock:25,icon:'bi-bandaid',desc:'ঘর ও ভ্রমণের জন্য সম্পূর্ণ প্রাথমিক চিকিৎসা কিট।'},
 {id:4,name:'পালস অক্সিমিটার',cat:'মেডিকেল ডিভাইস',price:1500,old:1800,stock:0,icon:'bi-heart-pulse',desc:'আঙুলের ডগায় SpO2 ও পালস রিডিং।'},
 {id:5,name:'ফেস মাস্ক (৫০ পিস)',cat:'ফার্স্ট এইড',price:250,old:null,stock:100,icon:'bi-shield-check',desc:'৩-স্তরের সার্জিক্যাল মাস্ক।'},
 {id:6,name:'হ্যান্ড স্যানিটাইজার ৫০০ml',cat:'পার্সোনাল কেয়ার',price:180,old:220,stock:80,icon:'bi-droplet',desc:'৭০% অ্যালকোহল-ভিত্তিক জীবাণুনাশক।'},
 {id:7,name:'ভিটামিন ডি৩ (৯০ ক্যাপসুল)',cat:'ওয়েলনেস',price:650,old:null,stock:60,icon:'bi-capsule',desc:'দৈনিক সাপ্লিমেন্ট (ডেমো পণ্য)।'},
 {id:8,name:'গ্লুকোমিটার কিট',cat:'মেডিকেল ডিভাইস',price:1800,old:2200,stock:20,icon:'bi-droplet-half',desc:'ব্লাড সুগার পরীক্ষার কিট, ২৫টি স্ট্রিপসহ।'},
 {id:9,name:'ইলাস্টিক ব্যান্ডেজ',cat:'ফার্স্ট এইড',price:120,old:null,stock:150,icon:'bi-bandaid-fill',desc:'মচকানো ও ফোলা অংশের জন্য।'},
 {id:10,name:'হারবাল টি (ডেমো)',cat:'ওয়েলনেস',price:300,old:350,stock:35,icon:'bi-cup-hot',desc:'প্রাকৃতিক উপাদানে তৈরি চা (ডেমো পণ্য)।'}];
const CAMPAIGNS=[
 {id:1,name:'বিনামূল্যে স্বাস্থ্য ক্যাম্প',desc:'গ্রামীণ এলাকায় বিনামূল্যে চেক-আপ ও ওষুধ বিতরণ।',goal:200000,raised:125000,icon:'bi-hospital',c:['#0a6ebd','#3cb4e5']},
 {id:2,name:'দরিদ্র রোগীর চিকিৎসা সহায়তা',desc:'অসহায় রোগীদের ওষুধ ও পরীক্ষার খরচে সহায়তা।',goal:500000,raised:310000,icon:'bi-heart-pulse',c:['#12a36b','#6fd4a6']},
 {id:3,name:'শিশু টিকাদান কর্মসূচি',desc:'সুবিধাবঞ্চিত শিশুদের জন্য বিনামূল্যে টিকা।',goal:150000,raised:90000,icon:'bi-shield-plus',c:['#8a5cf6','#c3a6ff']}];
const REVIEWS=[['করিম উদ্দিন','ডায়াবেটিস রোগী','ডাক্তার খুব মনোযোগ দিয়ে শোনেন এবং সহজ ভাষায় বুঝিয়ে দেন।'],['সালমা বেগম','অভিভাবক','অনলাইনে অ্যাপয়েন্টমেন্ট নেওয়া খুব সহজ ছিল।'],['জাহিদ হাসান','রোগী','শপ থেকে অর্ডার করা পণ্য দ্রুত পেয়েছি।']];
const PATIENTS=[
 {id:1,name:'রাফি আহমেদ',email:'rafi@example.com',phone:'০১৭১১-১১১১১১',joined:dayOff(-120),addr:'মিরপুর, ঢাকা',age:32,gender:'পুরুষ'},
 {id:2,name:'সুমাইয়া খান',email:'sumaiya@example.com',phone:'০১৮১২-২২২২২২',joined:dayOff(-90),addr:'উত্তরা, ঢাকা',age:28,gender:'মহিলা'},
 {id:3,name:'তানভীর হাসান',email:'tanvir@example.com',phone:'০১৯১৩-৩৩৩৩৩৩',joined:dayOff(-60),addr:'গুলশান, ঢাকা',age:45,gender:'পুরুষ'},
 {id:4,name:'নুসরাত জাহান',email:'nusrat@example.com',phone:'০১৬১৪-৪৪৪৪৪৪',joined:dayOff(-30),addr:'বনানী, ঢাকা',age:36,gender:'মহিলা'},
 {id:5,name:'ফারহান কবীর',email:'farhan@example.com',phone:'০১৫১৫-৫৫৫৫৫৫',joined:dayOff(-10),addr:'মোহাম্মদপুর, ঢাকা',age:52,gender:'পুরুষ'},
 {id:6,name:'আয়েশা সিদ্দিকা',email:'ayesha@example.com',phone:'০১৭১৬-৬৬৬৬৬৬',joined:dayOff(-2),addr:'ধানমন্ডি, ঢাকা',age:24,gender:'মহিলা'}];
const ME=PATIENTS[0];
const APPTS=[
 {id:'APT-1001',patient:'রাফি আহমেদ',svc:'সাধারণ পরামর্শ',date:dayOff(3),time:'সন্ধ্যা ৬:০০',status:'approved'},
 {id:'APT-1002',patient:'সুমাইয়া খান',svc:'ডায়াবেটিস ব্যবস্থাপনা',date:dayOff(1),time:'সকাল ১১:০০',status:'pending'},
 {id:'APT-1003',patient:'রাফি আহমেদ',svc:'ডায়াবেটিস ব্যবস্থাপনা',date:dayOff(-10),time:'বিকেল ৫:৩০',status:'completed'},
 {id:'APT-1004',patient:'তানভীর হাসান',svc:'হৃদরোগ স্ক্রিনিং',date:dayOff(5),time:'সন্ধ্যা ৭:০০',status:'pending'},
 {id:'APT-1005',patient:'নুসরাত জাহান',svc:'টিকা ও ইমিউনাইজেশন',date:dayOff(-3),time:'সকাল ১০:৩০',status:'completed'},
 {id:'APT-1006',patient:'রাফি আহমেদ',svc:'অনলাইন ফলো-আপ',date:dayOff(-20),time:'রাত ৮:০০',status:'cancelled'},
 {id:'APT-1007',patient:'ফারহান কবীর',svc:'সাধারণ পরামর্শ',date:dayOff(2),time:'বিকেল ৫:০০',status:'pending'}];
const ORDERS=[
 {id:'ORD-2001',cust:'রাফি আহমেদ',date:dayOff(-5),status:'delivered',items:[{n:'ডিজিটাল থার্মোমিটার',q:1,p:350},{n:'ফার্স্ট এইড কিট (১২০ পিস)',q:1,p:1200}]},
 {id:'ORD-2002',cust:'সুমাইয়া খান',date:dayOff(-2),status:'processing',items:[{n:'ব্লাড প্রেসার মনিটর',q:1,p:2800}]},
 {id:'ORD-2003',cust:'তানভীর হাসান',date:dayOff(-1),status:'pending',items:[{n:'ভিটামিন ডি৩ (৯০ ক্যাপসুল)',q:1,p:650}]},
 {id:'ORD-2004',cust:'রাফি আহমেদ',date:dayOff(-15),status:'delivered',items:[{n:'ফার্স্ট এইড কিট (১২০ পিস)',q:1,p:1200}]},
 {id:'ORD-2005',cust:'নুসরাত জাহান',date:dayOff(0),status:'shipped',items:[{n:'ফেস মাস্ক (৫০ পিস)',q:1,p:250},{n:'হ্যান্ড স্যানিটাইজার ৫০০ml',q:1,p:180}]}];
const DONATIONS=[
 {id:'DON-3001',donor:'রাফি আহমেদ',camp:'বিনামূল্যে স্বাস্থ্য ক্যাম্প',amt:500,date:dayOff(-8)},
 {id:'DON-3002',donor:'বেনামী',camp:'দরিদ্র রোগীর চিকিৎসা সহায়তা',amt:1000,date:dayOff(-6)},
 {id:'DON-3003',donor:'সুমাইয়া খান',camp:'শিশু টিকাদান কর্মসূচি',amt:200,date:dayOff(-4)},
 {id:'DON-3004',donor:'রাফি আহমেদ',camp:'দরিদ্র রোগীর চিকিৎসা সহায়তা',amt:100,date:dayOff(-2)},
 {id:'DON-3005',donor:'তানভীর হাসান',camp:'বিনামূল্যে স্বাস্থ্য ক্যাম্প',amt:2000,date:dayOff(-1)}];
const MSGS=[
 {id:1,name:'আরিফ হোসেন',email:'arif@example.com',subject:'চেম্বারের সময়সূচি',msg:'শুক্রবার কি চেম্বার খোলা থাকে?',read:false},
 {id:2,name:'মিতা রহমান',email:'mita@example.com',subject:'রিপোর্ট দেখানো',msg:'আমি অনলাইনে রিপোর্ট পাঠাতে পারব কি?',read:false},
 {id:3,name:'শফিক আলম',email:'shafiq@example.com',subject:'শপ সম্পর্কে',msg:'গ্লুকোমিটার স্ট্রিপ কি আলাদা কেনা যায়?',read:true},
 {id:4,name:'লুবনা আক্তার',email:'lubna@example.com',subject:'ধন্যবাদ',msg:'চিকিৎসার জন্য অনেক ধন্যবাদ।',read:true}];
const NOTIFS=[
 {t:'আপনার অ্যাপয়েন্টমেন্ট APT-1001 অনুমোদিত হয়েছে।',d:'আজ',i:'bi-calendar-check',read:false},
 {t:'অর্ডার ORD-2001 ডেলিভারি সম্পন্ন হয়েছে।',d:'৫ দিন আগে',i:'bi-box-seam',read:false},
 {t:'আপনার অনুদানের জন্য ধন্যবাদ (ডেমো)।',d:'৮ দিন আগে',i:'bi-heart',read:true},
 {t:'স্বাস্থ্য টিপস: প্রতিদিন ৩০ মিনিট হাঁটুন।',d:'১ সপ্তাহ আগে',i:'bi-lightbulb',read:true}];
const STAFF=[
 {id:1,name:'অ্যাডমিন ডেমো',email:'admin@example.com',role:'অ্যাডমিন',active:true},
 {id:2,name:'রিসেপশনিস্ট ডেমো',email:'reception@example.com',role:'রিসেপশন',active:true},
 {id:3,name:'কনটেন্ট এডিটর',email:'editor@example.com',role:'এডিটর',active:false}];
const ST={pending:['অপেক্ষমাণ','warning text-dark'],approved:['অনুমোদিত','primary'],completed:['সম্পন্ন','success'],cancelled:['বাতিল','secondary'],rejected:['প্রত্যাখ্যাত','danger'],processing:['প্রসেসিং','info text-dark'],shipped:['শিপড','primary'],delivered:['ডেলিভারড','success']};
