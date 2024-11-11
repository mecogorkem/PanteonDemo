var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2026 = root || request.c( 'UnityEngine.JointSpring' )
  var i2027 = data
  i2026.spring = i2027[0]
  i2026.damper = i2027[1]
  i2026.targetPosition = i2027[2]
  return i2026
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2028 = root || request.c( 'UnityEngine.JointMotor' )
  var i2029 = data
  i2028.m_TargetVelocity = i2029[0]
  i2028.m_Force = i2029[1]
  i2028.m_FreeSpin = i2029[2]
  return i2028
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2030 = root || request.c( 'UnityEngine.JointLimits' )
  var i2031 = data
  i2030.m_Min = i2031[0]
  i2030.m_Max = i2031[1]
  i2030.m_Bounciness = i2031[2]
  i2030.m_BounceMinVelocity = i2031[3]
  i2030.m_ContactDistance = i2031[4]
  i2030.minBounce = i2031[5]
  i2030.maxBounce = i2031[6]
  return i2030
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2032 = root || request.c( 'UnityEngine.JointDrive' )
  var i2033 = data
  i2032.m_PositionSpring = i2033[0]
  i2032.m_PositionDamper = i2033[1]
  i2032.m_MaximumForce = i2033[2]
  return i2032
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2034 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2035 = data
  i2034.m_Spring = i2035[0]
  i2034.m_Damper = i2035[1]
  return i2034
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2036 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2037 = data
  i2036.m_Limit = i2037[0]
  i2036.m_Bounciness = i2037[1]
  i2036.m_ContactDistance = i2037[2]
  return i2036
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2038 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2039 = data
  i2038.m_ExtremumSlip = i2039[0]
  i2038.m_ExtremumValue = i2039[1]
  i2038.m_AsymptoteSlip = i2039[2]
  i2038.m_AsymptoteValue = i2039[3]
  i2038.m_Stiffness = i2039[4]
  return i2038
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2040 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2041 = data
  i2040.m_LowerAngle = i2041[0]
  i2040.m_UpperAngle = i2041[1]
  return i2040
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2042 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2043 = data
  i2042.m_MotorSpeed = i2043[0]
  i2042.m_MaximumMotorTorque = i2043[1]
  return i2042
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2044 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2045 = data
  i2044.m_DampingRatio = i2045[0]
  i2044.m_Frequency = i2045[1]
  i2044.m_Angle = i2045[2]
  return i2044
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2046 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2047 = data
  i2046.m_LowerTranslation = i2047[0]
  i2046.m_UpperTranslation = i2047[1]
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2049 = data
  i2048.name = i2049[0]
  i2048.halfPrecision = !!i2049[1]
  i2048.useUInt32IndexFormat = !!i2049[2]
  i2048.vertexCount = i2049[3]
  i2048.aabb = i2049[4]
  var i2051 = i2049[5]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.push( !!i2051[i + 0] );
  }
  i2048.streams = i2050
  i2048.vertices = i2049[6]
  var i2053 = i2049[7]
  var i2052 = []
  for(var i = 0; i < i2053.length; i += 1) {
    i2052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2053[i + 0]) );
  }
  i2048.subMeshes = i2052
  var i2055 = i2049[8]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 16) {
    i2054.push( new pc.Mat4().setData(i2055[i + 0], i2055[i + 1], i2055[i + 2], i2055[i + 3],  i2055[i + 4], i2055[i + 5], i2055[i + 6], i2055[i + 7],  i2055[i + 8], i2055[i + 9], i2055[i + 10], i2055[i + 11],  i2055[i + 12], i2055[i + 13], i2055[i + 14], i2055[i + 15]) );
  }
  i2048.bindposes = i2054
  var i2057 = i2049[9]
  var i2056 = []
  for(var i = 0; i < i2057.length; i += 1) {
    i2056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2057[i + 0]) );
  }
  i2048.blendShapes = i2056
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2063 = data
  i2062.triangles = i2063[0]
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2069 = data
  i2068.name = i2069[0]
  var i2071 = i2069[1]
  var i2070 = []
  for(var i = 0; i < i2071.length; i += 1) {
    i2070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2071[i + 0]) );
  }
  i2068.frames = i2070
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2072 = root || new pc.UnityMaterial()
  var i2073 = data
  i2072.name = i2073[0]
  request.r(i2073[1], i2073[2], 0, i2072, 'shader')
  i2072.renderQueue = i2073[3]
  i2072.enableInstancing = !!i2073[4]
  var i2075 = i2073[5]
  var i2074 = []
  for(var i = 0; i < i2075.length; i += 1) {
    i2074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2075[i + 0]) );
  }
  i2072.floatParameters = i2074
  var i2077 = i2073[6]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2077[i + 0]) );
  }
  i2072.colorParameters = i2076
  var i2079 = i2073[7]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2079[i + 0]) );
  }
  i2072.vectorParameters = i2078
  var i2081 = i2073[8]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2081[i + 0]) );
  }
  i2072.textureParameters = i2080
  var i2083 = i2073[9]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2083[i + 0]) );
  }
  i2072.materialFlags = i2082
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2087 = data
  i2086.name = i2087[0]
  i2086.value = i2087[1]
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2091 = data
  i2090.name = i2091[0]
  i2090.value = new pc.Color(i2091[1], i2091[2], i2091[3], i2091[4])
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2095 = data
  i2094.name = i2095[0]
  i2094.value = new pc.Vec4( i2095[1], i2095[2], i2095[3], i2095[4] )
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2099 = data
  i2098.name = i2099[0]
  request.r(i2099[1], i2099[2], 0, i2098, 'value')
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2103 = data
  i2102.name = i2103[0]
  i2102.enabled = !!i2103[1]
  return i2102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2105 = data
  i2104.position = new pc.Vec3( i2105[0], i2105[1], i2105[2] )
  i2104.scale = new pc.Vec3( i2105[3], i2105[4], i2105[5] )
  i2104.rotation = new pc.Quat(i2105[6], i2105[7], i2105[8], i2105[9])
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2107 = data
  i2106.mass = i2107[0]
  i2106.drag = i2107[1]
  i2106.angularDrag = i2107[2]
  i2106.useGravity = !!i2107[3]
  i2106.isKinematic = !!i2107[4]
  i2106.constraints = i2107[5]
  i2106.maxAngularVelocity = i2107[6]
  i2106.collisionDetectionMode = i2107[7]
  i2106.interpolation = i2107[8]
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i2108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i2109 = data
  i2108.enabled = !!i2109[0]
  i2108.center = new pc.Vec3( i2109[1], i2109[2], i2109[3] )
  i2108.radius = i2109[4]
  i2108.height = i2109[5]
  i2108.minMoveDistance = i2109[6]
  i2108.skinWidth = i2109[7]
  i2108.enableOverlapRecovery = !!i2109[8]
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2111 = data
  request.r(i2111[0], i2111[1], 0, i2110, 'animatorController')
  request.r(i2111[2], i2111[3], 0, i2110, 'avatar')
  i2110.updateMode = i2111[4]
  i2110.hasTransformHierarchy = !!i2111[5]
  i2110.applyRootMotion = !!i2111[6]
  var i2113 = i2111[7]
  var i2112 = []
  for(var i = 0; i < i2113.length; i += 2) {
  request.r(i2113[i + 0], i2113[i + 1], 2, i2112, '')
  }
  i2110.humanBones = i2112
  i2110.enabled = !!i2111[8]
  return i2110
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i2116 = root || request.c( 'PlayerController' )
  var i2117 = data
  request.r(i2117[0], i2117[1], 0, i2116, '_animator')
  i2116.moveDirection = new pc.Vec3( i2117[2], i2117[3], i2117[4] )
  i2116._hasAnimator = !!i2117[5]
  i2116._animIDSpeed = i2117[6]
  i2116._animIDMotionSpeed = i2117[7]
  i2116._animIEnd = i2117[8]
  i2116.MoveSpeed = i2117[9]
  i2116.SpeedChangeRate = i2117[10]
  i2116.RotationSmoothTime = i2117[11]
  i2116.gravity = i2117[12]
  i2116.fallThreshold = i2117[13]
  i2116.pushForceDecayRate = i2117[14]
  return i2116
}

Deserializers["Player"] = function (request, data, root) {
  var i2118 = root || request.c( 'Player' )
  var i2119 = data
  request.r(i2119[0], i2119[1], 0, i2118, 'playerEndTransform')
  request.r(i2119[2], i2119[3], 0, i2118, 'playerGameCompleteTransform')
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2121 = data
  i2120.enabled = !!i2121[0]
  request.r(i2121[1], i2121[2], 0, i2120, 'sharedMaterial')
  var i2123 = i2121[3]
  var i2122 = []
  for(var i = 0; i < i2123.length; i += 2) {
  request.r(i2123[i + 0], i2123[i + 1], 2, i2122, '')
  }
  i2120.sharedMaterials = i2122
  i2120.receiveShadows = !!i2121[4]
  i2120.shadowCastingMode = i2121[5]
  i2120.sortingLayerID = i2121[6]
  i2120.sortingOrder = i2121[7]
  i2120.lightmapIndex = i2121[8]
  i2120.lightmapSceneIndex = i2121[9]
  i2120.lightmapScaleOffset = new pc.Vec4( i2121[10], i2121[11], i2121[12], i2121[13] )
  i2120.lightProbeUsage = i2121[14]
  i2120.reflectionProbeUsage = i2121[15]
  request.r(i2121[16], i2121[17], 0, i2120, 'sharedMesh')
  var i2125 = i2121[18]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 2) {
  request.r(i2125[i + 0], i2125[i + 1], 2, i2124, '')
  }
  i2120.bones = i2124
  i2120.updateWhenOffscreen = !!i2121[19]
  i2120.localBounds = i2121[20]
  request.r(i2121[21], i2121[22], 0, i2120, 'rootBone')
  var i2127 = i2121[23]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 1) {
    i2126.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2127[i + 0]) );
  }
  i2120.blendShapesWeights = i2126
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2133 = data
  i2132.weight = i2133[0]
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2135 = data
  i2134.name = i2135[0]
  i2134.tagId = i2135[1]
  i2134.enabled = !!i2135[2]
  i2134.isStatic = !!i2135[3]
  i2134.layer = i2135[4]
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2137 = data
  request.r(i2137[0], i2137[1], 0, i2136, 'sharedMesh')
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2139 = data
  request.r(i2139[0], i2139[1], 0, i2138, 'additionalVertexStreams')
  i2138.enabled = !!i2139[2]
  request.r(i2139[3], i2139[4], 0, i2138, 'sharedMaterial')
  var i2141 = i2139[5]
  var i2140 = []
  for(var i = 0; i < i2141.length; i += 2) {
  request.r(i2141[i + 0], i2141[i + 1], 2, i2140, '')
  }
  i2138.sharedMaterials = i2140
  i2138.receiveShadows = !!i2139[6]
  i2138.shadowCastingMode = i2139[7]
  i2138.sortingLayerID = i2139[8]
  i2138.sortingOrder = i2139[9]
  i2138.lightmapIndex = i2139[10]
  i2138.lightmapSceneIndex = i2139[11]
  i2138.lightmapScaleOffset = new pc.Vec4( i2139[12], i2139[13], i2139[14], i2139[15] )
  i2138.lightProbeUsage = i2139[16]
  i2138.reflectionProbeUsage = i2139[17]
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2143 = data
  i2142.name = i2143[0]
  i2142.width = i2143[1]
  i2142.height = i2143[2]
  i2142.mipmapCount = i2143[3]
  i2142.anisoLevel = i2143[4]
  i2142.filterMode = i2143[5]
  i2142.hdr = !!i2143[6]
  i2142.format = i2143[7]
  i2142.wrapMode = i2143[8]
  i2142.alphaIsTransparency = !!i2143[9]
  i2142.alphaSource = i2143[10]
  i2142.graphicsFormat = i2143[11]
  i2142.sRGBTexture = !!i2143[12]
  i2142.desiredColorSpace = i2143[13]
  i2142.wrapU = i2143[14]
  i2142.wrapV = i2143[15]
  return i2142
}

Deserializers["DeathObstacleEffect"] = function (request, data, root) {
  var i2144 = root || request.c( 'DeathObstacleEffect' )
  var i2145 = data
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2147 = data
  i2146.center = new pc.Vec3( i2147[0], i2147[1], i2147[2] )
  i2146.size = new pc.Vec3( i2147[3], i2147[4], i2147[5] )
  i2146.enabled = !!i2147[6]
  i2146.isTrigger = !!i2147[7]
  request.r(i2147[8], i2147[9], 0, i2146, 'material')
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2149 = data
  i2148.enabled = !!i2149[0]
  i2148.isTrigger = !!i2149[1]
  request.r(i2149[2], i2149[3], 0, i2148, 'material')
  request.r(i2149[4], i2149[5], 0, i2148, 'sharedMesh')
  i2148.convex = !!i2149[6]
  return i2148
}

Deserializers["LocalRotationController"] = function (request, data, root) {
  var i2150 = root || request.c( 'LocalRotationController' )
  var i2151 = data
  i2150.rotationSpeed = new pc.Vec3( i2151[0], i2151[1], i2151[2] )
  return i2150
}

Deserializers["BasicPushObstacleEffect"] = function (request, data, root) {
  var i2152 = root || request.c( 'BasicPushObstacleEffect' )
  var i2153 = data
  i2152.pushVector = new pc.Vec3( i2153[0], i2153[1], i2153[2] )
  return i2152
}

Deserializers["RotaterPushObstacleEffect"] = function (request, data, root) {
  var i2154 = root || request.c( 'RotaterPushObstacleEffect' )
  var i2155 = data
  i2154.pushForce = i2155[0]
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2157 = data
  i2156.center = new pc.Vec3( i2157[0], i2157[1], i2157[2] )
  i2156.radius = i2157[3]
  i2156.height = i2157[4]
  i2156.direction = i2157[5]
  i2156.enabled = !!i2157[6]
  i2156.isTrigger = !!i2157[7]
  request.r(i2157[8], i2157[9], 0, i2156, 'material')
  return i2156
}

Deserializers["ShiningObstacleEffect"] = function (request, data, root) {
  var i2158 = root || request.c( 'ShiningObstacleEffect' )
  var i2159 = data
  i2158.pushForce = i2159[0]
  request.r(i2159[1], i2159[2], 0, i2158, 'shineParticle')
  return i2158
}

Deserializers["PatrolMovementController"] = function (request, data, root) {
  var i2160 = root || request.c( 'PatrolMovementController' )
  var i2161 = data
  i2160.movementSpeed = new pc.Vec3( i2161[0], i2161[1], i2161[2] )
  i2160.minX = i2161[3]
  i2160.maxX = i2161[4]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2163 = data
  i2162.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2163[0], i2162.main)
  i2162.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2163[1], i2162.colorBySpeed)
  i2162.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2163[2], i2162.colorOverLifetime)
  i2162.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2163[3], i2162.emission)
  i2162.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2163[4], i2162.rotationBySpeed)
  i2162.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2163[5], i2162.rotationOverLifetime)
  i2162.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2163[6], i2162.shape)
  i2162.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2163[7], i2162.sizeBySpeed)
  i2162.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2163[8], i2162.sizeOverLifetime)
  i2162.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2163[9], i2162.textureSheetAnimation)
  i2162.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2163[10], i2162.velocityOverLifetime)
  i2162.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2163[11], i2162.noise)
  i2162.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2163[12], i2162.inheritVelocity)
  i2162.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2163[13], i2162.forceOverLifetime)
  i2162.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2163[14], i2162.limitVelocityOverLifetime)
  i2162.useAutoRandomSeed = !!i2163[15]
  i2162.randomSeed = i2163[16]
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2164 = root || new pc.ParticleSystemMain()
  var i2165 = data
  i2164.duration = i2165[0]
  i2164.loop = !!i2165[1]
  i2164.prewarm = !!i2165[2]
  i2164.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2165[3], i2164.startDelay)
  i2164.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2165[4], i2164.startLifetime)
  i2164.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2165[5], i2164.startSpeed)
  i2164.startSize3D = !!i2165[6]
  i2164.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2165[7], i2164.startSizeX)
  i2164.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2165[8], i2164.startSizeY)
  i2164.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2165[9], i2164.startSizeZ)
  i2164.startRotation3D = !!i2165[10]
  i2164.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2165[11], i2164.startRotationX)
  i2164.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2165[12], i2164.startRotationY)
  i2164.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2165[13], i2164.startRotationZ)
  i2164.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2165[14], i2164.startColor)
  i2164.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2165[15], i2164.gravityModifier)
  i2164.simulationSpace = i2165[16]
  request.r(i2165[17], i2165[18], 0, i2164, 'customSimulationSpace')
  i2164.simulationSpeed = i2165[19]
  i2164.useUnscaledTime = !!i2165[20]
  i2164.scalingMode = i2165[21]
  i2164.playOnAwake = !!i2165[22]
  i2164.maxParticles = i2165[23]
  i2164.emitterVelocityMode = i2165[24]
  i2164.stopAction = i2165[25]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2166 = root || new pc.MinMaxCurve()
  var i2167 = data
  i2166.mode = i2167[0]
  i2166.curveMin = new pc.AnimationCurve( { keys_flow: i2167[1] } )
  i2166.curveMax = new pc.AnimationCurve( { keys_flow: i2167[2] } )
  i2166.curveMultiplier = i2167[3]
  i2166.constantMin = i2167[4]
  i2166.constantMax = i2167[5]
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2168 = root || new pc.MinMaxGradient()
  var i2169 = data
  i2168.mode = i2169[0]
  i2168.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2169[1], i2168.gradientMin)
  i2168.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2169[2], i2168.gradientMax)
  i2168.colorMin = new pc.Color(i2169[3], i2169[4], i2169[5], i2169[6])
  i2168.colorMax = new pc.Color(i2169[7], i2169[8], i2169[9], i2169[10])
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2171 = data
  i2170.mode = i2171[0]
  var i2173 = i2171[1]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2173[i + 0]) );
  }
  i2170.colorKeys = i2172
  var i2175 = i2171[2]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2175[i + 0]) );
  }
  i2170.alphaKeys = i2174
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2176 = root || new pc.ParticleSystemColorBySpeed()
  var i2177 = data
  i2176.enabled = !!i2177[0]
  i2176.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2177[1], i2176.color)
  i2176.range = new pc.Vec2( i2177[2], i2177[3] )
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2181 = data
  i2180.color = new pc.Color(i2181[0], i2181[1], i2181[2], i2181[3])
  i2180.time = i2181[4]
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2185 = data
  i2184.alpha = i2185[0]
  i2184.time = i2185[1]
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2186 = root || new pc.ParticleSystemColorOverLifetime()
  var i2187 = data
  i2186.enabled = !!i2187[0]
  i2186.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2187[1], i2186.color)
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2188 = root || new pc.ParticleSystemEmitter()
  var i2189 = data
  i2188.enabled = !!i2189[0]
  i2188.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[1], i2188.rateOverTime)
  i2188.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[2], i2188.rateOverDistance)
  var i2191 = i2189[3]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 1) {
    i2190.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2191[i + 0]) );
  }
  i2188.bursts = i2190
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2194 = root || new pc.ParticleSystemBurst()
  var i2195 = data
  i2194.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[0], i2194.count)
  i2194.cycleCount = i2195[1]
  i2194.minCount = i2195[2]
  i2194.maxCount = i2195[3]
  i2194.repeatInterval = i2195[4]
  i2194.time = i2195[5]
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2196 = root || new pc.ParticleSystemRotationBySpeed()
  var i2197 = data
  i2196.enabled = !!i2197[0]
  i2196.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[1], i2196.x)
  i2196.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[2], i2196.y)
  i2196.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[3], i2196.z)
  i2196.separateAxes = !!i2197[4]
  i2196.range = new pc.Vec2( i2197[5], i2197[6] )
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2198 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2199 = data
  i2198.enabled = !!i2199[0]
  i2198.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[1], i2198.x)
  i2198.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[2], i2198.y)
  i2198.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[3], i2198.z)
  i2198.separateAxes = !!i2199[4]
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2200 = root || new pc.ParticleSystemShape()
  var i2201 = data
  i2200.enabled = !!i2201[0]
  i2200.shapeType = i2201[1]
  i2200.randomDirectionAmount = i2201[2]
  i2200.sphericalDirectionAmount = i2201[3]
  i2200.randomPositionAmount = i2201[4]
  i2200.alignToDirection = !!i2201[5]
  i2200.radius = i2201[6]
  i2200.radiusMode = i2201[7]
  i2200.radiusSpread = i2201[8]
  i2200.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[9], i2200.radiusSpeed)
  i2200.radiusThickness = i2201[10]
  i2200.angle = i2201[11]
  i2200.length = i2201[12]
  i2200.boxThickness = new pc.Vec3( i2201[13], i2201[14], i2201[15] )
  i2200.meshShapeType = i2201[16]
  request.r(i2201[17], i2201[18], 0, i2200, 'mesh')
  request.r(i2201[19], i2201[20], 0, i2200, 'meshRenderer')
  request.r(i2201[21], i2201[22], 0, i2200, 'skinnedMeshRenderer')
  i2200.useMeshMaterialIndex = !!i2201[23]
  i2200.meshMaterialIndex = i2201[24]
  i2200.useMeshColors = !!i2201[25]
  i2200.normalOffset = i2201[26]
  i2200.arc = i2201[27]
  i2200.arcMode = i2201[28]
  i2200.arcSpread = i2201[29]
  i2200.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[30], i2200.arcSpeed)
  i2200.donutRadius = i2201[31]
  i2200.position = new pc.Vec3( i2201[32], i2201[33], i2201[34] )
  i2200.rotation = new pc.Vec3( i2201[35], i2201[36], i2201[37] )
  i2200.scale = new pc.Vec3( i2201[38], i2201[39], i2201[40] )
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2202 = root || new pc.ParticleSystemSizeBySpeed()
  var i2203 = data
  i2202.enabled = !!i2203[0]
  i2202.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[1], i2202.x)
  i2202.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[2], i2202.y)
  i2202.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[3], i2202.z)
  i2202.separateAxes = !!i2203[4]
  i2202.range = new pc.Vec2( i2203[5], i2203[6] )
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2204 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2205 = data
  i2204.enabled = !!i2205[0]
  i2204.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2205[1], i2204.x)
  i2204.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2205[2], i2204.y)
  i2204.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2205[3], i2204.z)
  i2204.separateAxes = !!i2205[4]
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2206 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2207 = data
  i2206.enabled = !!i2207[0]
  i2206.mode = i2207[1]
  i2206.animation = i2207[2]
  i2206.numTilesX = i2207[3]
  i2206.numTilesY = i2207[4]
  i2206.useRandomRow = !!i2207[5]
  i2206.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[6], i2206.frameOverTime)
  i2206.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[7], i2206.startFrame)
  i2206.cycleCount = i2207[8]
  i2206.rowIndex = i2207[9]
  i2206.flipU = i2207[10]
  i2206.flipV = i2207[11]
  i2206.spriteCount = i2207[12]
  var i2209 = i2207[13]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 2) {
  request.r(i2209[i + 0], i2209[i + 1], 2, i2208, '')
  }
  i2206.sprites = i2208
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2212 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2213 = data
  i2212.enabled = !!i2213[0]
  i2212.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[1], i2212.x)
  i2212.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[2], i2212.y)
  i2212.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[3], i2212.z)
  i2212.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[4], i2212.radial)
  i2212.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[5], i2212.speedModifier)
  i2212.space = i2213[6]
  i2212.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[7], i2212.orbitalX)
  i2212.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[8], i2212.orbitalY)
  i2212.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[9], i2212.orbitalZ)
  i2212.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[10], i2212.orbitalOffsetX)
  i2212.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[11], i2212.orbitalOffsetY)
  i2212.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[12], i2212.orbitalOffsetZ)
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2214 = root || new pc.ParticleSystemNoise()
  var i2215 = data
  i2214.enabled = !!i2215[0]
  i2214.separateAxes = !!i2215[1]
  i2214.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[2], i2214.strengthX)
  i2214.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[3], i2214.strengthY)
  i2214.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[4], i2214.strengthZ)
  i2214.frequency = i2215[5]
  i2214.damping = !!i2215[6]
  i2214.octaveCount = i2215[7]
  i2214.octaveMultiplier = i2215[8]
  i2214.octaveScale = i2215[9]
  i2214.quality = i2215[10]
  i2214.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[11], i2214.scrollSpeed)
  i2214.scrollSpeedMultiplier = i2215[12]
  i2214.remapEnabled = !!i2215[13]
  i2214.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[14], i2214.remapX)
  i2214.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[15], i2214.remapY)
  i2214.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[16], i2214.remapZ)
  i2214.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[17], i2214.positionAmount)
  i2214.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[18], i2214.rotationAmount)
  i2214.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[19], i2214.sizeAmount)
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2216 = root || new pc.ParticleSystemInheritVelocity()
  var i2217 = data
  i2216.enabled = !!i2217[0]
  i2216.mode = i2217[1]
  i2216.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2217[2], i2216.curve)
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2218 = root || new pc.ParticleSystemForceOverLifetime()
  var i2219 = data
  i2218.enabled = !!i2219[0]
  i2218.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[1], i2218.x)
  i2218.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[2], i2218.y)
  i2218.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[3], i2218.z)
  i2218.space = i2219[4]
  i2218.randomized = !!i2219[5]
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2220 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2221 = data
  i2220.enabled = !!i2221[0]
  i2220.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[1], i2220.limit)
  i2220.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[2], i2220.limitX)
  i2220.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[3], i2220.limitY)
  i2220.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[4], i2220.limitZ)
  i2220.dampen = i2221[5]
  i2220.separateAxes = !!i2221[6]
  i2220.space = i2221[7]
  i2220.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[8], i2220.drag)
  i2220.multiplyDragByParticleSize = !!i2221[9]
  i2220.multiplyDragByParticleVelocity = !!i2221[10]
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2223 = data
  i2222.enabled = !!i2223[0]
  request.r(i2223[1], i2223[2], 0, i2222, 'sharedMaterial')
  var i2225 = i2223[3]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 2) {
  request.r(i2225[i + 0], i2225[i + 1], 2, i2224, '')
  }
  i2222.sharedMaterials = i2224
  i2222.receiveShadows = !!i2223[4]
  i2222.shadowCastingMode = i2223[5]
  i2222.sortingLayerID = i2223[6]
  i2222.sortingOrder = i2223[7]
  i2222.lightmapIndex = i2223[8]
  i2222.lightmapSceneIndex = i2223[9]
  i2222.lightmapScaleOffset = new pc.Vec4( i2223[10], i2223[11], i2223[12], i2223[13] )
  i2222.lightProbeUsage = i2223[14]
  i2222.reflectionProbeUsage = i2223[15]
  request.r(i2223[16], i2223[17], 0, i2222, 'mesh')
  i2222.meshCount = i2223[18]
  i2222.activeVertexStreamsCount = i2223[19]
  i2222.alignment = i2223[20]
  i2222.renderMode = i2223[21]
  i2222.sortMode = i2223[22]
  i2222.lengthScale = i2223[23]
  i2222.velocityScale = i2223[24]
  i2222.cameraVelocityScale = i2223[25]
  i2222.normalDirection = i2223[26]
  i2222.sortingFudge = i2223[27]
  i2222.minParticleSize = i2223[28]
  i2222.maxParticleSize = i2223[29]
  i2222.pivot = new pc.Vec3( i2223[30], i2223[31], i2223[32] )
  request.r(i2223[33], i2223[34], 0, i2222, 'trailMaterial')
  return i2222
}

Deserializers["CoinCollectible"] = function (request, data, root) {
  var i2226 = root || request.c( 'CoinCollectible' )
  var i2227 = data
  i2226.distance = i2227[0]
  i2226.moveTime = i2227[1]
  return i2226
}

Deserializers["BotController"] = function (request, data, root) {
  var i2228 = root || request.c( 'BotController' )
  var i2229 = data
  request.r(i2229[0], i2229[1], 0, i2228, '_animator')
  i2228.moveDirection = new pc.Vec3( i2229[2], i2229[3], i2229[4] )
  i2228._hasAnimator = !!i2229[5]
  i2228._animIDSpeed = i2229[6]
  i2228._animIDMotionSpeed = i2229[7]
  i2228._animIEnd = i2229[8]
  i2228.MoveSpeed = i2229[9]
  i2228.SpeedChangeRate = i2229[10]
  i2228.RotationSmoothTime = i2229[11]
  i2228.gravity = i2229[12]
  i2228.fallThreshold = i2229[13]
  i2228.pushForceDecayRate = i2229[14]
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2231 = data
  i2230.pivot = new pc.Vec2( i2231[0], i2231[1] )
  i2230.anchorMin = new pc.Vec2( i2231[2], i2231[3] )
  i2230.anchorMax = new pc.Vec2( i2231[4], i2231[5] )
  i2230.sizeDelta = new pc.Vec2( i2231[6], i2231[7] )
  i2230.anchoredPosition3D = new pc.Vec3( i2231[8], i2231[9], i2231[10] )
  i2230.rotation = new pc.Quat(i2231[11], i2231[12], i2231[13], i2231[14])
  i2230.scale = new pc.Vec3( i2231[15], i2231[16], i2231[17] )
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2233 = data
  i2232.cullTransparentMesh = !!i2233[0]
  return i2232
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2234 = root || request.c( 'UnityEngine.UI.Image' )
  var i2235 = data
  request.r(i2235[0], i2235[1], 0, i2234, 'm_Sprite')
  i2234.m_Type = i2235[2]
  i2234.m_PreserveAspect = !!i2235[3]
  i2234.m_FillCenter = !!i2235[4]
  i2234.m_FillMethod = i2235[5]
  i2234.m_FillAmount = i2235[6]
  i2234.m_FillClockwise = !!i2235[7]
  i2234.m_FillOrigin = i2235[8]
  i2234.m_UseSpriteMesh = !!i2235[9]
  i2234.m_PixelsPerUnitMultiplier = i2235[10]
  request.r(i2235[11], i2235[12], 0, i2234, 'm_Material')
  i2234.m_Maskable = !!i2235[13]
  i2234.m_Color = new pc.Color(i2235[14], i2235[15], i2235[16], i2235[17])
  i2234.m_RaycastTarget = !!i2235[18]
  i2234.m_RaycastPadding = new pc.Vec4( i2235[19], i2235[20], i2235[21], i2235[22] )
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2237 = data
  i2236.name = i2237[0]
  i2236.atlasId = i2237[1]
  i2236.mipmapCount = i2237[2]
  i2236.hdr = !!i2237[3]
  i2236.size = i2237[4]
  i2236.anisoLevel = i2237[5]
  i2236.filterMode = i2237[6]
  var i2239 = i2237[7]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 4) {
    i2238.push( UnityEngine.Rect.MinMaxRect(i2239[i + 0], i2239[i + 1], i2239[i + 2], i2239[i + 3]) );
  }
  i2236.rects = i2238
  i2236.wrapU = i2237[8]
  i2236.wrapV = i2237[9]
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2243 = data
  i2242.name = i2243[0]
  i2242.index = i2243[1]
  i2242.startup = !!i2243[2]
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2245 = data
  i2244.enabled = !!i2245[0]
  i2244.aspect = i2245[1]
  i2244.orthographic = !!i2245[2]
  i2244.orthographicSize = i2245[3]
  i2244.backgroundColor = new pc.Color(i2245[4], i2245[5], i2245[6], i2245[7])
  i2244.nearClipPlane = i2245[8]
  i2244.farClipPlane = i2245[9]
  i2244.fieldOfView = i2245[10]
  i2244.depth = i2245[11]
  i2244.clearFlags = i2245[12]
  i2244.cullingMask = i2245[13]
  i2244.rect = i2245[14]
  request.r(i2245[15], i2245[16], 0, i2244, 'targetTexture')
  i2244.usePhysicalProperties = !!i2245[17]
  i2244.focalLength = i2245[18]
  i2244.sensorSize = new pc.Vec2( i2245[19], i2245[20] )
  i2244.lensShift = new pc.Vec2( i2245[21], i2245[22] )
  i2244.gateFit = i2245[23]
  i2244.commandBufferCount = i2245[24]
  i2244.cameraType = i2245[25]
  return i2244
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i2246 = root || request.c( 'CameraFollow' )
  var i2247 = data
  request.r(i2247[0], i2247[1], 0, i2246, 'target')
  request.r(i2247[2], i2247[3], 0, i2246, 'finishTarget')
  return i2246
}

Deserializers["FOVCalculator"] = function (request, data, root) {
  var i2248 = root || request.c( 'FOVCalculator' )
  var i2249 = data
  return i2248
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i2250 = root || request.c( 'SoundManager' )
  var i2251 = data
  request.r(i2251[0], i2251[1], 0, i2250, 'pushSound')
  request.r(i2251[2], i2251[3], 0, i2250, 'coinSound')
  request.r(i2251[4], i2251[5], 0, i2250, 'countdownSound')
  request.r(i2251[6], i2251[7], 0, i2250, 'botDeathSound')
  request.r(i2251[8], i2251[9], 0, i2250, 'coinFirstInteractionSound')
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2253 = data
  request.r(i2253[0], i2253[1], 0, i2252, 'clip')
  request.r(i2253[2], i2253[3], 0, i2252, 'outputAudioMixerGroup')
  i2252.playOnAwake = !!i2253[4]
  i2252.loop = !!i2253[5]
  i2252.time = i2253[6]
  i2252.volume = i2253[7]
  i2252.pitch = i2253[8]
  i2252.enabled = !!i2253[9]
  return i2252
}

Deserializers["RankManager"] = function (request, data, root) {
  var i2254 = root || request.c( 'RankManager' )
  var i2255 = data
  request.r(i2255[0], i2255[1], 0, i2254, 'rankImage')
  var i2257 = i2255[2]
  var i2256 = []
  for(var i = 0; i < i2257.length; i += 2) {
  request.r(i2257[i + 0], i2257[i + 1], 2, i2256, '')
  }
  i2254.rankSprites = i2256
  var i2259 = i2255[3]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 2) {
  request.r(i2259[i + 0], i2259[i + 1], 2, i2258, '')
  }
  i2254.racers = i2258
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2263 = data
  i2262.enabled = !!i2263[0]
  i2262.planeDistance = i2263[1]
  i2262.referencePixelsPerUnit = i2263[2]
  i2262.isFallbackOverlay = !!i2263[3]
  i2262.renderMode = i2263[4]
  i2262.renderOrder = i2263[5]
  i2262.sortingLayerName = i2263[6]
  i2262.sortingOrder = i2263[7]
  i2262.scaleFactor = i2263[8]
  request.r(i2263[9], i2263[10], 0, i2262, 'worldCamera')
  i2262.overrideSorting = !!i2263[11]
  i2262.pixelPerfect = !!i2263[12]
  i2262.targetDisplay = i2263[13]
  i2262.overridePixelPerfect = !!i2263[14]
  return i2262
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2264 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2265 = data
  i2264.m_UiScaleMode = i2265[0]
  i2264.m_ReferencePixelsPerUnit = i2265[1]
  i2264.m_ScaleFactor = i2265[2]
  i2264.m_ReferenceResolution = new pc.Vec2( i2265[3], i2265[4] )
  i2264.m_ScreenMatchMode = i2265[5]
  i2264.m_MatchWidthOrHeight = i2265[6]
  i2264.m_PhysicalUnit = i2265[7]
  i2264.m_FallbackScreenDPI = i2265[8]
  i2264.m_DefaultSpriteDPI = i2265[9]
  i2264.m_DynamicPixelsPerUnit = i2265[10]
  i2264.m_PresetInfoIsWorld = !!i2265[11]
  return i2264
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2266 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2267 = data
  i2266.m_IgnoreReversedGraphics = !!i2267[0]
  i2266.m_BlockingObjects = i2267[1]
  i2266.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2267[2] )
  return i2266
}

Deserializers["Joystick"] = function (request, data, root) {
  var i2268 = root || request.c( 'Joystick' )
  var i2269 = data
  request.r(i2269[0], i2269[1], 0, i2268, 'joystickBackground')
  request.r(i2269[2], i2269[3], 0, i2268, 'joystickHandle')
  return i2268
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2270 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2271 = data
  i2270.m_Spacing = i2271[0]
  i2270.m_ChildForceExpandWidth = !!i2271[1]
  i2270.m_ChildForceExpandHeight = !!i2271[2]
  i2270.m_ChildControlWidth = !!i2271[3]
  i2270.m_ChildControlHeight = !!i2271[4]
  i2270.m_ChildScaleWidth = !!i2271[5]
  i2270.m_ChildScaleHeight = !!i2271[6]
  i2270.m_ReverseArrangement = !!i2271[7]
  i2270.m_Padding = UnityEngine.RectOffset.FromPaddings(i2271[8], i2271[9], i2271[10], i2271[11])
  i2270.m_ChildAlignment = i2271[12]
  return i2270
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i2272 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i2273 = data
  i2272.m_HorizontalFit = i2273[0]
  i2272.m_VerticalFit = i2273[1]
  return i2272
}

Deserializers["DeathCounter"] = function (request, data, root) {
  var i2274 = root || request.c( 'DeathCounter' )
  var i2275 = data
  request.r(i2275[0], i2275[1], 0, i2274, 'deathCounterText')
  return i2274
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2276 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2277 = data
  i2276.m_hasFontAssetChanged = !!i2277[0]
  request.r(i2277[1], i2277[2], 0, i2276, 'm_baseMaterial')
  i2276.m_maskOffset = new pc.Vec4( i2277[3], i2277[4], i2277[5], i2277[6] )
  i2276.m_text = i2277[7]
  i2276.m_isRightToLeft = !!i2277[8]
  request.r(i2277[9], i2277[10], 0, i2276, 'm_fontAsset')
  request.r(i2277[11], i2277[12], 0, i2276, 'm_sharedMaterial')
  var i2279 = i2277[13]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 2) {
  request.r(i2279[i + 0], i2279[i + 1], 2, i2278, '')
  }
  i2276.m_fontSharedMaterials = i2278
  request.r(i2277[14], i2277[15], 0, i2276, 'm_fontMaterial')
  var i2281 = i2277[16]
  var i2280 = []
  for(var i = 0; i < i2281.length; i += 2) {
  request.r(i2281[i + 0], i2281[i + 1], 2, i2280, '')
  }
  i2276.m_fontMaterials = i2280
  i2276.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2277[17], i2277[18], i2277[19], i2277[20])
  i2276.m_fontColor = new pc.Color(i2277[21], i2277[22], i2277[23], i2277[24])
  i2276.m_enableVertexGradient = !!i2277[25]
  i2276.m_colorMode = i2277[26]
  i2276.m_fontColorGradient = request.d('TMPro.VertexGradient', i2277[27], i2276.m_fontColorGradient)
  request.r(i2277[28], i2277[29], 0, i2276, 'm_fontColorGradientPreset')
  request.r(i2277[30], i2277[31], 0, i2276, 'm_spriteAsset')
  i2276.m_tintAllSprites = !!i2277[32]
  request.r(i2277[33], i2277[34], 0, i2276, 'm_StyleSheet')
  i2276.m_TextStyleHashCode = i2277[35]
  i2276.m_overrideHtmlColors = !!i2277[36]
  i2276.m_faceColor = UnityEngine.Color32.ConstructColor(i2277[37], i2277[38], i2277[39], i2277[40])
  i2276.m_fontSize = i2277[41]
  i2276.m_fontSizeBase = i2277[42]
  i2276.m_fontWeight = i2277[43]
  i2276.m_enableAutoSizing = !!i2277[44]
  i2276.m_fontSizeMin = i2277[45]
  i2276.m_fontSizeMax = i2277[46]
  i2276.m_fontStyle = i2277[47]
  i2276.m_HorizontalAlignment = i2277[48]
  i2276.m_VerticalAlignment = i2277[49]
  i2276.m_textAlignment = i2277[50]
  i2276.m_characterSpacing = i2277[51]
  i2276.m_wordSpacing = i2277[52]
  i2276.m_lineSpacing = i2277[53]
  i2276.m_lineSpacingMax = i2277[54]
  i2276.m_paragraphSpacing = i2277[55]
  i2276.m_charWidthMaxAdj = i2277[56]
  i2276.m_enableWordWrapping = !!i2277[57]
  i2276.m_wordWrappingRatios = i2277[58]
  i2276.m_overflowMode = i2277[59]
  request.r(i2277[60], i2277[61], 0, i2276, 'm_linkedTextComponent')
  request.r(i2277[62], i2277[63], 0, i2276, 'parentLinkedComponent')
  i2276.m_enableKerning = !!i2277[64]
  i2276.m_enableExtraPadding = !!i2277[65]
  i2276.checkPaddingRequired = !!i2277[66]
  i2276.m_isRichText = !!i2277[67]
  i2276.m_parseCtrlCharacters = !!i2277[68]
  i2276.m_isOrthographic = !!i2277[69]
  i2276.m_isCullingEnabled = !!i2277[70]
  i2276.m_horizontalMapping = i2277[71]
  i2276.m_verticalMapping = i2277[72]
  i2276.m_uvLineOffset = i2277[73]
  i2276.m_geometrySortingOrder = i2277[74]
  i2276.m_IsTextObjectScaleStatic = !!i2277[75]
  i2276.m_VertexBufferAutoSizeReduction = !!i2277[76]
  i2276.m_useMaxVisibleDescender = !!i2277[77]
  i2276.m_pageToDisplay = i2277[78]
  i2276.m_margin = new pc.Vec4( i2277[79], i2277[80], i2277[81], i2277[82] )
  i2276.m_isUsingLegacyAnimationComponent = !!i2277[83]
  i2276.m_isVolumetricText = !!i2277[84]
  request.r(i2277[85], i2277[86], 0, i2276, 'm_Material')
  i2276.m_Maskable = !!i2277[87]
  i2276.m_Color = new pc.Color(i2277[88], i2277[89], i2277[90], i2277[91])
  i2276.m_RaycastTarget = !!i2277[92]
  i2276.m_RaycastPadding = new pc.Vec4( i2277[93], i2277[94], i2277[95], i2277[96] )
  return i2276
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2282 = root || request.c( 'TMPro.VertexGradient' )
  var i2283 = data
  i2282.topLeft = new pc.Color(i2283[0], i2283[1], i2283[2], i2283[3])
  i2282.topRight = new pc.Color(i2283[4], i2283[5], i2283[6], i2283[7])
  i2282.bottomLeft = new pc.Color(i2283[8], i2283[9], i2283[10], i2283[11])
  i2282.bottomRight = new pc.Color(i2283[12], i2283[13], i2283[14], i2283[15])
  return i2282
}

Deserializers["CoinManager"] = function (request, data, root) {
  var i2284 = root || request.c( 'CoinManager' )
  var i2285 = data
  request.r(i2285[0], i2285[1], 0, i2284, 'coinCounterText')
  request.r(i2285[2], i2285[3], 0, i2284, 'flyingCoinPrefab')
  request.r(i2285[4], i2285[5], 0, i2284, 'uiTarget')
  return i2284
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2286 = root || request.c( 'UnityEngine.UI.Button' )
  var i2287 = data
  i2286.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2287[0], i2286.m_OnClick)
  i2286.m_Navigation = request.d('UnityEngine.UI.Navigation', i2287[1], i2286.m_Navigation)
  i2286.m_Transition = i2287[2]
  i2286.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2287[3], i2286.m_Colors)
  i2286.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2287[4], i2286.m_SpriteState)
  i2286.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2287[5], i2286.m_AnimationTriggers)
  i2286.m_Interactable = !!i2287[6]
  request.r(i2287[7], i2287[8], 0, i2286, 'm_TargetGraphic')
  return i2286
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2288 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2289 = data
  i2288.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2289[0], i2288.m_PersistentCalls)
  return i2288
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2290 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2291 = data
  var i2293 = i2291[0]
  var i2292 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2293.length; i += 1) {
    i2292.add(request.d('UnityEngine.Events.PersistentCall', i2293[i + 0]));
  }
  i2290.m_Calls = i2292
  return i2290
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2296 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2297 = data
  request.r(i2297[0], i2297[1], 0, i2296, 'm_Target')
  i2296.m_TargetAssemblyTypeName = i2297[2]
  i2296.m_MethodName = i2297[3]
  i2296.m_Mode = i2297[4]
  i2296.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2297[5], i2296.m_Arguments)
  i2296.m_CallState = i2297[6]
  return i2296
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2298 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2299 = data
  request.r(i2299[0], i2299[1], 0, i2298, 'm_ObjectArgument')
  i2298.m_ObjectArgumentAssemblyTypeName = i2299[2]
  i2298.m_IntArgument = i2299[3]
  i2298.m_FloatArgument = i2299[4]
  i2298.m_StringArgument = i2299[5]
  i2298.m_BoolArgument = !!i2299[6]
  return i2298
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2300 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2301 = data
  i2300.m_Mode = i2301[0]
  i2300.m_WrapAround = !!i2301[1]
  request.r(i2301[2], i2301[3], 0, i2300, 'm_SelectOnUp')
  request.r(i2301[4], i2301[5], 0, i2300, 'm_SelectOnDown')
  request.r(i2301[6], i2301[7], 0, i2300, 'm_SelectOnLeft')
  request.r(i2301[8], i2301[9], 0, i2300, 'm_SelectOnRight')
  return i2300
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2302 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2303 = data
  i2302.m_NormalColor = new pc.Color(i2303[0], i2303[1], i2303[2], i2303[3])
  i2302.m_HighlightedColor = new pc.Color(i2303[4], i2303[5], i2303[6], i2303[7])
  i2302.m_PressedColor = new pc.Color(i2303[8], i2303[9], i2303[10], i2303[11])
  i2302.m_SelectedColor = new pc.Color(i2303[12], i2303[13], i2303[14], i2303[15])
  i2302.m_DisabledColor = new pc.Color(i2303[16], i2303[17], i2303[18], i2303[19])
  i2302.m_ColorMultiplier = i2303[20]
  i2302.m_FadeDuration = i2303[21]
  return i2302
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2304 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2305 = data
  request.r(i2305[0], i2305[1], 0, i2304, 'm_HighlightedSprite')
  request.r(i2305[2], i2305[3], 0, i2304, 'm_PressedSprite')
  request.r(i2305[4], i2305[5], 0, i2304, 'm_SelectedSprite')
  request.r(i2305[6], i2305[7], 0, i2304, 'm_DisabledSprite')
  return i2304
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2306 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2307 = data
  i2306.m_NormalTrigger = i2307[0]
  i2306.m_HighlightedTrigger = i2307[1]
  i2306.m_PressedTrigger = i2307[2]
  i2306.m_SelectedTrigger = i2307[3]
  i2306.m_DisabledTrigger = i2307[4]
  return i2306
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2308 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2309 = data
  request.r(i2309[0], i2309[1], 0, i2308, 'm_FirstSelected')
  i2308.m_sendNavigationEvents = !!i2309[2]
  i2308.m_DragThreshold = i2309[3]
  return i2308
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2310 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2311 = data
  i2310.m_HorizontalAxis = i2311[0]
  i2310.m_VerticalAxis = i2311[1]
  i2310.m_SubmitButton = i2311[2]
  i2310.m_CancelButton = i2311[3]
  i2310.m_InputActionsPerSecond = i2311[4]
  i2310.m_RepeatDelay = i2311[5]
  i2310.m_ForceModuleActive = !!i2311[6]
  i2310.m_SendPointerHoverToParent = !!i2311[7]
  return i2310
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2312 = root || request.c( 'GameManager' )
  var i2313 = data
  i2312.isRunnerGameStarted = !!i2313[0]
  i2312.isGameCompleted = !!i2313[1]
  request.r(i2313[2], i2313[3], 0, i2312, 'completeGameUI')
  request.r(i2313[4], i2313[5], 0, i2312, 'startGameUI')
  request.r(i2313[6], i2313[7], 0, i2312, 'starterText')
  request.r(i2313[8], i2313[9], 0, i2312, 'starterImage')
  var i2315 = i2313[10]
  var i2314 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2315.length; i += 2) {
  request.r(i2315[i + 0], i2315[i + 1], 1, i2314, '')
  }
  i2312.starterImages = i2314
  request.r(i2313[11], i2313[12], 0, i2312, 'tapToStartText')
  i2312.skipStartScreen = !!i2313[13]
  return i2312
}

Deserializers["FinishLine"] = function (request, data, root) {
  var i2318 = root || request.c( 'FinishLine' )
  var i2319 = data
  return i2318
}

Deserializers["BackgroundMusic"] = function (request, data, root) {
  var i2320 = root || request.c( 'BackgroundMusic' )
  var i2321 = data
  return i2320
}

Deserializers["NodeManager"] = function (request, data, root) {
  var i2322 = root || request.c( 'NodeManager' )
  var i2323 = data
  return i2322
}

Deserializers["AINode"] = function (request, data, root) {
  var i2324 = root || request.c( 'AINode' )
  var i2325 = data
  i2324.leftOffset = i2325[0]
  i2324.rightOffset = i2325[1]
  request.r(i2325[2], i2325[3], 0, i2324, 'nextNode')
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2327 = data
  i2326.ambientIntensity = i2327[0]
  i2326.reflectionIntensity = i2327[1]
  i2326.ambientMode = i2327[2]
  i2326.ambientLight = new pc.Color(i2327[3], i2327[4], i2327[5], i2327[6])
  i2326.ambientSkyColor = new pc.Color(i2327[7], i2327[8], i2327[9], i2327[10])
  i2326.ambientGroundColor = new pc.Color(i2327[11], i2327[12], i2327[13], i2327[14])
  i2326.ambientEquatorColor = new pc.Color(i2327[15], i2327[16], i2327[17], i2327[18])
  i2326.fogColor = new pc.Color(i2327[19], i2327[20], i2327[21], i2327[22])
  i2326.fogEndDistance = i2327[23]
  i2326.fogStartDistance = i2327[24]
  i2326.fogDensity = i2327[25]
  i2326.fog = !!i2327[26]
  request.r(i2327[27], i2327[28], 0, i2326, 'skybox')
  i2326.fogMode = i2327[29]
  var i2329 = i2327[30]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 1) {
    i2328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2329[i + 0]) );
  }
  i2326.lightmaps = i2328
  i2326.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2327[31], i2326.lightProbes)
  i2326.lightmapsMode = i2327[32]
  i2326.mixedBakeMode = i2327[33]
  i2326.environmentLightingMode = i2327[34]
  i2326.ambientProbe = new pc.SphericalHarmonicsL2(i2327[35])
  i2326.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2327[36])
  i2326.useReferenceAmbientProbe = !!i2327[37]
  request.r(i2327[38], i2327[39], 0, i2326, 'customReflection')
  request.r(i2327[40], i2327[41], 0, i2326, 'defaultReflection')
  i2326.defaultReflectionMode = i2327[42]
  i2326.defaultReflectionResolution = i2327[43]
  i2326.sunLightObjectId = i2327[44]
  i2326.pixelLightCount = i2327[45]
  i2326.defaultReflectionHDR = !!i2327[46]
  i2326.hasLightDataAsset = !!i2327[47]
  i2326.hasManualGenerate = !!i2327[48]
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2333 = data
  request.r(i2333[0], i2333[1], 0, i2332, 'lightmapColor')
  request.r(i2333[2], i2333[3], 0, i2332, 'lightmapDirection')
  return i2332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2334 = root || new UnityEngine.LightProbes()
  var i2335 = data
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2343 = data
  var i2345 = i2343[0]
  var i2344 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2345.length; i += 1) {
    i2344.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2345[i + 0]));
  }
  i2342.ShaderCompilationErrors = i2344
  i2342.name = i2343[1]
  i2342.guid = i2343[2]
  var i2347 = i2343[3]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.push( i2347[i + 0] );
  }
  i2342.shaderDefinedKeywords = i2346
  var i2349 = i2343[4]
  var i2348 = []
  for(var i = 0; i < i2349.length; i += 1) {
    i2348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2349[i + 0]) );
  }
  i2342.passes = i2348
  var i2351 = i2343[5]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2351[i + 0]) );
  }
  i2342.usePasses = i2350
  var i2353 = i2343[6]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2353[i + 0]) );
  }
  i2342.defaultParameterValues = i2352
  request.r(i2343[7], i2343[8], 0, i2342, 'unityFallbackShader')
  i2342.readDepth = !!i2343[9]
  i2342.isCreatedByShaderGraph = !!i2343[10]
  i2342.compiled = !!i2343[11]
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2357 = data
  i2356.shaderName = i2357[0]
  i2356.errorMessage = i2357[1]
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2362 = root || new pc.UnityShaderPass()
  var i2363 = data
  i2362.id = i2363[0]
  i2362.subShaderIndex = i2363[1]
  i2362.name = i2363[2]
  i2362.passType = i2363[3]
  i2362.grabPassTextureName = i2363[4]
  i2362.usePass = !!i2363[5]
  i2362.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2363[6], i2362.zTest)
  i2362.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2363[7], i2362.zWrite)
  i2362.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2363[8], i2362.culling)
  i2362.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2363[9], i2362.blending)
  i2362.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2363[10], i2362.alphaBlending)
  i2362.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2363[11], i2362.colorWriteMask)
  i2362.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2363[12], i2362.offsetUnits)
  i2362.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2363[13], i2362.offsetFactor)
  i2362.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2363[14], i2362.stencilRef)
  i2362.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2363[15], i2362.stencilReadMask)
  i2362.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2363[16], i2362.stencilWriteMask)
  i2362.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2363[17], i2362.stencilOp)
  i2362.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2363[18], i2362.stencilOpFront)
  i2362.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2363[19], i2362.stencilOpBack)
  var i2365 = i2363[20]
  var i2364 = []
  for(var i = 0; i < i2365.length; i += 1) {
    i2364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2365[i + 0]) );
  }
  i2362.tags = i2364
  var i2367 = i2363[21]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 1) {
    i2366.push( i2367[i + 0] );
  }
  i2362.passDefinedKeywords = i2366
  var i2369 = i2363[22]
  var i2368 = []
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2369[i + 0]) );
  }
  i2362.passDefinedKeywordGroups = i2368
  var i2371 = i2363[23]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2371[i + 0]) );
  }
  i2362.variants = i2370
  var i2373 = i2363[24]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 1) {
    i2372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2373[i + 0]) );
  }
  i2362.excludedVariants = i2372
  i2362.hasDepthReader = !!i2363[25]
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2375 = data
  i2374.val = i2375[0]
  i2374.name = i2375[1]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2377 = data
  i2376.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2377[0], i2376.src)
  i2376.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2377[1], i2376.dst)
  i2376.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2377[2], i2376.op)
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2379 = data
  i2378.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2379[0], i2378.pass)
  i2378.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2379[1], i2378.fail)
  i2378.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2379[2], i2378.zFail)
  i2378.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2379[3], i2378.comp)
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2383 = data
  i2382.name = i2383[0]
  i2382.value = i2383[1]
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2387 = data
  var i2389 = i2387[0]
  var i2388 = []
  for(var i = 0; i < i2389.length; i += 1) {
    i2388.push( i2389[i + 0] );
  }
  i2386.keywords = i2388
  i2386.hasDiscard = !!i2387[1]
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2393 = data
  i2392.passId = i2393[0]
  i2392.subShaderIndex = i2393[1]
  var i2395 = i2393[2]
  var i2394 = []
  for(var i = 0; i < i2395.length; i += 1) {
    i2394.push( i2395[i + 0] );
  }
  i2392.keywords = i2394
  i2392.vertexProgram = i2393[3]
  i2392.fragmentProgram = i2393[4]
  i2392.exportedForWebGl2 = !!i2393[5]
  i2392.readDepth = !!i2393[6]
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2399 = data
  request.r(i2399[0], i2399[1], 0, i2398, 'shader')
  i2398.pass = i2399[2]
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2403 = data
  i2402.name = i2403[0]
  i2402.type = i2403[1]
  i2402.value = new pc.Vec4( i2403[2], i2403[3], i2403[4], i2403[5] )
  i2402.textureValue = i2403[6]
  i2402.shaderPropertyFlag = i2403[7]
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2405 = data
  i2404.name = i2405[0]
  request.r(i2405[1], i2405[2], 0, i2404, 'texture')
  i2404.aabb = i2405[3]
  i2404.vertices = i2405[4]
  i2404.triangles = i2405[5]
  i2404.textureRect = UnityEngine.Rect.MinMaxRect(i2405[6], i2405[7], i2405[8], i2405[9])
  i2404.packedRect = UnityEngine.Rect.MinMaxRect(i2405[10], i2405[11], i2405[12], i2405[13])
  i2404.border = new pc.Vec4( i2405[14], i2405[15], i2405[16], i2405[17] )
  i2404.transparency = i2405[18]
  i2404.bounds = i2405[19]
  i2404.pixelsPerUnit = i2405[20]
  i2404.textureWidth = i2405[21]
  i2404.textureHeight = i2405[22]
  i2404.nativeSize = new pc.Vec2( i2405[23], i2405[24] )
  i2404.pivot = new pc.Vec2( i2405[25], i2405[26] )
  i2404.textureRectOffset = new pc.Vec2( i2405[27], i2405[28] )
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2407 = data
  i2406.name = i2407[0]
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2409 = data
  i2408.name = i2409[0]
  i2408.wrapMode = i2409[1]
  i2408.isLooping = !!i2409[2]
  i2408.length = i2409[3]
  var i2411 = i2409[4]
  var i2410 = []
  for(var i = 0; i < i2411.length; i += 1) {
    i2410.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2411[i + 0]) );
  }
  i2408.curves = i2410
  var i2413 = i2409[5]
  var i2412 = []
  for(var i = 0; i < i2413.length; i += 1) {
    i2412.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2413[i + 0]) );
  }
  i2408.events = i2412
  i2408.halfPrecision = !!i2409[6]
  i2408._frameRate = i2409[7]
  i2408.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2409[8], i2408.localBounds)
  i2408.hasMuscleCurves = !!i2409[9]
  var i2415 = i2409[10]
  var i2414 = []
  for(var i = 0; i < i2415.length; i += 1) {
    i2414.push( i2415[i + 0] );
  }
  i2408.clipMuscleConstant = i2414
  i2408.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2409[11], i2408.clipBindingConstant)
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2419 = data
  i2418.path = i2419[0]
  i2418.hash = i2419[1]
  i2418.componentType = i2419[2]
  i2418.property = i2419[3]
  i2418.keys = i2419[4]
  var i2421 = i2419[5]
  var i2420 = []
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2421[i + 0]) );
  }
  i2418.objectReferenceKeys = i2420
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2425 = data
  i2424.time = i2425[0]
  request.r(i2425[1], i2425[2], 0, i2424, 'value')
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2429 = data
  i2428.functionName = i2429[0]
  i2428.floatParameter = i2429[1]
  i2428.intParameter = i2429[2]
  i2428.stringParameter = i2429[3]
  request.r(i2429[4], i2429[5], 0, i2428, 'objectReferenceParameter')
  i2428.time = i2429[6]
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2431 = data
  i2430.center = new pc.Vec3( i2431[0], i2431[1], i2431[2] )
  i2430.extends = new pc.Vec3( i2431[3], i2431[4], i2431[5] )
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2435 = data
  var i2437 = i2435[0]
  var i2436 = []
  for(var i = 0; i < i2437.length; i += 1) {
    i2436.push( i2437[i + 0] );
  }
  i2434.genericBindings = i2436
  var i2439 = i2435[1]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 1) {
    i2438.push( i2439[i + 0] );
  }
  i2434.pptrCurveMapping = i2438
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i2440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i2441 = data
  i2440.name = i2441[0]
  i2440.blendParameter = i2441[1]
  i2440.blendParameterY = i2441[2]
  i2440.blendType = i2441[3]
  var i2443 = i2441[4]
  var i2442 = []
  for(var i = 0; i < i2443.length; i += 1) {
    i2442.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i2443[i + 0]) );
  }
  i2440.children = i2442
  i2440.useAutomaticThresholds = !!i2441[5]
  i2440.minThreshold = i2441[6]
  i2440.maxThreshold = i2441[7]
  return i2440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i2447 = data
  request.r(i2447[0], i2447[1], 0, i2446, 'motion')
  i2446.threshold = i2447[2]
  i2446.position = new pc.Vec2( i2447[3], i2447[4] )
  i2446.timeScale = i2447[5]
  i2446.cycleOffset = i2447[6]
  i2446.directBlendParameter = i2447[7]
  i2446.mirror = !!i2447[8]
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2449 = data
  i2448.name = i2449[0]
  i2448.ascent = i2449[1]
  i2448.originalLineHeight = i2449[2]
  i2448.fontSize = i2449[3]
  var i2451 = i2449[4]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2451[i + 0]) );
  }
  i2448.characterInfo = i2450
  request.r(i2449[5], i2449[6], 0, i2448, 'texture')
  i2448.originalFontSize = i2449[7]
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2455 = data
  i2454.index = i2455[0]
  i2454.advance = i2455[1]
  i2454.bearing = i2455[2]
  i2454.glyphWidth = i2455[3]
  i2454.glyphHeight = i2455[4]
  i2454.minX = i2455[5]
  i2454.maxX = i2455[6]
  i2454.minY = i2455[7]
  i2454.maxY = i2455[8]
  i2454.uvBottomLeftX = i2455[9]
  i2454.uvBottomLeftY = i2455[10]
  i2454.uvBottomRightX = i2455[11]
  i2454.uvBottomRightY = i2455[12]
  i2454.uvTopLeftX = i2455[13]
  i2454.uvTopLeftY = i2455[14]
  i2454.uvTopRightX = i2455[15]
  i2454.uvTopRightY = i2455[16]
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2457 = data
  i2456.name = i2457[0]
  var i2459 = i2457[1]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 1) {
    i2458.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2459[i + 0]) );
  }
  i2456.layers = i2458
  var i2461 = i2457[2]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 1) {
    i2460.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2461[i + 0]) );
  }
  i2456.parameters = i2460
  i2456.animationClips = i2457[3]
  i2456.avatarUnsupported = i2457[4]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2465 = data
  i2464.name = i2465[0]
  i2464.defaultWeight = i2465[1]
  i2464.blendingMode = i2465[2]
  i2464.avatarMask = i2465[3]
  i2464.syncedLayerIndex = i2465[4]
  i2464.syncedLayerAffectsTiming = !!i2465[5]
  i2464.syncedLayers = i2465[6]
  i2464.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2465[7], i2464.stateMachine)
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2467 = data
  i2466.id = i2467[0]
  i2466.name = i2467[1]
  i2466.path = i2467[2]
  var i2469 = i2467[3]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2469[i + 0]) );
  }
  i2466.states = i2468
  var i2471 = i2467[4]
  var i2470 = []
  for(var i = 0; i < i2471.length; i += 1) {
    i2470.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2471[i + 0]) );
  }
  i2466.machines = i2470
  var i2473 = i2467[5]
  var i2472 = []
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2473[i + 0]) );
  }
  i2466.entryStateTransitions = i2472
  var i2475 = i2467[6]
  var i2474 = []
  for(var i = 0; i < i2475.length; i += 1) {
    i2474.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2475[i + 0]) );
  }
  i2466.exitStateTransitions = i2474
  var i2477 = i2467[7]
  var i2476 = []
  for(var i = 0; i < i2477.length; i += 1) {
    i2476.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2477[i + 0]) );
  }
  i2466.anyStateTransitions = i2476
  i2466.defaultStateId = i2467[8]
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2481 = data
  i2480.id = i2481[0]
  i2480.name = i2481[1]
  i2480.cycleOffset = i2481[2]
  i2480.cycleOffsetParameter = i2481[3]
  i2480.cycleOffsetParameterActive = !!i2481[4]
  i2480.mirror = !!i2481[5]
  i2480.mirrorParameter = i2481[6]
  i2480.mirrorParameterActive = !!i2481[7]
  i2480.motionId = i2481[8]
  i2480.nameHash = i2481[9]
  i2480.fullPathHash = i2481[10]
  i2480.speed = i2481[11]
  i2480.speedParameter = i2481[12]
  i2480.speedParameterActive = !!i2481[13]
  i2480.tag = i2481[14]
  i2480.tagHash = i2481[15]
  i2480.writeDefaultValues = !!i2481[16]
  var i2483 = i2481[17]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 2) {
  request.r(i2483[i + 0], i2483[i + 1], 2, i2482, '')
  }
  i2480.behaviours = i2482
  var i2485 = i2481[18]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2485[i + 0]) );
  }
  i2480.transitions = i2484
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2491 = data
  i2490.fullPath = i2491[0]
  i2490.canTransitionToSelf = !!i2491[1]
  i2490.duration = i2491[2]
  i2490.exitTime = i2491[3]
  i2490.hasExitTime = !!i2491[4]
  i2490.hasFixedDuration = !!i2491[5]
  i2490.interruptionSource = i2491[6]
  i2490.offset = i2491[7]
  i2490.orderedInterruption = !!i2491[8]
  i2490.destinationStateId = i2491[9]
  i2490.isExit = !!i2491[10]
  i2490.mute = !!i2491[11]
  i2490.solo = !!i2491[12]
  var i2493 = i2491[13]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 1) {
    i2492.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2493[i + 0]) );
  }
  i2490.conditions = i2492
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2497 = data
  i2496.mode = i2497[0]
  i2496.parameter = i2497[1]
  i2496.threshold = i2497[2]
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2503 = data
  i2502.destinationStateId = i2503[0]
  i2502.isExit = !!i2503[1]
  i2502.mute = !!i2503[2]
  i2502.solo = !!i2503[3]
  var i2505 = i2503[4]
  var i2504 = []
  for(var i = 0; i < i2505.length; i += 1) {
    i2504.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2505[i + 0]) );
  }
  i2502.conditions = i2504
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2509 = data
  i2508.defaultBool = !!i2509[0]
  i2508.defaultFloat = i2509[1]
  i2508.defaultInt = i2509[2]
  i2508.name = i2509[3]
  i2508.nameHash = i2509[4]
  i2508.type = i2509[5]
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2511 = data
  i2510.name = i2511[0]
  i2510.bytes64 = i2511[1]
  i2510.data = i2511[2]
  return i2510
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2512 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2513 = data
  i2512.hashCode = i2513[0]
  request.r(i2513[1], i2513[2], 0, i2512, 'material')
  i2512.materialHashCode = i2513[3]
  request.r(i2513[4], i2513[5], 0, i2512, 'atlas')
  i2512.normalStyle = i2513[6]
  i2512.normalSpacingOffset = i2513[7]
  i2512.boldStyle = i2513[8]
  i2512.boldSpacing = i2513[9]
  i2512.italicStyle = i2513[10]
  i2512.tabSize = i2513[11]
  i2512.m_Version = i2513[12]
  i2512.m_SourceFontFileGUID = i2513[13]
  request.r(i2513[14], i2513[15], 0, i2512, 'm_SourceFontFile_EditorRef')
  request.r(i2513[16], i2513[17], 0, i2512, 'm_SourceFontFile')
  i2512.m_AtlasPopulationMode = i2513[18]
  i2512.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2513[19], i2512.m_FaceInfo)
  var i2515 = i2513[20]
  var i2514 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.add(request.d('UnityEngine.TextCore.Glyph', i2515[i + 0]));
  }
  i2512.m_GlyphTable = i2514
  var i2517 = i2513[21]
  var i2516 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2517.length; i += 1) {
    i2516.add(request.d('TMPro.TMP_Character', i2517[i + 0]));
  }
  i2512.m_CharacterTable = i2516
  var i2519 = i2513[22]
  var i2518 = []
  for(var i = 0; i < i2519.length; i += 2) {
  request.r(i2519[i + 0], i2519[i + 1], 2, i2518, '')
  }
  i2512.m_AtlasTextures = i2518
  i2512.m_AtlasTextureIndex = i2513[23]
  i2512.m_IsMultiAtlasTexturesEnabled = !!i2513[24]
  i2512.m_ClearDynamicDataOnBuild = !!i2513[25]
  var i2521 = i2513[26]
  var i2520 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.add(request.d('UnityEngine.TextCore.GlyphRect', i2521[i + 0]));
  }
  i2512.m_UsedGlyphRects = i2520
  var i2523 = i2513[27]
  var i2522 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.add(request.d('UnityEngine.TextCore.GlyphRect', i2523[i + 0]));
  }
  i2512.m_FreeGlyphRects = i2522
  i2512.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2513[28], i2512.m_fontInfo)
  i2512.m_AtlasWidth = i2513[29]
  i2512.m_AtlasHeight = i2513[30]
  i2512.m_AtlasPadding = i2513[31]
  i2512.m_AtlasRenderMode = i2513[32]
  var i2525 = i2513[33]
  var i2524 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.add(request.d('TMPro.TMP_Glyph', i2525[i + 0]));
  }
  i2512.m_glyphInfoList = i2524
  i2512.m_KerningTable = request.d('TMPro.KerningTable', i2513[34], i2512.m_KerningTable)
  i2512.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2513[35], i2512.m_FontFeatureTable)
  var i2527 = i2513[36]
  var i2526 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2527.length; i += 2) {
  request.r(i2527[i + 0], i2527[i + 1], 1, i2526, '')
  }
  i2512.fallbackFontAssets = i2526
  var i2529 = i2513[37]
  var i2528 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2529.length; i += 2) {
  request.r(i2529[i + 0], i2529[i + 1], 1, i2528, '')
  }
  i2512.m_FallbackFontAssetTable = i2528
  i2512.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2513[38], i2512.m_CreationSettings)
  var i2531 = i2513[39]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.push( request.d('TMPro.TMP_FontWeightPair', i2531[i + 0]) );
  }
  i2512.m_FontWeightTable = i2530
  var i2533 = i2513[40]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.push( request.d('TMPro.TMP_FontWeightPair', i2533[i + 0]) );
  }
  i2512.fontWeights = i2532
  return i2512
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2534 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2535 = data
  i2534.m_FaceIndex = i2535[0]
  i2534.m_FamilyName = i2535[1]
  i2534.m_StyleName = i2535[2]
  i2534.m_PointSize = i2535[3]
  i2534.m_Scale = i2535[4]
  i2534.m_UnitsPerEM = i2535[5]
  i2534.m_LineHeight = i2535[6]
  i2534.m_AscentLine = i2535[7]
  i2534.m_CapLine = i2535[8]
  i2534.m_MeanLine = i2535[9]
  i2534.m_Baseline = i2535[10]
  i2534.m_DescentLine = i2535[11]
  i2534.m_SuperscriptOffset = i2535[12]
  i2534.m_SuperscriptSize = i2535[13]
  i2534.m_SubscriptOffset = i2535[14]
  i2534.m_SubscriptSize = i2535[15]
  i2534.m_UnderlineOffset = i2535[16]
  i2534.m_UnderlineThickness = i2535[17]
  i2534.m_StrikethroughOffset = i2535[18]
  i2534.m_StrikethroughThickness = i2535[19]
  i2534.m_TabWidth = i2535[20]
  return i2534
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2538 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2539 = data
  i2538.m_Index = i2539[0]
  i2538.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2539[1], i2538.m_Metrics)
  i2538.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2539[2], i2538.m_GlyphRect)
  i2538.m_Scale = i2539[3]
  i2538.m_AtlasIndex = i2539[4]
  i2538.m_ClassDefinitionType = i2539[5]
  return i2538
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2540 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2541 = data
  i2540.m_Width = i2541[0]
  i2540.m_Height = i2541[1]
  i2540.m_HorizontalBearingX = i2541[2]
  i2540.m_HorizontalBearingY = i2541[3]
  i2540.m_HorizontalAdvance = i2541[4]
  return i2540
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2542 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2543 = data
  i2542.m_X = i2543[0]
  i2542.m_Y = i2543[1]
  i2542.m_Width = i2543[2]
  i2542.m_Height = i2543[3]
  return i2542
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2546 = root || request.c( 'TMPro.TMP_Character' )
  var i2547 = data
  i2546.m_ElementType = i2547[0]
  i2546.m_Unicode = i2547[1]
  i2546.m_GlyphIndex = i2547[2]
  i2546.m_Scale = i2547[3]
  return i2546
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2552 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2553 = data
  i2552.Name = i2553[0]
  i2552.PointSize = i2553[1]
  i2552.Scale = i2553[2]
  i2552.CharacterCount = i2553[3]
  i2552.LineHeight = i2553[4]
  i2552.Baseline = i2553[5]
  i2552.Ascender = i2553[6]
  i2552.CapHeight = i2553[7]
  i2552.Descender = i2553[8]
  i2552.CenterLine = i2553[9]
  i2552.SuperscriptOffset = i2553[10]
  i2552.SubscriptOffset = i2553[11]
  i2552.SubSize = i2553[12]
  i2552.Underline = i2553[13]
  i2552.UnderlineThickness = i2553[14]
  i2552.strikethrough = i2553[15]
  i2552.strikethroughThickness = i2553[16]
  i2552.TabWidth = i2553[17]
  i2552.Padding = i2553[18]
  i2552.AtlasWidth = i2553[19]
  i2552.AtlasHeight = i2553[20]
  return i2552
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2556 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2557 = data
  i2556.id = i2557[0]
  i2556.x = i2557[1]
  i2556.y = i2557[2]
  i2556.width = i2557[3]
  i2556.height = i2557[4]
  i2556.xOffset = i2557[5]
  i2556.yOffset = i2557[6]
  i2556.xAdvance = i2557[7]
  i2556.scale = i2557[8]
  return i2556
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2558 = root || request.c( 'TMPro.KerningTable' )
  var i2559 = data
  var i2561 = i2559[0]
  var i2560 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.add(request.d('TMPro.KerningPair', i2561[i + 0]));
  }
  i2558.kerningPairs = i2560
  return i2558
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2564 = root || request.c( 'TMPro.KerningPair' )
  var i2565 = data
  i2564.xOffset = i2565[0]
  i2564.m_FirstGlyph = i2565[1]
  i2564.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2565[2], i2564.m_FirstGlyphAdjustments)
  i2564.m_SecondGlyph = i2565[3]
  i2564.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2565[4], i2564.m_SecondGlyphAdjustments)
  i2564.m_IgnoreSpacingAdjustments = !!i2565[5]
  return i2564
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2566 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2567 = data
  var i2569 = i2567[0]
  var i2568 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2569.length; i += 1) {
    i2568.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2569[i + 0]));
  }
  i2566.m_GlyphPairAdjustmentRecords = i2568
  return i2566
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2572 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2573 = data
  i2572.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2573[0], i2572.m_FirstAdjustmentRecord)
  i2572.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2573[1], i2572.m_SecondAdjustmentRecord)
  i2572.m_FeatureLookupFlags = i2573[2]
  return i2572
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2574 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2575 = data
  i2574.m_GlyphIndex = i2575[0]
  i2574.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2575[1], i2574.m_GlyphValueRecord)
  return i2574
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2576 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2577 = data
  i2576.m_XPlacement = i2577[0]
  i2576.m_YPlacement = i2577[1]
  i2576.m_XAdvance = i2577[2]
  i2576.m_YAdvance = i2577[3]
  return i2576
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2580 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2581 = data
  i2580.sourceFontFileName = i2581[0]
  i2580.sourceFontFileGUID = i2581[1]
  i2580.pointSizeSamplingMode = i2581[2]
  i2580.pointSize = i2581[3]
  i2580.padding = i2581[4]
  i2580.packingMode = i2581[5]
  i2580.atlasWidth = i2581[6]
  i2580.atlasHeight = i2581[7]
  i2580.characterSetSelectionMode = i2581[8]
  i2580.characterSequence = i2581[9]
  i2580.referencedFontAssetGUID = i2581[10]
  i2580.referencedTextAssetGUID = i2581[11]
  i2580.fontStyle = i2581[12]
  i2580.fontStyleModifier = i2581[13]
  i2580.renderMode = i2581[14]
  i2580.includeFontFeatures = !!i2581[15]
  return i2580
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2584 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2585 = data
  request.r(i2585[0], i2585[1], 0, i2584, 'regularTypeface')
  request.r(i2585[2], i2585[3], 0, i2584, 'italicTypeface')
  return i2584
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2586 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2587 = data
  i2586.useSafeMode = !!i2587[0]
  i2586.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2587[1], i2586.safeModeOptions)
  i2586.timeScale = i2587[2]
  i2586.unscaledTimeScale = i2587[3]
  i2586.useSmoothDeltaTime = !!i2587[4]
  i2586.maxSmoothUnscaledTime = i2587[5]
  i2586.rewindCallbackMode = i2587[6]
  i2586.showUnityEditorReport = !!i2587[7]
  i2586.logBehaviour = i2587[8]
  i2586.drawGizmos = !!i2587[9]
  i2586.defaultRecyclable = !!i2587[10]
  i2586.defaultAutoPlay = i2587[11]
  i2586.defaultUpdateType = i2587[12]
  i2586.defaultTimeScaleIndependent = !!i2587[13]
  i2586.defaultEaseType = i2587[14]
  i2586.defaultEaseOvershootOrAmplitude = i2587[15]
  i2586.defaultEasePeriod = i2587[16]
  i2586.defaultAutoKill = !!i2587[17]
  i2586.defaultLoopType = i2587[18]
  i2586.debugMode = !!i2587[19]
  i2586.debugStoreTargetId = !!i2587[20]
  i2586.showPreviewPanel = !!i2587[21]
  i2586.storeSettingsLocation = i2587[22]
  i2586.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2587[23], i2586.modules)
  i2586.createASMDEF = !!i2587[24]
  i2586.showPlayingTweens = !!i2587[25]
  i2586.showPausedTweens = !!i2587[26]
  return i2586
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2588 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2589 = data
  i2588.logBehaviour = i2589[0]
  i2588.nestedTweenFailureBehaviour = i2589[1]
  return i2588
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2590 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2591 = data
  i2590.showPanel = !!i2591[0]
  i2590.audioEnabled = !!i2591[1]
  i2590.physicsEnabled = !!i2591[2]
  i2590.physics2DEnabled = !!i2591[3]
  i2590.spriteEnabled = !!i2591[4]
  i2590.uiEnabled = !!i2591[5]
  i2590.textMeshProEnabled = !!i2591[6]
  i2590.tk2DEnabled = !!i2591[7]
  i2590.deAudioEnabled = !!i2591[8]
  i2590.deUnityExtendedEnabled = !!i2591[9]
  i2590.epoOutlineEnabled = !!i2591[10]
  return i2590
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2592 = root || request.c( 'TMPro.TMP_Settings' )
  var i2593 = data
  i2592.m_enableWordWrapping = !!i2593[0]
  i2592.m_enableKerning = !!i2593[1]
  i2592.m_enableExtraPadding = !!i2593[2]
  i2592.m_enableTintAllSprites = !!i2593[3]
  i2592.m_enableParseEscapeCharacters = !!i2593[4]
  i2592.m_EnableRaycastTarget = !!i2593[5]
  i2592.m_GetFontFeaturesAtRuntime = !!i2593[6]
  i2592.m_missingGlyphCharacter = i2593[7]
  i2592.m_warningsDisabled = !!i2593[8]
  request.r(i2593[9], i2593[10], 0, i2592, 'm_defaultFontAsset')
  i2592.m_defaultFontAssetPath = i2593[11]
  i2592.m_defaultFontSize = i2593[12]
  i2592.m_defaultAutoSizeMinRatio = i2593[13]
  i2592.m_defaultAutoSizeMaxRatio = i2593[14]
  i2592.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2593[15], i2593[16] )
  i2592.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2593[17], i2593[18] )
  i2592.m_autoSizeTextContainer = !!i2593[19]
  i2592.m_IsTextObjectScaleStatic = !!i2593[20]
  var i2595 = i2593[21]
  var i2594 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2595.length; i += 2) {
  request.r(i2595[i + 0], i2595[i + 1], 1, i2594, '')
  }
  i2592.m_fallbackFontAssets = i2594
  i2592.m_matchMaterialPreset = !!i2593[22]
  request.r(i2593[23], i2593[24], 0, i2592, 'm_defaultSpriteAsset')
  i2592.m_defaultSpriteAssetPath = i2593[25]
  i2592.m_enableEmojiSupport = !!i2593[26]
  i2592.m_MissingCharacterSpriteUnicode = i2593[27]
  i2592.m_defaultColorGradientPresetsPath = i2593[28]
  request.r(i2593[29], i2593[30], 0, i2592, 'm_defaultStyleSheet')
  i2592.m_StyleSheetsResourcePath = i2593[31]
  request.r(i2593[32], i2593[33], 0, i2592, 'm_leadingCharacters')
  request.r(i2593[34], i2593[35], 0, i2592, 'm_followingCharacters')
  i2592.m_UseModernHangulLineBreakingRules = !!i2593[36]
  return i2592
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2596 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2597 = data
  i2596.hashCode = i2597[0]
  request.r(i2597[1], i2597[2], 0, i2596, 'material')
  i2596.materialHashCode = i2597[3]
  request.r(i2597[4], i2597[5], 0, i2596, 'spriteSheet')
  var i2599 = i2597[6]
  var i2598 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.add(request.d('TMPro.TMP_Sprite', i2599[i + 0]));
  }
  i2596.spriteInfoList = i2598
  var i2601 = i2597[7]
  var i2600 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2601.length; i += 2) {
  request.r(i2601[i + 0], i2601[i + 1], 1, i2600, '')
  }
  i2596.fallbackSpriteAssets = i2600
  i2596.m_Version = i2597[8]
  i2596.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2597[9], i2596.m_FaceInfo)
  var i2603 = i2597[10]
  var i2602 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.add(request.d('TMPro.TMP_SpriteCharacter', i2603[i + 0]));
  }
  i2596.m_SpriteCharacterTable = i2602
  var i2605 = i2597[11]
  var i2604 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.add(request.d('TMPro.TMP_SpriteGlyph', i2605[i + 0]));
  }
  i2596.m_SpriteGlyphTable = i2604
  return i2596
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2608 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2609 = data
  i2608.name = i2609[0]
  i2608.hashCode = i2609[1]
  i2608.unicode = i2609[2]
  i2608.pivot = new pc.Vec2( i2609[3], i2609[4] )
  request.r(i2609[5], i2609[6], 0, i2608, 'sprite')
  i2608.id = i2609[7]
  i2608.x = i2609[8]
  i2608.y = i2609[9]
  i2608.width = i2609[10]
  i2608.height = i2609[11]
  i2608.xOffset = i2609[12]
  i2608.yOffset = i2609[13]
  i2608.xAdvance = i2609[14]
  i2608.scale = i2609[15]
  return i2608
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2614 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2615 = data
  i2614.m_Name = i2615[0]
  i2614.m_HashCode = i2615[1]
  i2614.m_ElementType = i2615[2]
  i2614.m_Unicode = i2615[3]
  i2614.m_GlyphIndex = i2615[4]
  i2614.m_Scale = i2615[5]
  return i2614
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2618 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2619 = data
  request.r(i2619[0], i2619[1], 0, i2618, 'sprite')
  i2618.m_Index = i2619[2]
  i2618.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2619[3], i2618.m_Metrics)
  i2618.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2619[4], i2618.m_GlyphRect)
  i2618.m_Scale = i2619[5]
  i2618.m_AtlasIndex = i2619[6]
  i2618.m_ClassDefinitionType = i2619[7]
  return i2618
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2620 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2621 = data
  var i2623 = i2621[0]
  var i2622 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2623.length; i += 1) {
    i2622.add(request.d('TMPro.TMP_Style', i2623[i + 0]));
  }
  i2620.m_StyleList = i2622
  return i2620
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2626 = root || request.c( 'TMPro.TMP_Style' )
  var i2627 = data
  i2626.m_Name = i2627[0]
  i2626.m_HashCode = i2627[1]
  i2626.m_OpeningDefinition = i2627[2]
  i2626.m_ClosingDefinition = i2627[3]
  i2626.m_OpeningTagArray = i2627[4]
  i2626.m_ClosingTagArray = i2627[5]
  i2626.m_OpeningTagUnicodeArray = i2627[6]
  i2626.m_ClosingTagUnicodeArray = i2627[7]
  return i2626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2629 = data
  var i2631 = i2629[0]
  var i2630 = []
  for(var i = 0; i < i2631.length; i += 1) {
    i2630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2631[i + 0]) );
  }
  i2628.files = i2630
  i2628.componentToPrefabIds = i2629[1]
  return i2628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2635 = data
  i2634.path = i2635[0]
  request.r(i2635[1], i2635[2], 0, i2634, 'unityObject')
  return i2634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2637 = data
  var i2639 = i2637[0]
  var i2638 = []
  for(var i = 0; i < i2639.length; i += 1) {
    i2638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2639[i + 0]) );
  }
  i2636.scriptsExecutionOrder = i2638
  var i2641 = i2637[1]
  var i2640 = []
  for(var i = 0; i < i2641.length; i += 1) {
    i2640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2641[i + 0]) );
  }
  i2636.sortingLayers = i2640
  var i2643 = i2637[2]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2643[i + 0]) );
  }
  i2636.cullingLayers = i2642
  i2636.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2637[3], i2636.timeSettings)
  i2636.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2637[4], i2636.physicsSettings)
  i2636.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2637[5], i2636.physics2DSettings)
  i2636.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2637[6], i2636.qualitySettings)
  i2636.enableRealtimeShadows = !!i2637[7]
  i2636.enableAutoInstancing = !!i2637[8]
  i2636.enableDynamicBatching = !!i2637[9]
  i2636.lightmapEncodingQuality = i2637[10]
  i2636.desiredColorSpace = i2637[11]
  var i2645 = i2637[12]
  var i2644 = []
  for(var i = 0; i < i2645.length; i += 1) {
    i2644.push( i2645[i + 0] );
  }
  i2636.allTags = i2644
  return i2636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2649 = data
  i2648.name = i2649[0]
  i2648.value = i2649[1]
  return i2648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2653 = data
  i2652.id = i2653[0]
  i2652.name = i2653[1]
  i2652.value = i2653[2]
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2657 = data
  i2656.id = i2657[0]
  i2656.name = i2657[1]
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2659 = data
  i2658.fixedDeltaTime = i2659[0]
  i2658.maximumDeltaTime = i2659[1]
  i2658.timeScale = i2659[2]
  i2658.maximumParticleTimestep = i2659[3]
  return i2658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2661 = data
  i2660.gravity = new pc.Vec3( i2661[0], i2661[1], i2661[2] )
  i2660.defaultSolverIterations = i2661[3]
  i2660.bounceThreshold = i2661[4]
  i2660.autoSyncTransforms = !!i2661[5]
  i2660.autoSimulation = !!i2661[6]
  var i2663 = i2661[7]
  var i2662 = []
  for(var i = 0; i < i2663.length; i += 1) {
    i2662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2663[i + 0]) );
  }
  i2660.collisionMatrix = i2662
  return i2660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2667 = data
  i2666.enabled = !!i2667[0]
  i2666.layerId = i2667[1]
  i2666.otherLayerId = i2667[2]
  return i2666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2669 = data
  request.r(i2669[0], i2669[1], 0, i2668, 'material')
  i2668.gravity = new pc.Vec2( i2669[2], i2669[3] )
  i2668.positionIterations = i2669[4]
  i2668.velocityIterations = i2669[5]
  i2668.velocityThreshold = i2669[6]
  i2668.maxLinearCorrection = i2669[7]
  i2668.maxAngularCorrection = i2669[8]
  i2668.maxTranslationSpeed = i2669[9]
  i2668.maxRotationSpeed = i2669[10]
  i2668.baumgarteScale = i2669[11]
  i2668.baumgarteTOIScale = i2669[12]
  i2668.timeToSleep = i2669[13]
  i2668.linearSleepTolerance = i2669[14]
  i2668.angularSleepTolerance = i2669[15]
  i2668.defaultContactOffset = i2669[16]
  i2668.autoSimulation = !!i2669[17]
  i2668.queriesHitTriggers = !!i2669[18]
  i2668.queriesStartInColliders = !!i2669[19]
  i2668.callbacksOnDisable = !!i2669[20]
  i2668.reuseCollisionCallbacks = !!i2669[21]
  i2668.autoSyncTransforms = !!i2669[22]
  var i2671 = i2669[23]
  var i2670 = []
  for(var i = 0; i < i2671.length; i += 1) {
    i2670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2671[i + 0]) );
  }
  i2668.collisionMatrix = i2670
  return i2668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2675 = data
  i2674.enabled = !!i2675[0]
  i2674.layerId = i2675[1]
  i2674.otherLayerId = i2675[2]
  return i2674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2677 = data
  var i2679 = i2677[0]
  var i2678 = []
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2679[i + 0]) );
  }
  i2676.qualityLevels = i2678
  var i2681 = i2677[1]
  var i2680 = []
  for(var i = 0; i < i2681.length; i += 1) {
    i2680.push( i2681[i + 0] );
  }
  i2676.names = i2680
  i2676.shadows = i2677[2]
  i2676.anisotropicFiltering = i2677[3]
  i2676.antiAliasing = i2677[4]
  i2676.lodBias = i2677[5]
  i2676.shadowCascades = i2677[6]
  i2676.shadowDistance = i2677[7]
  i2676.shadowmaskMode = i2677[8]
  i2676.shadowProjection = i2677[9]
  i2676.shadowResolution = i2677[10]
  i2676.softParticles = !!i2677[11]
  i2676.softVegetation = !!i2677[12]
  i2676.activeColorSpace = i2677[13]
  i2676.desiredColorSpace = i2677[14]
  i2676.masterTextureLimit = i2677[15]
  i2676.maxQueuedFrames = i2677[16]
  i2676.particleRaycastBudget = i2677[17]
  i2676.pixelLightCount = i2677[18]
  i2676.realtimeReflectionProbes = !!i2677[19]
  i2676.shadowCascade2Split = i2677[20]
  i2676.shadowCascade4Split = new pc.Vec3( i2677[21], i2677[22], i2677[23] )
  i2676.streamingMipmapsActive = !!i2677[24]
  i2676.vSyncCount = i2677[25]
  i2676.asyncUploadBufferSize = i2677[26]
  i2676.asyncUploadTimeSlice = i2677[27]
  i2676.billboardsFaceCameraPosition = !!i2677[28]
  i2676.shadowNearPlaneOffset = i2677[29]
  i2676.streamingMipmapsMemoryBudget = i2677[30]
  i2676.maximumLODLevel = i2677[31]
  i2676.streamingMipmapsAddAllCameras = !!i2677[32]
  i2676.streamingMipmapsMaxLevelReduction = i2677[33]
  i2676.streamingMipmapsRenderersPerFrame = i2677[34]
  i2676.resolutionScalingFixedDPIFactor = i2677[35]
  i2676.streamingMipmapsMaxFileIORequests = i2677[36]
  i2676.currentQualityLevel = i2677[37]
  return i2676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2685 = data
  i2684.name = i2685[0]
  var i2687 = i2685[1]
  var i2686 = []
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2687[i + 0]) );
  }
  i2684.tos = i2686
  var i2689 = i2685[2]
  var i2688 = []
  for(var i = 0; i < i2689.length; i += 1) {
    i2688.push( i2689[i + 0] );
  }
  i2684.constant = i2688
  i2684.isValid = !!i2685[3]
  i2684.isHuman = !!i2685[4]
  i2684.hasRootMotion = !!i2685[5]
  return i2684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2693 = data
  i2692.hash = i2693[0]
  i2692.path = i2693[1]
  return i2692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2697 = data
  i2696.weight = i2697[0]
  i2696.vertices = i2697[1]
  i2696.normals = i2697[2]
  i2696.tangents = i2697[3]
  return i2696
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2698 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2699 = data
  i2698.xPlacement = i2699[0]
  i2698.yPlacement = i2699[1]
  i2698.xAdvance = i2699[2]
  i2698.yAdvance = i2699[3]
  return i2698
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[10],"77":[34],"78":[2],"79":[2],"80":[2],"81":[2],"82":[2],"83":[2],"84":[2],"85":[86],"87":[86],"88":[86],"89":[86],"90":[86],"91":[86],"92":[86],"93":[86],"94":[86],"95":[86],"96":[86],"97":[86],"98":[86],"99":[34],"100":[14],"101":[102],"103":[102],"42":[29],"28":[3],"104":[3],"8":[3],"16":[105],"106":[34],"107":[34],"108":[109],"110":[29],"111":[14,29],"49":[29,30],"112":[29],"113":[30,29],"114":[14],"115":[30,29],"116":[29],"117":[118],"119":[29],"120":[29],"44":[42],"32":[30,29],"121":[29],"43":[42],"47":[29],"122":[29],"46":[29],"123":[29],"124":[29],"125":[29],"126":[29],"127":[29],"128":[29],"129":[30,29],"130":[29],"131":[29],"132":[29],"133":[29],"134":[30,29],"135":[29],"136":[55],"137":[55],"56":[55],"138":[55],"139":[34],"140":[34],"141":[29],"142":[118],"143":[118]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Rigidbody","UnityEngine.CharacterController","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.MonoBehaviour","PlayerController","Player","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.Texture2D","DeathObstacleEffect","UnityEngine.BoxCollider","UnityEngine.MeshCollider","LocalRotationController","BasicPushObstacleEffect","RotaterPushObstacleEffect","UnityEngine.CapsuleCollider","ShiningObstacleEffect","UnityEngine.ParticleSystem","PatrolMovementController","UnityEngine.ParticleSystemRenderer","CoinCollectible","BotController","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Camera","UnityEngine.AudioListener","CameraFollow","FOVCalculator","SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","RankManager","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Joystick","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.ContentSizeFitter","DeathCounter","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","CoinManager","UnityEngine.GameObject","UnityEngine.UI.Button","GameManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","FinishLine","BackgroundMusic","NodeManager","AINode","UnityEngine.Cubemap","UnityEngine.AnimationClip","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CharacterBaseController","ObstacleBase","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Light","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.45f1";

Deserializers.productName = "PanteonDemo";

Deserializers.lunaInitializationTime = "11/07/2024 13:58:49";

Deserializers.lunaDaysRunning = "3.5";

Deserializers.lunaVersion = "6.2.0";

Deserializers.lunaSHA = "7963e9fed253d218ae1c5298f104efd7e457ea14";

Deserializers.creativeName = "Second";

Deserializers.lunaAppID = "25575";

Deserializers.projectId = "183a878df3c572c46b908bc772bb8712";

Deserializers.packagesInfo = "com.unity.render-pipelines.universal: 12.1.15\ncom.unity.textmeshpro: 3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1550";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4819";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.PanteonDemo";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "c8200e23-31ee-437e-96d7-f1282bd155b6";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Rendering","Universal","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

