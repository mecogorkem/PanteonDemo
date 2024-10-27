Shader "Unlit/WallMaterial"
{
    Properties
    {
        _MainTex ("Texture", 2D) = "white" {}
        _UVDivide("Divide",Float)  = 1
        _FlowColor("Flow Color",Color)  = (1,1,1,1)
        _FlowBackgroundColor("_FlowBackgroundColor",Color)  = (1,1,1,1)
        _SideMultiplier("Divide",Float)  = 1

    }
    SubShader
    {
        Tags { "RenderType"="Transparent" "Queue" = "Transparent"}
        LOD 100
         
        Blend SrcAlpha OneMinusSrcAlpha // Traditional transparency
        Ztest Equal
   
 
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
                float4 color : COLOR;
            };

            struct v2f
            {
                float2 uv : TEXCOORD0;
                float4 vertex : SV_POSITION;
                float4 color : COLOR;
            };

            sampler2D _MainTex;
            float4 _MainTex_ST;
            float _UVDivide,_SideMultiplier;
            v2f vert (appdata v)
            {
                v2f o;
                o.vertex = UnityObjectToClipPos(v.vertex);
                o.uv = TRANSFORM_TEX(v.uv, _MainTex);
                UNITY_TRANSFER_FOG(o,o.vertex);
                o.color = v.color;
                return o;
            }

            fixed4 frag (v2f i) : SV_Target
            {
                // sample the texture
                fixed4 col = tex2D(_MainTex, i.uv);
                // float2 uv = rotateUV(i.uv,45*_SideMultiplier,0.5);
                // float2 time = rotateUV(_Time,45,0.5);
                //
                // float2 flowUv = float2((uv.x*_UVDivide)-(_UVDivide/2),uv.y);
                // fixed4 colFlow = tex2D(_FlowTexture, float2(flowUv.x,flowUv.y+time.y/5));
                //
                // return colFlow*_FlowColor*col.a;
                return  col;
                
            
            }
            ENDCG
        }
    }
}
