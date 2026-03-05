## ১. JSX কী এবং কেন ব্যবহার করা হয়?

JSX (JavaScript XML) হলো JavaScript-এর একটি syntax extension, যা ডেভেলপারদের JavaScript এর ভেতরে HTML-এর মতো কোড লিখতে দেয়। এটি React component তৈরি করা সহজ ও পড়তে সুবিধাজনক করে তোলে। JSX ব্যবহার করলে UI structure এবং logic একই ফাইলে লেখা যায়, ফলে কোড আরও পরিষ্কার এবং বোঝা সহজ হয়। React সরাসরি JSX বুঝতে পারে না, তাই Babel এর মতো tool ব্যবহার করে JSX কে সাধারণ JavaScript-এ রূপান্তর করা হয়। এর ফলে UI development দ্রুত এবং সহজ হয়।


## ২. State এবং Props এর মধ্যে পার্থক্য কী?

React-এ **State** এবং **Props** দুটিই ডাটা পরিচালনার জন্য ব্যবহৃত হয়, তবে তাদের কাজ ভিন্ন।

**Props (Properties):**

* Props ব্যবহার করা হয় parent component থেকে child component-এ ডাটা পাঠানোর জন্য।
* Props  **read-only** , অর্থাৎ child component এগুলো পরিবর্তন করতে পারে না।
* Props component-কে reusable করতে সাহায্য করে।

**State:**

* State component এর ভেতরে পরিবর্তনশীল ডাটা সংরক্ষণ করতে ব্যবহৃত হয়।
* এটি  **mutable** , অর্থাৎ পরিবর্তন করা যায়।
* State পরিবর্তন হলে component আবার re-render হয়।

সহজভাবে বললে, **Props parent থেকে child-এ ডাটা পাঠায়, আর State component এর ভেতরে ডাটা পরিচালনা করে।**


## ৩. `useState` Hook কী এবং এটি কীভাবে কাজ করে?

`useState` হলো React এর একটি Hook যা functional component-এ state ব্যবহার করার সুযোগ দেয়। এটি দুইটি জিনিস return করে: বর্তমান state এবং state update করার একটি function।

উদাহরণ:

<pre class="overflow-visible! px-0!" data-start="1477" data-end="1727"><div class="relative w-full my-4"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">import</span><span> { </span><span class="ͼe">useState</span><span> } </span><span class="ͼ8">from</span><span></span><span class="ͼc">"react"</span><span>;</span><br/><br/><span class="ͼ8">function</span><span></span><span class="ͼe">Counter</span><span>() {</span><br/><span></span><span class="ͼ8">const</span><span> [</span><span class="ͼe">count</span><span>, </span><span class="ͼe">setCount</span><span>] </span><span class="ͼ8">=</span><span></span><span class="ͼe">useState</span><span>(</span><span class="ͼb">0</span><span>);</span><br/><br/><span></span><span class="ͼ8">return</span><span> (</span><br/><span></span><span class="ͼg"><div></span><br/><span></span><span class="ͼg"><p></span><span>Count: {</span><span class="ͼe">count</span><span>}</span><span class="ͼg"></p></span><br/><span></span><span class="ͼg"><button</span><span></span><span class="ͼf">onClick</span><span class="ͼ8">=</span><span>{() => </span><span class="ͼe">setCount</span><span>(</span><span class="ͼe">count</span><span></span><span class="ͼ8">+</span><span></span><span class="ͼb">1</span><span>)}</span><span class="ͼg">></span><span>Increase</span><span class="ͼg"></button></span><br/><span></span><span class="ͼg"></div></span><br/><span>  );</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

এটি যেভাবে কাজ করে:

* `useState(0)` দ্বারা state এর প্রাথমিক মান 0 নির্ধারণ করা হয়।
* `count` বর্তমান মান সংরক্ষণ করে।
* `setCount()` ব্যবহার করে state আপডেট করা হয়।
* `setCount` কল করা হলে React component আবার render হয় এবং নতুন মান দেখায়।

## ৪. React-এ component এর মধ্যে state কীভাবে share করা যায়?

React-এ state share করার জন্য সাধারণত **lifting state up** পদ্ধতি ব্যবহার করা হয়।

ধাপগুলো হলো:

1. State-কে child component থেকে parent component-এ নিয়ে যাওয়া।
2. Parent component থেকে state-কে props হিসেবে child component-এ পাঠানো।
3. State update করার function-কে props হিসেবে পাঠানো।

উদাহরণ:

<pre class="overflow-visible! px-0!" data-start="2343" data-end="2523"><div class="relative w-full my-4"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">function</span><span></span><span class="ͼe">Parent</span><span>() {</span><br/><span></span><span class="ͼ8">const</span><span> [</span><span class="ͼe">count</span><span>, </span><span class="ͼe">setCount</span><span>] </span><span class="ͼ8">=</span><span></span><span class="ͼe">useState</span><span>(</span><span class="ͼb">0</span><span>);</span><br/><br/><span></span><span class="ͼ8">return</span><span> (</span><br/><span></span><span class="ͼg"><></span><br/><span></span><span class="ͼg"><ChildA</span><span></span><span class="ͼf">count</span><span class="ͼ8">=</span><span>{</span><span class="ͼe">count</span><span>} </span><span class="ͼg">/></span><br/><span></span><span class="ͼg"><ChildB</span><span></span><span class="ͼf">setCount</span><span class="ͼ8">=</span><span>{</span><span class="ͼe">setCount</span><span>} </span><span class="ͼg">/></span><br/><span></span><span class="ͼg"></></span><br/><span>  );</span><br/><span>}</span></div></div></div></div></div></div></div></div></div></div></div></div></pre>


## ৫. React-এ event handling কীভাবে করা হয়?

React-এ event handling HTML এর মতো হলেও কিছু পার্থক্য রয়েছে। এখানে **camelCase syntax** ব্যবহার করা হয় এবং event-এ function দেওয়া হয়।

উদাহরণ:

<pre class="overflow-visible! px-0!" data-start="2853" data-end="3016"><div class="relative w-full my-4"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">function</span><span></span><span class="ͼe">Button</span><span>() {</span><br/><span></span><span class="ͼ8">const</span><span></span><span class="ͼe">handleClick</span><span></span><span class="ͼ8">=</span><span> () => {</span><br/><span></span><span class="ͼe">alert</span><span>(</span><span class="ͼc">"Button clicked!"</span><span>);</span><br/><span>  };</span><br/><br/><span></span><span class="ͼ8">return</span><span></span><span class="ͼg"><button</span><span></span><span class="ͼf">onClick</span><span class="ͼ8">=</span><span>{</span><span class="ͼe">handleClick</span><span>}</span><span class="ͼg">></span><span>Click Me</span><span class="ͼg"></button></span><span>;</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

মূল বিষয়গুলো:

* Event name camelCase হয় যেমন `onClick`, `onChange`, `onSubmit`।
* এখানে string না দিয়ে function pass করা হয়।
* React **Synthetic Event** ব্যবহার করে যাতে সব browser-এ event একইভাবে কাজ করে।

আরেকটি উদাহরণ:

<pre class="overflow-visible! px-0!" data-start="3245" data-end="3318"><div class="relative w-full my-4"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼg"><input</span><span></span><span class="ͼf">onChange</span><span class="ͼ8">=</span><span>{(</span><span class="ͼe">e</span><span>) => </span><span class="ͼe">console</span><span class="ͼ8">.</span><span>log(</span><span class="ͼe">e</span><span class="ͼ8">.</span><span>target</span><span class="ͼ8">.</span><span>value)} </span><span class="ͼg">/></span></div></div></div></div></div></div></div></div></div></div></div></div></pre>
