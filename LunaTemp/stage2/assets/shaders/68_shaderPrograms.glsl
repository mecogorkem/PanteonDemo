["\n#version 100\n\nuniform \tmediump vec4 unity_LightColor[8];\nuniform \tvec4 unity_LightPosition[8];\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_WorldToObject[4];\nuniform \tmediump vec4 glstate_lightmodel_ambient;\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixV[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixInvV[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tmediump vec4 _Color;\nuniform \tmediump vec4 _SpecColor;\nuniform \tmediump vec4 _Emission;\nuniform \tmediump float _Shininess;\nuniform \tvec4 _MainTex_ST;\nattribute highp vec3 in_POSITION0;\nattribute highp vec3 in_NORMAL0;\nattribute highp vec3 in_TEXCOORD0;\nvarying mediump vec4 vs_COLOR0;\nvarying mediump vec3 vs_COLOR1;\nvarying highp vec2 vs_TEXCOORD0;\nvec4 u_xlat0;\nvec4 u_xlat1;\nvec3 u_xlat2;\nbool u_xlatb2;\nvec3 u_xlat3;\nvec3 u_xlat4;\nvec3 u_xlat5;\nvec3 u_xlat6;\nmediump vec3 u_xlat16_7;\nmediump vec3 u_xlat16_8;\nmediump vec3 u_xlat16_9;\nmediump vec3 u_xlat16_10;\nmediump vec3 u_xlat16_11;\nfloat u_xlat36;\nint u_xlati37;\nmediump float u_xlat16_43;\nmediump float u_xlat16_44;\nvoid main()\n{\n    u_xlat0.xyz = hlslcc_mtx4x4unity_ObjectToWorld[0].yyy * hlslcc_mtx4x4unity_MatrixV[1].xyz;\n    u_xlat0.xyz = hlslcc_mtx4x4unity_MatrixV[0].xyz * hlslcc_mtx4x4unity_ObjectToWorld[0].xxx + u_xlat0.xyz;\n    u_xlat0.xyz = hlslcc_mtx4x4unity_MatrixV[2].xyz * hlslcc_mtx4x4unity_ObjectToWorld[0].zzz + u_xlat0.xyz;\n    u_xlat0.xyz = hlslcc_mtx4x4unity_MatrixV[3].xyz * hlslcc_mtx4x4unity_ObjectToWorld[0].www + u_xlat0.xyz;\n    u_xlat1.xyz = hlslcc_mtx4x4unity_ObjectToWorld[1].yyy * hlslcc_mtx4x4unity_MatrixV[1].xyz;\n    u_xlat1.xyz = hlslcc_mtx4x4unity_MatrixV[0].xyz * hlslcc_mtx4x4unity_ObjectToWorld[1].xxx + u_xlat1.xyz;\n    u_xlat1.xyz = hlslcc_mtx4x4unity_MatrixV[2].xyz * hlslcc_mtx4x4unity_ObjectToWorld[1].zzz + u_xlat1.xyz;\n    u_xlat1.xyz = hlslcc_mtx4x4unity_MatrixV[3].xyz * hlslcc_mtx4x4unity_ObjectToWorld[1].www + u_xlat1.xyz;\n    u_xlat2.xyz = hlslcc_mtx4x4unity_ObjectToWorld[2].yyy * hlslcc_mtx4x4unity_MatrixV[1].xyz;\n    u_xlat2.xyz = hlslcc_mtx4x4unity_MatrixV[0].xyz * hlslcc_mtx4x4unity_ObjectToWorld[2].xxx + u_xlat2.xyz;\n    u_xlat2.xyz = hlslcc_mtx4x4unity_MatrixV[2].xyz * hlslcc_mtx4x4unity_ObjectToWorld[2].zzz + u_xlat2.xyz;\n    u_xlat2.xyz = hlslcc_mtx4x4unity_MatrixV[3].xyz * hlslcc_mtx4x4unity_ObjectToWorld[2].www + u_xlat2.xyz;\n    u_xlat3.xyz = hlslcc_mtx4x4unity_ObjectToWorld[3].yyy * hlslcc_mtx4x4unity_MatrixV[1].xyz;\n    u_xlat3.xyz = hlslcc_mtx4x4unity_MatrixV[0].xyz * hlslcc_mtx4x4unity_ObjectToWorld[3].xxx + u_xlat3.xyz;\n    u_xlat3.xyz = hlslcc_mtx4x4unity_MatrixV[2].xyz * hlslcc_mtx4x4unity_ObjectToWorld[3].zzz + u_xlat3.xyz;\n    u_xlat3.xyz = hlslcc_mtx4x4unity_MatrixV[3].xyz * hlslcc_mtx4x4unity_ObjectToWorld[3].www + u_xlat3.xyz;\n    u_xlat4.xyz = hlslcc_mtx4x4unity_WorldToObject[1].xyz * hlslcc_mtx4x4unity_MatrixInvV[0].yyy;\n    u_xlat4.xyz = hlslcc_mtx4x4unity_WorldToObject[0].xyz * hlslcc_mtx4x4unity_MatrixInvV[0].xxx + u_xlat4.xyz;\n    u_xlat4.xyz = hlslcc_mtx4x4unity_WorldToObject[2].xyz * hlslcc_mtx4x4unity_MatrixInvV[0].zzz + u_xlat4.xyz;\n    u_xlat4.xyz = hlslcc_mtx4x4unity_WorldToObject[3].xyz * hlslcc_mtx4x4unity_MatrixInvV[0].www + u_xlat4.xyz;\n    u_xlat5.xyz = hlslcc_mtx4x4unity_WorldToObject[1].xyz * hlslcc_mtx4x4unity_MatrixInvV[1].yyy;\n    u_xlat5.xyz = hlslcc_mtx4x4unity_WorldToObject[0].xyz * hlslcc_mtx4x4unity_MatrixInvV[1].xxx + u_xlat5.xyz;\n    u_xlat5.xyz = hlslcc_mtx4x4unity_WorldToObject[2].xyz * hlslcc_mtx4x4unity_MatrixInvV[1].zzz + u_xlat5.xyz;\n    u_xlat5.xyz = hlslcc_mtx4x4unity_WorldToObject[3].xyz * hlslcc_mtx4x4unity_MatrixInvV[1].www + u_xlat5.xyz;\n    u_xlat6.xyz = hlslcc_mtx4x4unity_WorldToObject[1].xyz * hlslcc_mtx4x4unity_MatrixInvV[2].yyy;\n    u_xlat6.xyz = hlslcc_mtx4x4unity_WorldToObject[0].xyz * hlslcc_mtx4x4unity_MatrixInvV[2].xxx + u_xlat6.xyz;\n    u_xlat6.xyz = hlslcc_mtx4x4unity_WorldToObject[2].xyz * hlslcc_mtx4x4unity_MatrixInvV[2].zzz + u_xlat6.xyz;\n    u_xlat6.xyz = hlslcc_mtx4x4unity_WorldToObject[3].xyz * hlslcc_mtx4x4unity_MatrixInvV[2].www + u_xlat6.xyz;\n    u_xlat1.xyz = u_xlat1.xyz * in_POSITION0.yyy;\n    u_xlat0.xyz = u_xlat0.xyz * in_POSITION0.xxx + u_xlat1.xyz;\n    u_xlat0.xyz = u_xlat2.xyz * in_POSITION0.zzz + u_xlat0.xyz;\n    u_xlat0.xyz = u_xlat3.xyz + u_xlat0.xyz;\n    u_xlat1.x = dot(u_xlat4.xyz, in_NORMAL0.xyz);\n    u_xlat1.y = dot(u_xlat5.xyz, in_NORMAL0.xyz);\n    u_xlat1.z = dot(u_xlat6.xyz, in_NORMAL0.xyz);\n    u_xlat36 = dot(u_xlat1.xyz, u_xlat1.xyz);\n    u_xlat36 = inversesqrt(u_xlat36);\n    u_xlat1.xyz = vec3(u_xlat36) * u_xlat1.xyz;\n    u_xlat36 = dot(u_xlat0.xyz, u_xlat0.xyz);\n    u_xlat36 = inversesqrt(u_xlat36);\n    u_xlat16_7.xyz = _Color.xyz * glstate_lightmodel_ambient.xyz + _Emission.xyz;\n    u_xlat16_43 = _Shininess * 128.0;\n    u_xlat16_8.xyz = u_xlat16_7.xyz;\n    u_xlat16_9.x = float(0.0);\n    u_xlat16_9.y = float(0.0);\n    u_xlat16_9.z = float(0.0);\n    for(int u_xlati_loop_1 = 0 ; u_xlati_loop_1<8 ; u_xlati_loop_1++)\n    {\n        u_xlat16_44 = dot(u_xlat1.xyz, unity_LightPosition[u_xlati_loop_1].xyz);\n        u_xlat16_44 = max(u_xlat16_44, 0.0);\n        u_xlat16_10.xyz = vec3(u_xlat16_44) * _Color.xyz;\n        u_xlat16_10.xyz = u_xlat16_10.xyz * unity_LightColor[u_xlati_loop_1].xyz;\n        u_xlatb2 = 0.0<u_xlat16_44;\n        if(u_xlatb2){\n            u_xlat16_11.xyz = (-u_xlat0.xyz) * vec3(u_xlat36) + unity_LightPosition[u_xlati_loop_1].xyz;\n            u_xlat16_44 = dot(u_xlat16_11.xyz, u_xlat16_11.xyz);\n            u_xlat16_44 = inversesqrt(u_xlat16_44);\n            u_xlat16_11.xyz = vec3(u_xlat16_44) * u_xlat16_11.xyz;\n            u_xlat16_44 = dot(u_xlat1.xyz, u_xlat16_11.xyz);\n            u_xlat16_44 = max(u_xlat16_44, 0.0);\n            u_xlat16_44 = log2(u_xlat16_44);\n            u_xlat16_44 = u_xlat16_43 * u_xlat16_44;\n            u_xlat16_44 = exp2(u_xlat16_44);\n            u_xlat16_44 = min(u_xlat16_44, 1.0);\n            u_xlat16_44 = u_xlat16_44 * 0.5;\n            u_xlat16_9.xyz = vec3(u_xlat16_44) * unity_LightColor[u_xlati_loop_1].xyz + u_xlat16_9.xyz;\n        }\n        u_xlat16_10.xyz = u_xlat16_10.xyz * vec3(0.5, 0.5, 0.5);\n        u_xlat16_10.xyz = min(u_xlat16_10.xyz, vec3(1.0, 1.0, 1.0));\n        u_xlat16_8.xyz = u_xlat16_8.xyz + u_xlat16_10.xyz;\n    }\n    vs_COLOR1.xyz = u_xlat16_9.xyz * _SpecColor.xyz;\n    vs_COLOR1.xyz = clamp(vs_COLOR1.xyz, 0.0, 1.0);\n    vs_COLOR0.xyz = u_xlat16_8.xyz;\n    vs_COLOR0.xyz = clamp(vs_COLOR0.xyz, 0.0, 1.0);\n    vs_COLOR0.w = _Color.w;\n    vs_COLOR0.w = clamp(vs_COLOR0.w, 0.0, 1.0);\n    vs_TEXCOORD0.xy = in_TEXCOORD0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    return;\n}\n\n","\n#version 100\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n#else\n    precision mediump float;\n#endif\nprecision highp int;\nuniform lowp sampler2D _MainTex;\nvarying mediump vec4 vs_COLOR0;\nvarying mediump vec3 vs_COLOR1;\nvarying highp vec2 vs_TEXCOORD0;\n#define SV_Target0 gl_FragData[0]\nlowp vec3 u_xlat10_0;\nmediump vec3 u_xlat16_1;\nvoid main()\n{\n    u_xlat10_0.xyz = texture2D(_MainTex, vs_TEXCOORD0.xy).xyz;\n    u_xlat16_1.xyz = u_xlat10_0.xyz * vs_COLOR0.xyz;\n    SV_Target0.xyz = u_xlat16_1.xyz * vec3(2.0, 2.0, 2.0) + vs_COLOR1.xyz;\n    SV_Target0.w = 1.0;\n    return;\n}\n\n","\n#version 300 es\n\n#define HLSLCC_ENABLE_UNIFORM_BUFFERS 0\n#if HLSLCC_ENABLE_UNIFORM_BUFFERS\n#define UNITY_UNIFORM\n#else\n#define UNITY_UNIFORM uniform\n#endif\n#define UNITY_SUPPORTS_UNIFORM_LOCATION 0\n#if UNITY_SUPPORTS_UNIFORM_LOCATION\n#define UNITY_LOCATION(x) layout(location = x)\n#define UNITY_BINDING(x) layout(binding = x, std140)\n#else\n#define UNITY_LOCATION(x)\n#define UNITY_BINDING(x) layout(std140)\n#endif\nuniform \tmediump vec4 unity_LightColor[8];\nuniform \tvec4 unity_LightPosition[8];\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_WorldToObject[4];\nuniform \tmediump vec4 glstate_lightmodel_ambient;\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixV[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixInvV[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tmediump vec4 _Color;\nuniform \tmediump vec4 _SpecColor;\nuniform \tmediump vec4 _Emission;\nuniform \tmediump float _Shininess;\nuniform \tivec4 unity_VertexLightParams;\nuniform \tvec4 _MainTex_ST;\nin highp vec3 in_POSITION0;\nin highp vec3 in_NORMAL0;\nin highp vec3 in_TEXCOORD0;\nout mediump vec4 vs_COLOR0;\nout mediump vec3 vs_COLOR1;\nout highp vec2 vs_TEXCOORD0;\nvec4 u_xlat0;\nvec4 u_xlat1;\nvec3 u_xlat2;\nbool u_xlatb2;\nvec3 u_xlat3;\nvec3 u_xlat4;\nvec3 u_xlat5;\nvec3 u_xlat6;\nmediump vec3 u_xlat16_7;\nmediump vec3 u_xlat16_8;\nmediump vec3 u_xlat16_9;\nmediump vec3 u_xlat16_10;\nmediump vec3 u_xlat16_11;\nfloat u_xlat36;\nint u_xlati37;\nmediump float u_xlat16_43;\nmediump float u_xlat16_44;\nvoid main()\n{\n    u_xlat0.xyz = hlslcc_mtx4x4unity_ObjectToWorld[0].yyy * hlslcc_mtx4x4unity_MatrixV[1].xyz;\n    u_xlat0.xyz = hlslcc_mtx4x4unity_MatrixV[0].xyz * hlslcc_mtx4x4unity_ObjectToWorld[0].xxx + u_xlat0.xyz;\n    u_xlat0.xyz = hlslcc_mtx4x4unity_MatrixV[2].xyz * hlslcc_mtx4x4unity_ObjectToWorld[0].zzz + u_xlat0.xyz;\n    u_xlat0.xyz = hlslcc_mtx4x4unity_MatrixV[3].xyz * hlslcc_mtx4x4unity_ObjectToWorld[0].www + u_xlat0.xyz;\n    u_xlat1.xyz = hlslcc_mtx4x4unity_ObjectToWorld[1].yyy * hlslcc_mtx4x4unity_MatrixV[1].xyz;\n    u_xlat1.xyz = hlslcc_mtx4x4unity_MatrixV[0].xyz * hlslcc_mtx4x4unity_ObjectToWorld[1].xxx + u_xlat1.xyz;\n    u_xlat1.xyz = hlslcc_mtx4x4unity_MatrixV[2].xyz * hlslcc_mtx4x4unity_ObjectToWorld[1].zzz + u_xlat1.xyz;\n    u_xlat1.xyz = hlslcc_mtx4x4unity_MatrixV[3].xyz * hlslcc_mtx4x4unity_ObjectToWorld[1].www + u_xlat1.xyz;\n    u_xlat2.xyz = hlslcc_mtx4x4unity_ObjectToWorld[2].yyy * hlslcc_mtx4x4unity_MatrixV[1].xyz;\n    u_xlat2.xyz = hlslcc_mtx4x4unity_MatrixV[0].xyz * hlslcc_mtx4x4unity_ObjectToWorld[2].xxx + u_xlat2.xyz;\n    u_xlat2.xyz = hlslcc_mtx4x4unity_MatrixV[2].xyz * hlslcc_mtx4x4unity_ObjectToWorld[2].zzz + u_xlat2.xyz;\n    u_xlat2.xyz = hlslcc_mtx4x4unity_MatrixV[3].xyz * hlslcc_mtx4x4unity_ObjectToWorld[2].www + u_xlat2.xyz;\n    u_xlat3.xyz = hlslcc_mtx4x4unity_ObjectToWorld[3].yyy * hlslcc_mtx4x4unity_MatrixV[1].xyz;\n    u_xlat3.xyz = hlslcc_mtx4x4unity_MatrixV[0].xyz * hlslcc_mtx4x4unity_ObjectToWorld[3].xxx + u_xlat3.xyz;\n    u_xlat3.xyz = hlslcc_mtx4x4unity_MatrixV[2].xyz * hlslcc_mtx4x4unity_ObjectToWorld[3].zzz + u_xlat3.xyz;\n    u_xlat3.xyz = hlslcc_mtx4x4unity_MatrixV[3].xyz * hlslcc_mtx4x4unity_ObjectToWorld[3].www + u_xlat3.xyz;\n    u_xlat4.xyz = hlslcc_mtx4x4unity_WorldToObject[1].xyz * hlslcc_mtx4x4unity_MatrixInvV[0].yyy;\n    u_xlat4.xyz = hlslcc_mtx4x4unity_WorldToObject[0].xyz * hlslcc_mtx4x4unity_MatrixInvV[0].xxx + u_xlat4.xyz;\n    u_xlat4.xyz = hlslcc_mtx4x4unity_WorldToObject[2].xyz * hlslcc_mtx4x4unity_MatrixInvV[0].zzz + u_xlat4.xyz;\n    u_xlat4.xyz = hlslcc_mtx4x4unity_WorldToObject[3].xyz * hlslcc_mtx4x4unity_MatrixInvV[0].www + u_xlat4.xyz;\n    u_xlat5.xyz = hlslcc_mtx4x4unity_WorldToObject[1].xyz * hlslcc_mtx4x4unity_MatrixInvV[1].yyy;\n    u_xlat5.xyz = hlslcc_mtx4x4unity_WorldToObject[0].xyz * hlslcc_mtx4x4unity_MatrixInvV[1].xxx + u_xlat5.xyz;\n    u_xlat5.xyz = hlslcc_mtx4x4unity_WorldToObject[2].xyz * hlslcc_mtx4x4unity_MatrixInvV[1].zzz + u_xlat5.xyz;\n    u_xlat5.xyz = hlslcc_mtx4x4unity_WorldToObject[3].xyz * hlslcc_mtx4x4unity_MatrixInvV[1].www + u_xlat5.xyz;\n    u_xlat6.xyz = hlslcc_mtx4x4unity_WorldToObject[1].xyz * hlslcc_mtx4x4unity_MatrixInvV[2].yyy;\n    u_xlat6.xyz = hlslcc_mtx4x4unity_WorldToObject[0].xyz * hlslcc_mtx4x4unity_MatrixInvV[2].xxx + u_xlat6.xyz;\n    u_xlat6.xyz = hlslcc_mtx4x4unity_WorldToObject[2].xyz * hlslcc_mtx4x4unity_MatrixInvV[2].zzz + u_xlat6.xyz;\n    u_xlat6.xyz = hlslcc_mtx4x4unity_WorldToObject[3].xyz * hlslcc_mtx4x4unity_MatrixInvV[2].www + u_xlat6.xyz;\n    u_xlat1.xyz = u_xlat1.xyz * in_POSITION0.yyy;\n    u_xlat0.xyz = u_xlat0.xyz * in_POSITION0.xxx + u_xlat1.xyz;\n    u_xlat0.xyz = u_xlat2.xyz * in_POSITION0.zzz + u_xlat0.xyz;\n    u_xlat0.xyz = u_xlat3.xyz + u_xlat0.xyz;\n    u_xlat1.x = dot(u_xlat4.xyz, in_NORMAL0.xyz);\n    u_xlat1.y = dot(u_xlat5.xyz, in_NORMAL0.xyz);\n    u_xlat1.z = dot(u_xlat6.xyz, in_NORMAL0.xyz);\n    u_xlat36 = dot(u_xlat1.xyz, u_xlat1.xyz);\n    u_xlat36 = inversesqrt(u_xlat36);\n    u_xlat1.xyz = vec3(u_xlat36) * u_xlat1.xyz;\n    u_xlat36 = dot(u_xlat0.xyz, u_xlat0.xyz);\n    u_xlat36 = inversesqrt(u_xlat36);\n    u_xlat16_7.xyz = _Color.xyz * glstate_lightmodel_ambient.xyz + _Emission.xyz;\n    u_xlat16_43 = _Shininess * 128.0;\n    u_xlat16_8.xyz = u_xlat16_7.xyz;\n    u_xlat16_9.x = float(0.0);\n    u_xlat16_9.y = float(0.0);\n    u_xlat16_9.z = float(0.0);\n    for(int u_xlati_loop_1 = 0 ; u_xlati_loop_1<unity_VertexLightParams.x ; u_xlati_loop_1++)\n    {\n        u_xlat16_44 = dot(u_xlat1.xyz, unity_LightPosition[u_xlati_loop_1].xyz);\n        u_xlat16_44 = max(u_xlat16_44, 0.0);\n        u_xlat16_10.xyz = vec3(u_xlat16_44) * _Color.xyz;\n        u_xlat16_10.xyz = u_xlat16_10.xyz * unity_LightColor[u_xlati_loop_1].xyz;\n        u_xlatb2 = 0.0<u_xlat16_44;\n        if(u_xlatb2){\n            u_xlat16_11.xyz = (-u_xlat0.xyz) * vec3(u_xlat36) + unity_LightPosition[u_xlati_loop_1].xyz;\n            u_xlat16_44 = dot(u_xlat16_11.xyz, u_xlat16_11.xyz);\n            u_xlat16_44 = inversesqrt(u_xlat16_44);\n            u_xlat16_11.xyz = vec3(u_xlat16_44) * u_xlat16_11.xyz;\n            u_xlat16_44 = dot(u_xlat1.xyz, u_xlat16_11.xyz);\n            u_xlat16_44 = max(u_xlat16_44, 0.0);\n            u_xlat16_44 = log2(u_xlat16_44);\n            u_xlat16_44 = u_xlat16_43 * u_xlat16_44;\n            u_xlat16_44 = exp2(u_xlat16_44);\n            u_xlat16_44 = min(u_xlat16_44, 1.0);\n            u_xlat16_44 = u_xlat16_44 * 0.5;\n            u_xlat16_9.xyz = vec3(u_xlat16_44) * unity_LightColor[u_xlati_loop_1].xyz + u_xlat16_9.xyz;\n        }\n        u_xlat16_10.xyz = u_xlat16_10.xyz * vec3(0.5, 0.5, 0.5);\n        u_xlat16_10.xyz = min(u_xlat16_10.xyz, vec3(1.0, 1.0, 1.0));\n        u_xlat16_8.xyz = u_xlat16_8.xyz + u_xlat16_10.xyz;\n    }\n    vs_COLOR1.xyz = u_xlat16_9.xyz * _SpecColor.xyz;\n    vs_COLOR1.xyz = clamp(vs_COLOR1.xyz, 0.0, 1.0);\n    vs_COLOR0.xyz = u_xlat16_8.xyz;\n    vs_COLOR0.xyz = clamp(vs_COLOR0.xyz, 0.0, 1.0);\n    vs_COLOR0.w = _Color.w;\n    vs_COLOR0.w = clamp(vs_COLOR0.w, 0.0, 1.0);\n    vs_TEXCOORD0.xy = in_TEXCOORD0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    return;\n}\n\n","\n#version 300 es\n\nprecision highp float;\nprecision highp int;\n#define UNITY_SUPPORTS_UNIFORM_LOCATION 0\n#if UNITY_SUPPORTS_UNIFORM_LOCATION\n#define UNITY_LOCATION(x) layout(location = x)\n#define UNITY_BINDING(x) layout(binding = x, std140)\n#else\n#define UNITY_LOCATION(x)\n#define UNITY_BINDING(x) layout(std140)\n#endif\nUNITY_LOCATION(0) uniform mediump sampler2D _MainTex;\nin mediump vec4 vs_COLOR0;\nin mediump vec3 vs_COLOR1;\nin highp vec2 vs_TEXCOORD0;\nlayout(location = 0) out mediump vec4 SV_Target0;\nmediump vec3 u_xlat16_0;\nmediump vec3 u_xlat16_1;\nvoid main()\n{\n    u_xlat16_0.xyz = texture(_MainTex, vs_TEXCOORD0.xy).xyz;\n    u_xlat16_1.xyz = u_xlat16_0.xyz * vs_COLOR0.xyz;\n    SV_Target0.xyz = u_xlat16_1.xyz * vec3(2.0, 2.0, 2.0) + vs_COLOR1.xyz;\n    SV_Target0.w = 1.0;\n    return;\n}\n\n","\n#version 100\n\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tvec4 unity_LightmapST;\nuniform \tvec4 unity_Lightmap_ST;\nuniform \tvec4 _MainTex_ST;\nattribute highp vec3 in_POSITION0;\nattribute highp vec3 in_TEXCOORD1;\nattribute highp vec3 in_TEXCOORD0;\nvarying highp vec2 vs_TEXCOORD0;\nvarying highp vec2 vs_TEXCOORD1;\nvarying highp vec2 vs_TEXCOORD2;\nvec4 u_xlat0;\nvec4 u_xlat1;\nvoid main()\n{\n    vs_TEXCOORD0.xy = in_TEXCOORD1.xy * unity_LightmapST.xy + unity_LightmapST.zw;\n    vs_TEXCOORD1.xy = in_TEXCOORD1.xy * unity_Lightmap_ST.xy + unity_Lightmap_ST.zw;\n    vs_TEXCOORD2.xy = in_TEXCOORD0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    return;\n}\n\n","\n#version 100\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n#else\n    precision mediump float;\n#endif\nprecision highp int;\nuniform \tmediump vec4 unity_Lightmap_HDR;\nuniform \tmediump vec4 _Color;\nuniform lowp sampler2D _MainTex;\nuniform mediump sampler2D unity_Lightmap;\nvarying highp vec2 vs_TEXCOORD0;\nvarying highp vec2 vs_TEXCOORD2;\n#define SV_Target0 gl_FragData[0]\nmediump vec4 u_xlat16_0;\nlowp vec3 u_xlat10_0;\nmediump vec3 u_xlat16_1;\nvoid main()\n{\n    u_xlat16_0 = texture2D(unity_Lightmap, vs_TEXCOORD0.xy);\n    u_xlat16_1.x = u_xlat16_0.w * unity_Lightmap_HDR.x;\n    u_xlat16_1.xyz = u_xlat16_0.xyz * u_xlat16_1.xxx;\n    u_xlat16_1.xyz = u_xlat16_1.xyz * _Color.xyz;\n    u_xlat10_0.xyz = texture2D(_MainTex, vs_TEXCOORD2.xy).xyz;\n    SV_Target0.xyz = u_xlat16_1.xyz * u_xlat10_0.xyz;\n    SV_Target0.w = 1.0;\n    return;\n}\n\n","\n#version 300 es\n\n#define HLSLCC_ENABLE_UNIFORM_BUFFERS 0\n#if HLSLCC_ENABLE_UNIFORM_BUFFERS\n#define UNITY_UNIFORM\n#else\n#define UNITY_UNIFORM uniform\n#endif\n#define UNITY_SUPPORTS_UNIFORM_LOCATION 0\n#if UNITY_SUPPORTS_UNIFORM_LOCATION\n#define UNITY_LOCATION(x) layout(location = x)\n#define UNITY_BINDING(x) layout(binding = x, std140)\n#else\n#define UNITY_LOCATION(x)\n#define UNITY_BINDING(x) layout(std140)\n#endif\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tvec4 unity_LightmapST;\nuniform \tvec4 unity_Lightmap_ST;\nuniform \tvec4 _MainTex_ST;\nin highp vec3 in_POSITION0;\nin highp vec3 in_TEXCOORD1;\nin highp vec3 in_TEXCOORD0;\nout highp vec2 vs_TEXCOORD0;\nout highp vec2 vs_TEXCOORD1;\nout highp vec2 vs_TEXCOORD2;\nvec4 u_xlat0;\nvec4 u_xlat1;\nvoid main()\n{\n    vs_TEXCOORD0.xy = in_TEXCOORD1.xy * unity_LightmapST.xy + unity_LightmapST.zw;\n    vs_TEXCOORD1.xy = in_TEXCOORD1.xy * unity_Lightmap_ST.xy + unity_Lightmap_ST.zw;\n    vs_TEXCOORD2.xy = in_TEXCOORD0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    return;\n}\n\n","\n#version 300 es\n\nprecision highp float;\nprecision highp int;\n#define HLSLCC_ENABLE_UNIFORM_BUFFERS 0\n#if HLSLCC_ENABLE_UNIFORM_BUFFERS\n#define UNITY_UNIFORM\n#else\n#define UNITY_UNIFORM uniform\n#endif\n#define UNITY_SUPPORTS_UNIFORM_LOCATION 0\n#if UNITY_SUPPORTS_UNIFORM_LOCATION\n#define UNITY_LOCATION(x) layout(location = x)\n#define UNITY_BINDING(x) layout(binding = x, std140)\n#else\n#define UNITY_LOCATION(x)\n#define UNITY_BINDING(x) layout(std140)\n#endif\nuniform \tmediump vec4 unity_Lightmap_HDR;\nuniform \tmediump vec4 _Color;\nUNITY_LOCATION(0) uniform mediump sampler2D _MainTex;\nUNITY_LOCATION(1) uniform mediump sampler2D unity_Lightmap;\nin highp vec2 vs_TEXCOORD0;\nin highp vec2 vs_TEXCOORD2;\nlayout(location = 0) out mediump vec4 SV_Target0;\nmediump vec4 u_xlat16_0;\nmediump vec3 u_xlat16_1;\nvoid main()\n{\n    u_xlat16_0 = texture(unity_Lightmap, vs_TEXCOORD0.xy);\n    u_xlat16_1.x = u_xlat16_0.w * unity_Lightmap_HDR.x;\n    u_xlat16_1.xyz = u_xlat16_0.xyz * u_xlat16_1.xxx;\n    u_xlat16_1.xyz = u_xlat16_1.xyz * _Color.xyz;\n    u_xlat16_0.xyz = texture(_MainTex, vs_TEXCOORD2.xy).xyz;\n    SV_Target0.xyz = u_xlat16_1.xyz * u_xlat16_0.xyz;\n    SV_Target0.w = 1.0;\n    return;\n}\n\n"]