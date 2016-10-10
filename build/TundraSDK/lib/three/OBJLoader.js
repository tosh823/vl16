/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.OBJLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager,this.materials=null,this.regexp={
// v float float float
vertex_pattern:/^v\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
// vn float float float
normal_pattern:/^vn\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
// vt float float
uv_pattern:/^vt\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
// f vertex vertex vertex
face_vertex:/^f\s+(-?\d+)\s+(-?\d+)\s+(-?\d+)(?:\s+(-?\d+))?/,
// f vertex/uv vertex/uv vertex/uv
face_vertex_uv:/^f\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+))?/,
// f vertex/uv/normal vertex/uv/normal vertex/uv/normal
face_vertex_uv_normal:/^f\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+)\/(-?\d+))?/,
// f vertex//normal vertex//normal vertex//normal
face_vertex_normal:/^f\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)(?:\s+(-?\d+)\/\/(-?\d+))?/,
// o object_name | g group_name
object_pattern:/^[og]\s*(.+)?/,
// s boolean
smoothing_pattern:/^s\s+(\d+|on|off)/,
// mtllib file_reference
material_library_pattern:/^mtllib /,
// usemtl material_name
material_use_pattern:/^usemtl /}},THREE.OBJLoader.prototype={constructor:THREE.OBJLoader,load:function(a,b,c,d){var e=this,f=new THREE.XHRLoader(e.manager);f.setPath(this.path),f.load(a,function(a){b(e.parse(a))},c,d)},setPath:function(a){this.path=a},setMaterials:function(a){this.materials=a},_createParserState:function(){var a={objects:[],object:{},vertices:[],normals:[],uvs:[],materialLibraries:[],startObject:function(a,b){
// If the current object (initial from reset) is not from a g/o declaration in the parsed
// file. We need to use it for the first parsed g/o to keep things in sync.
// If the current object (initial from reset) is not from a g/o declaration in the parsed
// file. We need to use it for the first parsed g/o to keep things in sync.
return this.object&&this.object.fromDeclaration===!1?(this.object.name=a,void(this.object.fromDeclaration=b!==!1)):(this.object={name:a||"",geometry:{vertices:[],normals:[],uvs:[]},material:{name:"",smooth:!0},fromDeclaration:b!==!1},void this.objects.push(this.object))},parseVertexIndex:function(a,b){var c=parseInt(a,10);return 3*(c>=0?c-1:c+b/3)},parseNormalIndex:function(a,b){var c=parseInt(a,10);return 3*(c>=0?c-1:c+b/3)},parseUVIndex:function(a,b){var c=parseInt(a,10);return 2*(c>=0?c-1:c+b/2)},addVertex:function(a,b,c){var d=this.vertices,e=this.object.geometry.vertices;e.push(d[a+0]),e.push(d[a+1]),e.push(d[a+2]),e.push(d[b+0]),e.push(d[b+1]),e.push(d[b+2]),e.push(d[c+0]),e.push(d[c+1]),e.push(d[c+2])},addVertexLine:function(a){var b=this.vertices,c=this.object.geometry.vertices;c.push(b[a+0]),c.push(b[a+1]),c.push(b[a+2])},addNormal:function(a,b,c){var d=this.normals,e=this.object.geometry.normals;e.push(d[a+0]),e.push(d[a+1]),e.push(d[a+2]),e.push(d[b+0]),e.push(d[b+1]),e.push(d[b+2]),e.push(d[c+0]),e.push(d[c+1]),e.push(d[c+2])},addUV:function(a,b,c){var d=this.uvs,e=this.object.geometry.uvs;e.push(d[a+0]),e.push(d[a+1]),e.push(d[b+0]),e.push(d[b+1]),e.push(d[c+0]),e.push(d[c+1])},addUVLine:function(a){var b=this.uvs,c=this.object.geometry.uvs;c.push(b[a+0]),c.push(b[a+1])},addFace:function(a,b,c,d,e,f,g,h,i,j,k,l){var m,n=this.vertices.length,o=this.parseVertexIndex(a,n),p=this.parseVertexIndex(b,n),q=this.parseVertexIndex(c,n);if(void 0===d?this.addVertex(o,p,q):(m=this.parseVertexIndex(d,n),this.addVertex(o,p,m),this.addVertex(p,q,m)),void 0!==e){var r=this.uvs.length;o=this.parseUVIndex(e,r),p=this.parseUVIndex(f,r),q=this.parseUVIndex(g,r),void 0===d?this.addUV(o,p,q):(m=this.parseUVIndex(h,r),this.addUV(o,p,m),this.addUV(p,q,m))}if(void 0!==i){
// Normals are many times the same. If so, skip function call and parseInt.
var s=this.normals.length;o=this.parseNormalIndex(i,s),p=i===j?o:this.parseNormalIndex(j,s),q=i===k?o:this.parseNormalIndex(k,s),void 0===d?this.addNormal(o,p,q):(m=this.parseNormalIndex(l,s),this.addNormal(o,p,m),this.addNormal(p,q,m))}},addLineGeometry:function(a,b){this.object.geometry.type="Line";for(var c=this.vertices.length,d=this.uvs.length,e=0,f=a.length;e<f;e++)this.addVertexLine(this.parseVertexIndex(a[e],c));for(var g=0,f=b.length;g<f;g++)this.addUVLine(this.parseUVIndex(b[g],d))}};return a.startObject("",!1),a},parse:function(a){console.time("OBJLoader");var b=this._createParserState();a.indexOf("\r\n")!==-1&&(
// This is faster than String.split with regex that splits on both
a=a.replace("\r\n","\n"));for(var c=a.split("\n"),d="",e="",f="",g=0,h=[],i="function"==typeof"".trimLeft,j=0,k=c.length;j<k;j++)if(d=c[j],d=i?d.trimLeft():d.trim(),g=d.length,0!==g&&(e=d.charAt(0),"#"!==e))if("v"===e)if(f=d.charAt(1)," "===f&&null!==(h=this.regexp.vertex_pattern.exec(d)))
// 0                  1      2      3
// ["v 1.0 2.0 3.0", "1.0", "2.0", "3.0"]
b.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));else if("n"===f&&null!==(h=this.regexp.normal_pattern.exec(d)))
// 0                   1      2      3
// ["vn 1.0 2.0 3.0", "1.0", "2.0", "3.0"]
b.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));else{if("t"!==f||null===(h=this.regexp.uv_pattern.exec(d)))throw new Error("Unexpected vertex/normal/uv line: '"+d+"'");
// 0               1      2
// ["vt 0.1 0.2", "0.1", "0.2"]
b.uvs.push(parseFloat(h[1]),parseFloat(h[2]))}else if("f"===e)if(null!==(h=this.regexp.face_vertex_uv_normal.exec(d)))
// f vertex/uv/normal vertex/uv/normal vertex/uv/normal
// 0                        1    2    3    4    5    6    7    8    9   10         11         12
// ["f 1/1/1 2/2/2 3/3/3", "1", "1", "1", "2", "2", "2", "3", "3", "3", undefined, undefined, undefined]
b.addFace(h[1],h[4],h[7],h[10],h[2],h[5],h[8],h[11],h[3],h[6],h[9],h[12]);else if(null!==(h=this.regexp.face_vertex_uv.exec(d)))
// f vertex/uv vertex/uv vertex/uv
// 0                  1    2    3    4    5    6   7          8
// ["f 1/1 2/2 3/3", "1", "1", "2", "2", "3", "3", undefined, undefined]
b.addFace(h[1],h[3],h[5],h[7],h[2],h[4],h[6],h[8]);else if(null!==(h=this.regexp.face_vertex_normal.exec(d)))
// f vertex//normal vertex//normal vertex//normal
// 0                     1    2    3    4    5    6   7          8
// ["f 1//1 2//2 3//3", "1", "1", "2", "2", "3", "3", undefined, undefined]
b.addFace(h[1],h[3],h[5],h[7],void 0,void 0,void 0,void 0,h[2],h[4],h[6],h[8]);else{if(null===(h=this.regexp.face_vertex.exec(d)))throw new Error("Unexpected face line: '"+d+"'");
// f vertex vertex vertex
// 0            1    2    3   4
// ["f 1 2 3", "1", "2", "3", undefined]
b.addFace(h[1],h[2],h[3],h[4])}else if("l"===e){var l=d.substring(1).trim().split(" "),m=[],n=[];if(d.indexOf("/")===-1)m=l;else for(var o=0,p=l.length;o<p;o++){var q=l[o].split("/");""!==q[0]&&m.push(q[0]),""!==q[1]&&n.push(q[1])}b.addLineGeometry(m,n)}else if(null!==(h=this.regexp.object_pattern.exec(d))){
// o object_name
// or
// g group_name
var r=h[0].substr(1).trim();b.startObject(r)}else if(this.regexp.material_use_pattern.test(d))
// material
b.object.material.name=d.substring(7).trim();else if(this.regexp.material_library_pattern.test(d))
// mtl file
b.materialLibraries.push(d.substring(7).trim());else{if(null===(h=this.regexp.smoothing_pattern.exec(d))){
// Handle null terminated files without exception
if("\0"===d)continue;throw new Error("Unexpected line: '"+d+"'")}
// smooth shading
var s=h[1].trim().toLowerCase();b.object.material.smooth="1"===s||"on"===s}var t=new THREE.Group;t.materialLibraries=[].concat(b.materialLibraries);for(var j=0,k=b.objects.length;j<k;j++){var u=b.objects[j],v=u.geometry,w="Line"===v.type;
// Skip o/g line declarations that did not follow with any faces
if(0!==v.vertices.length){var x=new THREE.BufferGeometry;x.addAttribute("position",new THREE.BufferAttribute(new Float32Array(v.vertices),3)),v.normals.length>0?x.addAttribute("normal",new THREE.BufferAttribute(new Float32Array(v.normals),3)):x.computeVertexNormals(),v.uvs.length>0&&x.addAttribute("uv",new THREE.BufferAttribute(new Float32Array(v.uvs),2));var y;if(null!==this.materials&&(y=this.materials.create(u.material.name),w&&y&&!(y instanceof THREE.LineBasicMaterial))){var z=new THREE.LineBasicMaterial;z.copy(y),y=z}y||(y=w?new THREE.LineBasicMaterial:new THREE.MeshPhongMaterial,y.name=u.material.name),y.shading=u.material.smooth?THREE.SmoothShading:THREE.FlatShading;var A=w?new THREE.Line(x,y):new THREE.Mesh(x,y);A.name=u.name,t.add(A)}}return console.timeEnd("OBJLoader"),t}};