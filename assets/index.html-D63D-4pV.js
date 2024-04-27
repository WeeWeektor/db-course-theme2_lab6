import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as e}from"./app-Bw0BcbY-.js";const i={},t=e(`<h1 id="реалізація-інформаціиного-та-програмного-забезпечення" tabindex="-1"><a class="header-anchor" href="#реалізація-інформаціиного-та-програмного-забезпечення"><span>Реалізація інформаційного та програмного забезпечення</span></a></h1><h2 id="sql-скрипт-для-створення-початкового-наповнення-бази-даних" tabindex="-1"><a class="header-anchor" href="#sql-скрипт-для-створення-початкового-наповнення-бази-даних"><span>SQL-Скрипт для створення початкового наповнення бази даних</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">BEGIN</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Users&quot;</span>
<span class="token punctuation">(</span>
    id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    login <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    first_name <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    last_name <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    password <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    email <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    role_id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Roles&quot;</span>
<span class="token punctuation">(</span>
    id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    alias <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Permission_Roles&quot;</span>
<span class="token punctuation">(</span>
    role_id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    permission_id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Permissions&quot;</span>
<span class="token punctuation">(</span>
    id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    alias <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Accesses&quot;</span>
<span class="token punctuation">(</span>
    user_id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    permission_id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    dataset_id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Datasets&quot;</span>
<span class="token punctuation">(</span>
    id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    title <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    description <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    rating <span class="token keyword">real</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    datafile_id <span class="token keyword">integer</span><span class="token punctuation">,</span>
    category_id <span class="token keyword">integer</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Datafiles&quot;</span>
<span class="token punctuation">(</span>
    id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    guid uuid <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    alias <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    mime <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token string">&quot;description&quot;</span> <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    size <span class="token keyword">real</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token string">&quot;uploadedAt&quot;</span> <span class="token keyword">timestamp</span> without <span class="token keyword">time</span> zone <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    user_id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Categories&quot;</span>
<span class="token punctuation">(</span>
    id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    name <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    description <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    parent_category_id <span class="token keyword">integer</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Updates&quot;</span>
<span class="token punctuation">(</span>
    <span class="token keyword">hash</span> <span class="token keyword">character</span> <span class="token keyword">varying</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    updatet_at <span class="token keyword">timestamp</span> without <span class="token keyword">time</span> zone <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    message <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">150</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    difference <span class="token keyword">character</span> <span class="token keyword">varying</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    user_id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    dataset_id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Users&quot;</span>
    <span class="token keyword">ADD</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>role_id<span class="token punctuation">)</span>
    <span class="token keyword">REFERENCES</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Roles&quot;</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">MATCH</span> <span class="token keyword">SIMPLE</span>
    <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token operator">NOT</span> VALID<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Permission_Roles&quot;</span>
    <span class="token keyword">ADD</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>role_id<span class="token punctuation">)</span>
    <span class="token keyword">REFERENCES</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Roles&quot;</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">MATCH</span> <span class="token keyword">SIMPLE</span>
    <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token operator">NOT</span> VALID<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Permission_Roles&quot;</span>
    <span class="token keyword">ADD</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>permission_id<span class="token punctuation">)</span>
    <span class="token keyword">REFERENCES</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Permissions&quot;</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">MATCH</span> <span class="token keyword">SIMPLE</span>
    <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token operator">NOT</span> VALID<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Accesses&quot;</span>
    <span class="token keyword">ADD</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>user_id<span class="token punctuation">)</span>
    <span class="token keyword">REFERENCES</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Users&quot;</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">MATCH</span> <span class="token keyword">SIMPLE</span>
    <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token operator">NOT</span> VALID<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Accesses&quot;</span>
    <span class="token keyword">ADD</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>permission_id<span class="token punctuation">)</span>
    <span class="token keyword">REFERENCES</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Permissions&quot;</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">MATCH</span> <span class="token keyword">SIMPLE</span>
    <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token operator">NOT</span> VALID<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Accesses&quot;</span>
    <span class="token keyword">ADD</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>dataset_id<span class="token punctuation">)</span>
    <span class="token keyword">REFERENCES</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Datasets&quot;</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">MATCH</span> <span class="token keyword">SIMPLE</span>
    <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token operator">NOT</span> VALID<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Datasets&quot;</span>
    <span class="token keyword">ADD</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>datafile_id<span class="token punctuation">)</span>
    <span class="token keyword">REFERENCES</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Datafiles&quot;</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">MATCH</span> <span class="token keyword">SIMPLE</span>
    <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token operator">NOT</span> VALID<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Datasets&quot;</span>
    <span class="token keyword">ADD</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>category_id<span class="token punctuation">)</span>
    <span class="token keyword">REFERENCES</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Categories&quot;</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">MATCH</span> <span class="token keyword">SIMPLE</span>
    <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token operator">NOT</span> VALID<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Datafiles&quot;</span>
    <span class="token keyword">ADD</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>user_id<span class="token punctuation">)</span>
    <span class="token keyword">REFERENCES</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Users&quot;</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">MATCH</span> <span class="token keyword">SIMPLE</span>
    <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token operator">NOT</span> VALID<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Categories&quot;</span>
    <span class="token keyword">ADD</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>parent_category_id<span class="token punctuation">)</span>
    <span class="token keyword">REFERENCES</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Categories&quot;</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">MATCH</span> <span class="token keyword">SIMPLE</span>
    <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token operator">NOT</span> VALID<span class="token punctuation">;</span>
	
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Updates&quot;</span>
    <span class="token keyword">ADD</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>user_id<span class="token punctuation">)</span>
    <span class="token keyword">REFERENCES</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Users&quot;</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">MATCH</span> <span class="token keyword">SIMPLE</span>
    <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token operator">NOT</span> VALID<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Updates&quot;</span>
    <span class="token keyword">ADD</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>dataset_id<span class="token punctuation">)</span>
    <span class="token keyword">REFERENCES</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Datasets&quot;</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">MATCH</span> <span class="token keyword">SIMPLE</span>
    <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token operator">NOT</span> VALID<span class="token punctuation">;</span>

<span class="token keyword">END</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="restfull-сервіс-для-управління-даними" tabindex="-1"><a class="header-anchor" href="#restfull-сервіс-для-управління-даними"><span>RESTfull сервіс для управління даними</span></a></h2><h3 id="restfull-servise-для-управління-даними-таблиці-datafiles-створеноі-в-postgresql-було-створено-за-допомогою-фреимворку-flask-на-мові-python" tabindex="-1"><a class="header-anchor" href="#restfull-servise-для-управління-даними-таблиці-datafiles-створеноі-в-postgresql-було-створено-за-допомогою-фреимворку-flask-на-мові-python"><span>RESTfull_servise для управління даними таблиці Datafiles створеної в PostgreSQL було створено за допомогою фреймворку flask на мові Python.</span></a></h3><h3 id="підєднання-до-бази-даних" tabindex="-1"><a class="header-anchor" href="#підєднання-до-бази-даних"><span>Підєднання до бази даних</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import psycopg2


conn = psycopg2.connect(
    database=&quot;postgres&quot;,
    user=&quot;User&quot;,
    password=&quot;1234567890&quot;,
    host=&quot;localhost&quot;,
    port=&quot;5432&quot;
)


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="модуль-відповідальнии-за-видалення-даних-з-бази-даних" tabindex="-1"><a class="header-anchor" href="#модуль-відповідальнии-за-видалення-даних-з-бази-даних"><span>Модуль відповідальний за видалення даних з бази даних</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>from psycopg2 import errors


def delete_data(cur, guid, user_email, id=None):
    try:
        cur.execute(f&#39;&#39;&#39;SELECT id, role_id FROM &quot;Users&quot; WHERE email = %s&#39;&#39;&#39;, (user_email,))
        get_data = cur.fetchone()
        if get_data[1] == 1:
            if id is None:
                delete_data_from_db = f&#39;&#39;&#39;DELETE FROM &quot;Datafiles&quot; WHERE guid = %s&#39;&#39;&#39;
                data = (guid,)
            else:
                delete_data_from_db = f&#39;&#39;&#39;DELETE FROM &quot;Datafiles&quot; WHERE guid = %s AND id = %s&#39;&#39;&#39;
                data = (guid, id)
            cur.execute(delete_data_from_db, data)
            cur.connection.commit()
            return &quot;Data delete successful!&quot;
        elif get_data[1] == 2:
            return {&#39;error&#39;: &#39;Access denied&#39;}
        else:
            return {&#39;data&#39;: &quot;Ви не зареєстровані в системі&quot;}
    except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction) as e:
        raise e
    except TypeError:
        raise
    finally:
        cur.close()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="модуль-відповідальнии-за-отримання-даних-з-бази-даних" tabindex="-1"><a class="header-anchor" href="#модуль-відповідальнии-за-отримання-даних-з-бази-даних"><span>Модуль відповідальний за отримання даних з бази даних</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>from psycopg2 import errors


def get_all_data(cur):
    cur.execute(&#39;&#39;&#39;SELECT json_build_object(
                          &#39;id&#39;, id,
                          &#39;guid&#39;, guid,
                          &#39;alias&#39;, alias,
                          &#39;mime&#39;, mime,
                          &#39;description&#39;, description,
                          &#39;size&#39;, size,
                          &#39;uploadedAt&#39;, &quot;uploadedAt&quot;,
                          &#39;user_id&#39;, user_id,
                          &#39;url&#39;, url
                          ) AS data
                          FROM &quot;Datafiles&quot;&#39;&#39;&#39;)
    get_data = cur.fetchall()
    cur.close()
    return {&#39;data&#39;: get_data}


def get_data_description(cur, guid):
    try:
        cur.execute(f&#39;&#39;&#39;SELECT json_build_object(
                            &#39;id&#39;, id, 
                            &#39;description&#39;, description 
                            ) AS data
                            FROM &quot;Datafiles&quot; 
                            WHERE guid = %s&#39;&#39;&#39;, (guid,))
        get_data = cur.fetchall()
        if get_data:
            return {&#39;data&#39;: get_data}
        else:
            return {&#39;data&#39;: &quot;Неіснує даних з таким guid&quot;}
    except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction) as e:
        raise e
    finally:
        cur.close()


def get_data_info(cur, guid):
    try:
        cur.execute(f&#39;&#39;&#39;SELECT json_build_object(
                          &#39;id&#39;, id,
                          &#39;guid&#39;, guid,
                          &#39;alias&#39;, alias,
                          &#39;mime&#39;, mime,
                          &#39;size&#39;, size,
                          &#39;uploadedAt&#39;, &quot;uploadedAt&quot;,
                          &#39;user_id&#39;, user_id,
                          &#39;url&#39;, url
                          ) AS data
                          FROM &quot;Datafiles&quot; 
                          WHERE guid = %s&#39;&#39;&#39;, (guid,))
        get_data = cur.fetchall()
        if get_data:
            return {&#39;data&#39;: get_data}
        else:
            return {&#39;data&#39;: &quot;Неіснує даних з таким guid&quot;}
    except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction) as e:
        raise e
    finally:
        cur.close()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="модуль-відповідальнии-за-запис-даних-до-бази-даних" tabindex="-1"><a class="header-anchor" href="#модуль-відповідальнии-за-запис-даних-до-бази-даних"><span>Модуль відповідальний за запис даних до бази даних</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>from psycopg2 import errors


def insert_data(cur, guid, alias, mime, description, size, uploadedAt, url, user_email):
    try:
        cur.execute(f&#39;&#39;&#39;SELECT id, role_id FROM &quot;Users&quot; WHERE email = %s&#39;&#39;&#39;, (user_email,))
        get_data = cur.fetchone()
        if get_data[1] == 1:
            cur.execute(&#39;SELECT MAX(id) FROM &quot;Datafiles&quot; &#39;)
            next_id = cur.fetchall()
            insert_data_to_db = (f&#39;&#39;&#39;INSERT INTO &quot;Datafiles&quot;(
	                                 id, guid, alias, mime, description, size, &quot;uploadedAt&quot;, user_id, url)
                                     VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)&#39;&#39;&#39;)
            data = (next_id[-1][0]+1, guid, alias, mime, description, size, uploadedAt, get_data[0], url)
            cur.execute(insert_data_to_db, data)
            cur.connection.commit()
            return &quot;Data insert successful!&quot;
        elif get_data[1] == 2:
            return {&#39;error&#39;: &#39;Access denied&#39;}
        else:
            return {&#39;data&#39;: &quot;Ви не зареєстровані в системі&quot;}
    except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction,
            errors.StringDataRightTruncation) as e:
        raise e
    except TypeError:
        raise
    finally:
        cur.close()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rest-api-з-всіма-endpoint" tabindex="-1"><a class="header-anchor" href="#rest-api-з-всіма-endpoint"><span>Rest API з всіма Endpoint</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>from flask import Flask, jsonify, request
from psycopg2 import errors
from pytz import timezone

import datetime
import uuid
import connection_to_db
import get_data_from_db
import insert_data_to_db
import delete_data_from_db


app = Flask(__name__)


@app.route(&#39;/get_data&#39;, methods=[&#39;GET&#39;])
def get_data():
    with connection_to_db.conn.cursor() as cur:
        data = get_data_from_db.get_all_data(cur)
    return jsonify(data)


@app.route(&#39;/get_description&#39;, methods=[&#39;POST&#39;])
def get_description():
    request_data = request.get_json()
    guid = request_data.get(&#39;guid&#39;)
    if guid:
        try:
            with connection_to_db.conn.cursor() as cur:
                data = get_data_from_db.get_data_description(cur, guid)
            return jsonify(data)
        except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction) as e:
            connection_to_db.conn.rollback()
            return jsonify({&#39;error&#39;: str(e)}), 400
    else:
        return jsonify({&#39;error&#39;: &#39;Missing guid parameter&#39;}), 400


@app.route(&#39;/get_info_data&#39;, methods=[&#39;POST&#39;])
def get_info_data():
    request_data = request.get_json()
    guid = request_data.get(&#39;guid&#39;)
    if guid:
        try:
            with connection_to_db.conn.cursor() as cur:
                data = get_data_from_db.get_data_info(cur, guid)
            return jsonify(data)
        except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction) as e:
            connection_to_db.conn.rollback()
            return jsonify({&#39;error&#39;: str(e)}), 400
    else:
        return jsonify({&#39;error&#39;: &#39;Missing guid parameter&#39;}), 400


@app.route(&#39;/insert_data&#39;, methods=[&#39;POST&#39;])
def insert_new_data():
    request_data = request.get_json()
    guid = request_data.get(&#39;guid&#39;)
    if guid is None:
        guid = uuid.uuid4()
    uploadedAt = get_time()
    alias = request_data.get(&#39;alias&#39;)
    mime = request_data.get(&#39;mime&#39;)
    description = request_data.get(&#39;description&#39;)
    size = request_data.get(&#39;size&#39;)
    url = request_data.get(&#39;url&#39;)
    user_email = request_data.get(&#39;user_email&#39;)
    if alias and mime and description and size and url and user_email:
        try:
            with connection_to_db.conn.cursor() as cur:
                data = insert_data_to_db.insert_data(cur, str(guid), alias, mime, description, size, uploadedAt,
                                                     url, user_email)
            return jsonify(data)
        except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction,
                errors.StringDataRightTruncation) as e:
            return jsonify({&#39;error&#39;: str(e)}), 400
        except TypeError:
            return jsonify({&#39;error&#39;: &#39;This user not find&#39;}), 400
        finally:
            connection_to_db.conn.rollback()
    else:
        return jsonify({&#39;error&#39;: &#39;Missing parameters&#39;}), 400


@app.route(&#39;/delete_data&#39;, methods=[&#39;DELETE&#39;])
def delete_data():
    request_data = request.get_json()
    id = request_data.get(&#39;id&#39;)
    guid = request_data.get(&#39;guid&#39;)
    user_email = request_data.get(&#39;user_email&#39;)
    if guid and user_email:
        try:
            with connection_to_db.conn.cursor() as cur:
                if id is not None:
                    data = delete_data_from_db.delete_data(cur, str(guid), user_email, id)
                else:
                    data = delete_data_from_db.delete_data(cur, str(guid), user_email)
            return jsonify(data)
        except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction) as e:
            return jsonify({&#39;error&#39;: str(e)}), 400
        except TypeError:
            return jsonify({&#39;error&#39;: &#39;This user not find&#39;}), 400
        finally:
            connection_to_db.conn.rollback()
    else:
        return jsonify({&#39;error&#39;: &#39;Missing parameters&#39;}), 400




def get_time():
    uk_timezone = timezone(&quot;Europe/kiev&quot;)
    current_time = datetime.datetime.now(uk_timezone)
    time_str = current_time.strftime(&quot;%Y-%m-%d %H:%M:%S&quot;)
    return time_str


if __name__ == &#39;__main__&#39;:
    app.run()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),l=[t];function o(p,d){return s(),a("div",null,l)}const u=n(i,[["render",o],["__file","index.html.vue"]]),k=JSON.parse('{"path":"/software/","title":"Реалізація інформаційного та програмного забезпечення","lang":"en-US","frontmatter":{"description":"Реалізація інформаційного та програмного забезпечення SQL-Скрипт для створення початкового наповнення бази даних RESTfull сервіс для управління даними RESTfull_servise для управ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/db-course-theme2_lab6/software/"}],["meta",{"property":"og:site_name","content":"Система управління відкритими даними"}],["meta",{"property":"og:title","content":"Реалізація інформаційного та програмного забезпечення"}],["meta",{"property":"og:description","content":"Реалізація інформаційного та програмного забезпечення SQL-Скрипт для створення початкового наповнення бази даних RESTfull сервіс для управління даними RESTfull_servise для управ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-27T15:22:23.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T15:22:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Реалізація інформаційного та програмного забезпечення\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-27T15:22:23.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"SQL-Скрипт для створення початкового наповнення бази даних","slug":"sql-скрипт-для-створення-початкового-наповнення-бази-даних","link":"#sql-скрипт-для-створення-початкового-наповнення-бази-даних","children":[]},{"level":2,"title":"RESTfull сервіс для управління даними","slug":"restfull-сервіс-для-управління-даними","link":"#restfull-сервіс-для-управління-даними","children":[{"level":3,"title":"RESTfull_servise для управління даними таблиці Datafiles створеної в PostgreSQL було створено за допомогою фреймворку flask на мові Python.","slug":"restfull-servise-для-управління-даними-таблиці-datafiles-створеноі-в-postgresql-було-створено-за-допомогою-фреимворку-flask-на-мові-python","link":"#restfull-servise-для-управління-даними-таблиці-datafiles-створеноі-в-postgresql-було-створено-за-допомогою-фреимворку-flask-на-мові-python","children":[]},{"level":3,"title":"Підєднання до бази даних","slug":"підєднання-до-бази-даних","link":"#підєднання-до-бази-даних","children":[]},{"level":3,"title":"Модуль відповідальний за видалення даних з бази даних","slug":"модуль-відповідальнии-за-видалення-даних-з-бази-даних","link":"#модуль-відповідальнии-за-видалення-даних-з-бази-даних","children":[]},{"level":3,"title":"Модуль відповідальний за отримання даних з бази даних","slug":"модуль-відповідальнии-за-отримання-даних-з-бази-даних","link":"#модуль-відповідальнии-за-отримання-даних-з-бази-даних","children":[]},{"level":3,"title":"Модуль відповідальний за запис даних до бази даних","slug":"модуль-відповідальнии-за-запис-даних-до-бази-даних","link":"#модуль-відповідальнии-за-запис-даних-до-бази-даних","children":[]},{"level":3,"title":"Rest API з всіма Endpoint","slug":"rest-api-з-всіма-endpoint","link":"#rest-api-з-всіма-endpoint","children":[]}]}],"git":{"createdTime":1708081508000,"updatedTime":1714231343000,"contributors":[{"name":"Dmytro Zanuda","email":"dmzanuda.work@gmail.com","commits":2},{"name":"Viktor","email":"dypluka05@gmail.com","commits":1}]},"readingTime":{"minutes":0.27,"words":82},"filePathRelative":"software/README.md","localizedDate":"February 16, 2024","autoDesc":true}');export{u as comp,k as data};
