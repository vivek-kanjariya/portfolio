"use strict";(self.webpackChunkport_app=self.webpackChunkport_app||[]).push([[6707],{6707:(r,s,t)=>{t.d(s,{Absorbers:()=>i});var a=t(4864);class i{constructor(r){this.container=r,this.array=[],this.absorbers=[],this.interactivityAbsorbers=[],r.getAbsorber=r=>void 0===r||(0,a.Ib)(r)?this.array[null!==r&&void 0!==r?r:0]:this.array.find((s=>s.name===r)),r.addAbsorber=async(r,s)=>this.addAbsorber(r,s)}async addAbsorber(r,s){const{AbsorberInstance:a}=await t.e(6372).then(t.bind(t,6372)),i=new a(this,this.container,r,s);return this.array.push(i),i}draw(r){for(const s of this.array)s.draw(r)}handleClickMode(r){const s=this.absorbers,t=this.interactivityAbsorbers;if("absorber"===r){const r=(0,a.pd)(t),i=null!==r&&void 0!==r?r:(0,a.pd)(s),e=this.container.interactivity.mouse.clickPosition;this.addAbsorber(i,e)}}async init(){this.absorbers=this.container.actualOptions.absorbers,this.interactivityAbsorbers=this.container.actualOptions.interactivity.modes.absorbers;const r=(0,a.yW)(this.absorbers,(async r=>{await this.addAbsorber(r)}));r instanceof Array?await Promise.all(r):await r}particleUpdate(r){for(const s of this.array)if(s.attract(r),r.destroyed)break}removeAbsorber(r){const s=this.array.indexOf(r);s>=0&&this.array.splice(s,1)}resize(){for(const r of this.array)r.resize()}stop(){this.array=[]}}}}]);
//# sourceMappingURL=6707.8da7d897.chunk.js.map