Shader "Unlit/PaintShader"
{
    Properties
    {
        _MainTex ("Texture", 2D) = "white" {}
        _PainterColor ("Painter Color", Color) = (0, 0, 0, 0)
        _PainterPosition ("Painter Position", Vector) = (0, 0,0,0)
        _Radius ("Radius", Float) = 1
        _Hardness ("Hardness", Float) = 1
        _Strength ("Strength", Float) = 5

    }
    SubShader
    {
        Tags { "RenderType"="Opaque" }
        LOD 100

        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            // make fog work
            #pragma multi_compile_fog
            
            #include "UnityCG.cginc"

            struct appdata
            {
                float4 vertex : POSITION;
                float2 uv : TEXCOORD0;
            };

            struct v2f
            {
                float2 uv : TEXCOORD0;
                float4 vertex : SV_POSITION;
            };

            sampler2D _MainTex;
            float4 _MainTex_ST;
            float2 _PainterPosition;
            float _Radius;
            float _Hardness;
            float _Strength;
            float4 _PainterColor;
            
            float mask(float2 position, float2 center, float radius, float hardness){
                float m = distance(center, position);
                return 1 - smoothstep(radius * hardness, radius, m);    
            }
            
            v2f vert (appdata v)
            {
                v2f o;
                o.vertex = UnityObjectToClipPos(v.vertex);
                o.uv = TRANSFORM_TEX(v.uv, _MainTex);
                
                return o;
            }

            fixed4 frag (v2f i) : SV_Target
            {
                float4 col = tex2D(_MainTex, i.uv);
         

                float f = mask(i.uv, _PainterPosition, _Radius, _Hardness);
                float edge = f * _Strength;
                return lerp(col, _PainterColor, edge);
            }
            ENDCG
        }
    }
}
