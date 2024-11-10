var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2076 = root || request.c( 'UnityEngine.JointSpring' )
  var i2077 = data
  i2076.spring = i2077[0]
  i2076.damper = i2077[1]
  i2076.targetPosition = i2077[2]
  return i2076
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2078 = root || request.c( 'UnityEngine.JointMotor' )
  var i2079 = data
  i2078.m_TargetVelocity = i2079[0]
  i2078.m_Force = i2079[1]
  i2078.m_FreeSpin = i2079[2]
  return i2078
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2080 = root || request.c( 'UnityEngine.JointLimits' )
  var i2081 = data
  i2080.m_Min = i2081[0]
  i2080.m_Max = i2081[1]
  i2080.m_Bounciness = i2081[2]
  i2080.m_BounceMinVelocity = i2081[3]
  i2080.m_ContactDistance = i2081[4]
  i2080.minBounce = i2081[5]
  i2080.maxBounce = i2081[6]
  return i2080
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2082 = root || request.c( 'UnityEngine.JointDrive' )
  var i2083 = data
  i2082.m_PositionSpring = i2083[0]
  i2082.m_PositionDamper = i2083[1]
  i2082.m_MaximumForce = i2083[2]
  return i2082
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2084 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2085 = data
  i2084.m_Spring = i2085[0]
  i2084.m_Damper = i2085[1]
  return i2084
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2086 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2087 = data
  i2086.m_Limit = i2087[0]
  i2086.m_Bounciness = i2087[1]
  i2086.m_ContactDistance = i2087[2]
  return i2086
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2088 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2089 = data
  i2088.m_ExtremumSlip = i2089[0]
  i2088.m_ExtremumValue = i2089[1]
  i2088.m_AsymptoteSlip = i2089[2]
  i2088.m_AsymptoteValue = i2089[3]
  i2088.m_Stiffness = i2089[4]
  return i2088
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2090 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2091 = data
  i2090.m_LowerAngle = i2091[0]
  i2090.m_UpperAngle = i2091[1]
  return i2090
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2092 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2093 = data
  i2092.m_MotorSpeed = i2093[0]
  i2092.m_MaximumMotorTorque = i2093[1]
  return i2092
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2094 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2095 = data
  i2094.m_DampingRatio = i2095[0]
  i2094.m_Frequency = i2095[1]
  i2094.m_Angle = i2095[2]
  return i2094
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2096 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2097 = data
  i2096.m_LowerTranslation = i2097[0]
  i2096.m_UpperTranslation = i2097[1]
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2099 = data
  i2098.position = new pc.Vec3( i2099[0], i2099[1], i2099[2] )
  i2098.scale = new pc.Vec3( i2099[3], i2099[4], i2099[5] )
  i2098.rotation = new pc.Quat(i2099[6], i2099[7], i2099[8], i2099[9])
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2101 = data
  i2100.mass = i2101[0]
  i2100.drag = i2101[1]
  i2100.angularDrag = i2101[2]
  i2100.useGravity = !!i2101[3]
  i2100.isKinematic = !!i2101[4]
  i2100.constraints = i2101[5]
  i2100.maxAngularVelocity = i2101[6]
  i2100.collisionDetectionMode = i2101[7]
  i2100.interpolation = i2101[8]
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i2102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i2103 = data
  i2102.enabled = !!i2103[0]
  i2102.center = new pc.Vec3( i2103[1], i2103[2], i2103[3] )
  i2102.radius = i2103[4]
  i2102.height = i2103[5]
  i2102.minMoveDistance = i2103[6]
  i2102.skinWidth = i2103[7]
  i2102.enableOverlapRecovery = !!i2103[8]
  return i2102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2105 = data
  request.r(i2105[0], i2105[1], 0, i2104, 'animatorController')
  request.r(i2105[2], i2105[3], 0, i2104, 'avatar')
  i2104.updateMode = i2105[4]
  i2104.hasTransformHierarchy = !!i2105[5]
  i2104.applyRootMotion = !!i2105[6]
  var i2107 = i2105[7]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 2) {
  request.r(i2107[i + 0], i2107[i + 1], 2, i2106, '')
  }
  i2104.humanBones = i2106
  i2104.enabled = !!i2105[8]
  return i2104
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i2110 = root || request.c( 'PlayerController' )
  var i2111 = data
  request.r(i2111[0], i2111[1], 0, i2110, '_animator')
  i2110.moveDirection = new pc.Vec3( i2111[2], i2111[3], i2111[4] )
  i2110._hasAnimator = !!i2111[5]
  i2110._animIDSpeed = i2111[6]
  i2110._animIDMotionSpeed = i2111[7]
  i2110._animIEnd = i2111[8]
  i2110.MoveSpeed = i2111[9]
  i2110.SpeedChangeRate = i2111[10]
  i2110.RotationSmoothTime = i2111[11]
  i2110.gravity = i2111[12]
  i2110.fallThreshold = i2111[13]
  i2110.pushForceDecayRate = i2111[14]
  return i2110
}

Deserializers["Player"] = function (request, data, root) {
  var i2112 = root || request.c( 'Player' )
  var i2113 = data
  request.r(i2113[0], i2113[1], 0, i2112, 'playerEndTransform')
  request.r(i2113[2], i2113[3], 0, i2112, 'playerGameCompleteTransform')
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2115 = data
  i2114.enabled = !!i2115[0]
  request.r(i2115[1], i2115[2], 0, i2114, 'sharedMaterial')
  var i2117 = i2115[3]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 2) {
  request.r(i2117[i + 0], i2117[i + 1], 2, i2116, '')
  }
  i2114.sharedMaterials = i2116
  i2114.receiveShadows = !!i2115[4]
  i2114.shadowCastingMode = i2115[5]
  i2114.sortingLayerID = i2115[6]
  i2114.sortingOrder = i2115[7]
  i2114.lightmapIndex = i2115[8]
  i2114.lightmapSceneIndex = i2115[9]
  i2114.lightmapScaleOffset = new pc.Vec4( i2115[10], i2115[11], i2115[12], i2115[13] )
  i2114.lightProbeUsage = i2115[14]
  i2114.reflectionProbeUsage = i2115[15]
  request.r(i2115[16], i2115[17], 0, i2114, 'sharedMesh')
  var i2119 = i2115[18]
  var i2118 = []
  for(var i = 0; i < i2119.length; i += 2) {
  request.r(i2119[i + 0], i2119[i + 1], 2, i2118, '')
  }
  i2114.bones = i2118
  i2114.updateWhenOffscreen = !!i2115[19]
  i2114.localBounds = i2115[20]
  request.r(i2115[21], i2115[22], 0, i2114, 'rootBone')
  var i2121 = i2115[23]
  var i2120 = []
  for(var i = 0; i < i2121.length; i += 1) {
    i2120.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2121[i + 0]) );
  }
  i2114.blendShapesWeights = i2120
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2127 = data
  i2126.weight = i2127[0]
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2129 = data
  i2128.name = i2129[0]
  i2128.tagId = i2129[1]
  i2128.enabled = !!i2129[2]
  i2128.isStatic = !!i2129[3]
  i2128.layer = i2129[4]
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2131 = data
  request.r(i2131[0], i2131[1], 0, i2130, 'sharedMesh')
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2133 = data
  request.r(i2133[0], i2133[1], 0, i2132, 'additionalVertexStreams')
  i2132.enabled = !!i2133[2]
  request.r(i2133[3], i2133[4], 0, i2132, 'sharedMaterial')
  var i2135 = i2133[5]
  var i2134 = []
  for(var i = 0; i < i2135.length; i += 2) {
  request.r(i2135[i + 0], i2135[i + 1], 2, i2134, '')
  }
  i2132.sharedMaterials = i2134
  i2132.receiveShadows = !!i2133[6]
  i2132.shadowCastingMode = i2133[7]
  i2132.sortingLayerID = i2133[8]
  i2132.sortingOrder = i2133[9]
  i2132.lightmapIndex = i2133[10]
  i2132.lightmapSceneIndex = i2133[11]
  i2132.lightmapScaleOffset = new pc.Vec4( i2133[12], i2133[13], i2133[14], i2133[15] )
  i2132.lightProbeUsage = i2133[16]
  i2132.reflectionProbeUsage = i2133[17]
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2136 = root || new pc.UnityMaterial()
  var i2137 = data
  i2136.name = i2137[0]
  request.r(i2137[1], i2137[2], 0, i2136, 'shader')
  i2136.renderQueue = i2137[3]
  i2136.enableInstancing = !!i2137[4]
  var i2139 = i2137[5]
  var i2138 = []
  for(var i = 0; i < i2139.length; i += 1) {
    i2138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2139[i + 0]) );
  }
  i2136.floatParameters = i2138
  var i2141 = i2137[6]
  var i2140 = []
  for(var i = 0; i < i2141.length; i += 1) {
    i2140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2141[i + 0]) );
  }
  i2136.colorParameters = i2140
  var i2143 = i2137[7]
  var i2142 = []
  for(var i = 0; i < i2143.length; i += 1) {
    i2142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2143[i + 0]) );
  }
  i2136.vectorParameters = i2142
  var i2145 = i2137[8]
  var i2144 = []
  for(var i = 0; i < i2145.length; i += 1) {
    i2144.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2145[i + 0]) );
  }
  i2136.textureParameters = i2144
  var i2147 = i2137[9]
  var i2146 = []
  for(var i = 0; i < i2147.length; i += 1) {
    i2146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2147[i + 0]) );
  }
  i2136.materialFlags = i2146
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2151 = data
  i2150.name = i2151[0]
  i2150.value = i2151[1]
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2155 = data
  i2154.name = i2155[0]
  i2154.value = new pc.Color(i2155[1], i2155[2], i2155[3], i2155[4])
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2159 = data
  i2158.name = i2159[0]
  i2158.value = new pc.Vec4( i2159[1], i2159[2], i2159[3], i2159[4] )
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2163 = data
  i2162.name = i2163[0]
  request.r(i2163[1], i2163[2], 0, i2162, 'value')
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2167 = data
  i2166.name = i2167[0]
  i2166.enabled = !!i2167[1]
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2169 = data
  i2168.name = i2169[0]
  i2168.width = i2169[1]
  i2168.height = i2169[2]
  i2168.mipmapCount = i2169[3]
  i2168.anisoLevel = i2169[4]
  i2168.filterMode = i2169[5]
  i2168.hdr = !!i2169[6]
  i2168.format = i2169[7]
  i2168.wrapMode = i2169[8]
  i2168.alphaIsTransparency = !!i2169[9]
  i2168.alphaSource = i2169[10]
  i2168.graphicsFormat = i2169[11]
  i2168.sRGBTexture = !!i2169[12]
  i2168.desiredColorSpace = i2169[13]
  i2168.wrapU = i2169[14]
  i2168.wrapV = i2169[15]
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2171 = data
  i2170.name = i2171[0]
  i2170.halfPrecision = !!i2171[1]
  i2170.useUInt32IndexFormat = !!i2171[2]
  i2170.vertexCount = i2171[3]
  i2170.aabb = i2171[4]
  var i2173 = i2171[5]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( !!i2173[i + 0] );
  }
  i2170.streams = i2172
  i2170.vertices = i2171[6]
  var i2175 = i2171[7]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2175[i + 0]) );
  }
  i2170.subMeshes = i2174
  var i2177 = i2171[8]
  var i2176 = []
  for(var i = 0; i < i2177.length; i += 16) {
    i2176.push( new pc.Mat4().setData(i2177[i + 0], i2177[i + 1], i2177[i + 2], i2177[i + 3],  i2177[i + 4], i2177[i + 5], i2177[i + 6], i2177[i + 7],  i2177[i + 8], i2177[i + 9], i2177[i + 10], i2177[i + 11],  i2177[i + 12], i2177[i + 13], i2177[i + 14], i2177[i + 15]) );
  }
  i2170.bindposes = i2176
  var i2179 = i2171[9]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2179[i + 0]) );
  }
  i2170.blendShapes = i2178
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2185 = data
  i2184.triangles = i2185[0]
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2191 = data
  i2190.name = i2191[0]
  var i2193 = i2191[1]
  var i2192 = []
  for(var i = 0; i < i2193.length; i += 1) {
    i2192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2193[i + 0]) );
  }
  i2190.frames = i2192
  return i2190
}

Deserializers["DeathObstacleEffect"] = function (request, data, root) {
  var i2194 = root || request.c( 'DeathObstacleEffect' )
  var i2195 = data
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2197 = data
  i2196.center = new pc.Vec3( i2197[0], i2197[1], i2197[2] )
  i2196.size = new pc.Vec3( i2197[3], i2197[4], i2197[5] )
  i2196.enabled = !!i2197[6]
  i2196.isTrigger = !!i2197[7]
  request.r(i2197[8], i2197[9], 0, i2196, 'material')
  return i2196
}

Deserializers["LocalRotationController"] = function (request, data, root) {
  var i2198 = root || request.c( 'LocalRotationController' )
  var i2199 = data
  i2198.rotationSpeed = new pc.Vec3( i2199[0], i2199[1], i2199[2] )
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2201 = data
  i2200.enabled = !!i2201[0]
  i2200.isTrigger = !!i2201[1]
  request.r(i2201[2], i2201[3], 0, i2200, 'material')
  request.r(i2201[4], i2201[5], 0, i2200, 'sharedMesh')
  i2200.convex = !!i2201[6]
  return i2200
}

Deserializers["BasicPushObstacleEffect"] = function (request, data, root) {
  var i2202 = root || request.c( 'BasicPushObstacleEffect' )
  var i2203 = data
  i2202.pushVector = new pc.Vec3( i2203[0], i2203[1], i2203[2] )
  return i2202
}

Deserializers["RotaterPushObstacleEffect"] = function (request, data, root) {
  var i2204 = root || request.c( 'RotaterPushObstacleEffect' )
  var i2205 = data
  i2204.pushForce = i2205[0]
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2207 = data
  i2206.center = new pc.Vec3( i2207[0], i2207[1], i2207[2] )
  i2206.radius = i2207[3]
  i2206.height = i2207[4]
  i2206.direction = i2207[5]
  i2206.enabled = !!i2207[6]
  i2206.isTrigger = !!i2207[7]
  request.r(i2207[8], i2207[9], 0, i2206, 'material')
  return i2206
}

Deserializers["ShiningObstacleEffect"] = function (request, data, root) {
  var i2208 = root || request.c( 'ShiningObstacleEffect' )
  var i2209 = data
  i2208.pushForce = i2209[0]
  request.r(i2209[1], i2209[2], 0, i2208, 'shineParticle')
  return i2208
}

Deserializers["PatrolMovementController"] = function (request, data, root) {
  var i2210 = root || request.c( 'PatrolMovementController' )
  var i2211 = data
  i2210.movementSpeed = new pc.Vec3( i2211[0], i2211[1], i2211[2] )
  i2210.minX = i2211[3]
  i2210.maxX = i2211[4]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2213 = data
  i2212.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2213[0], i2212.main)
  i2212.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2213[1], i2212.colorBySpeed)
  i2212.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2213[2], i2212.colorOverLifetime)
  i2212.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2213[3], i2212.emission)
  i2212.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2213[4], i2212.rotationBySpeed)
  i2212.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2213[5], i2212.rotationOverLifetime)
  i2212.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2213[6], i2212.shape)
  i2212.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2213[7], i2212.sizeBySpeed)
  i2212.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2213[8], i2212.sizeOverLifetime)
  i2212.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2213[9], i2212.textureSheetAnimation)
  i2212.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2213[10], i2212.velocityOverLifetime)
  i2212.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2213[11], i2212.noise)
  i2212.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2213[12], i2212.inheritVelocity)
  i2212.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2213[13], i2212.forceOverLifetime)
  i2212.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2213[14], i2212.limitVelocityOverLifetime)
  i2212.useAutoRandomSeed = !!i2213[15]
  i2212.randomSeed = i2213[16]
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2214 = root || new pc.ParticleSystemMain()
  var i2215 = data
  i2214.duration = i2215[0]
  i2214.loop = !!i2215[1]
  i2214.prewarm = !!i2215[2]
  i2214.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[3], i2214.startDelay)
  i2214.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[4], i2214.startLifetime)
  i2214.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[5], i2214.startSpeed)
  i2214.startSize3D = !!i2215[6]
  i2214.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[7], i2214.startSizeX)
  i2214.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[8], i2214.startSizeY)
  i2214.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[9], i2214.startSizeZ)
  i2214.startRotation3D = !!i2215[10]
  i2214.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[11], i2214.startRotationX)
  i2214.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[12], i2214.startRotationY)
  i2214.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[13], i2214.startRotationZ)
  i2214.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2215[14], i2214.startColor)
  i2214.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[15], i2214.gravityModifier)
  i2214.simulationSpace = i2215[16]
  request.r(i2215[17], i2215[18], 0, i2214, 'customSimulationSpace')
  i2214.simulationSpeed = i2215[19]
  i2214.useUnscaledTime = !!i2215[20]
  i2214.scalingMode = i2215[21]
  i2214.playOnAwake = !!i2215[22]
  i2214.maxParticles = i2215[23]
  i2214.emitterVelocityMode = i2215[24]
  i2214.stopAction = i2215[25]
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2216 = root || new pc.MinMaxCurve()
  var i2217 = data
  i2216.mode = i2217[0]
  i2216.curveMin = new pc.AnimationCurve( { keys_flow: i2217[1] } )
  i2216.curveMax = new pc.AnimationCurve( { keys_flow: i2217[2] } )
  i2216.curveMultiplier = i2217[3]
  i2216.constantMin = i2217[4]
  i2216.constantMax = i2217[5]
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2218 = root || new pc.MinMaxGradient()
  var i2219 = data
  i2218.mode = i2219[0]
  i2218.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2219[1], i2218.gradientMin)
  i2218.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2219[2], i2218.gradientMax)
  i2218.colorMin = new pc.Color(i2219[3], i2219[4], i2219[5], i2219[6])
  i2218.colorMax = new pc.Color(i2219[7], i2219[8], i2219[9], i2219[10])
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2221 = data
  i2220.mode = i2221[0]
  var i2223 = i2221[1]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2223[i + 0]) );
  }
  i2220.colorKeys = i2222
  var i2225 = i2221[2]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 1) {
    i2224.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2225[i + 0]) );
  }
  i2220.alphaKeys = i2224
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2226 = root || new pc.ParticleSystemColorBySpeed()
  var i2227 = data
  i2226.enabled = !!i2227[0]
  i2226.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2227[1], i2226.color)
  i2226.range = new pc.Vec2( i2227[2], i2227[3] )
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2231 = data
  i2230.color = new pc.Color(i2231[0], i2231[1], i2231[2], i2231[3])
  i2230.time = i2231[4]
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2235 = data
  i2234.alpha = i2235[0]
  i2234.time = i2235[1]
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2236 = root || new pc.ParticleSystemColorOverLifetime()
  var i2237 = data
  i2236.enabled = !!i2237[0]
  i2236.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2237[1], i2236.color)
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2238 = root || new pc.ParticleSystemEmitter()
  var i2239 = data
  i2238.enabled = !!i2239[0]
  i2238.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2239[1], i2238.rateOverTime)
  i2238.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2239[2], i2238.rateOverDistance)
  var i2241 = i2239[3]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2241[i + 0]) );
  }
  i2238.bursts = i2240
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2244 = root || new pc.ParticleSystemBurst()
  var i2245 = data
  i2244.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2245[0], i2244.count)
  i2244.cycleCount = i2245[1]
  i2244.minCount = i2245[2]
  i2244.maxCount = i2245[3]
  i2244.repeatInterval = i2245[4]
  i2244.time = i2245[5]
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2246 = root || new pc.ParticleSystemRotationBySpeed()
  var i2247 = data
  i2246.enabled = !!i2247[0]
  i2246.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2247[1], i2246.x)
  i2246.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2247[2], i2246.y)
  i2246.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2247[3], i2246.z)
  i2246.separateAxes = !!i2247[4]
  i2246.range = new pc.Vec2( i2247[5], i2247[6] )
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2248 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2249 = data
  i2248.enabled = !!i2249[0]
  i2248.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2249[1], i2248.x)
  i2248.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2249[2], i2248.y)
  i2248.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2249[3], i2248.z)
  i2248.separateAxes = !!i2249[4]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2250 = root || new pc.ParticleSystemShape()
  var i2251 = data
  i2250.enabled = !!i2251[0]
  i2250.shapeType = i2251[1]
  i2250.randomDirectionAmount = i2251[2]
  i2250.sphericalDirectionAmount = i2251[3]
  i2250.randomPositionAmount = i2251[4]
  i2250.alignToDirection = !!i2251[5]
  i2250.radius = i2251[6]
  i2250.radiusMode = i2251[7]
  i2250.radiusSpread = i2251[8]
  i2250.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2251[9], i2250.radiusSpeed)
  i2250.radiusThickness = i2251[10]
  i2250.angle = i2251[11]
  i2250.length = i2251[12]
  i2250.boxThickness = new pc.Vec3( i2251[13], i2251[14], i2251[15] )
  i2250.meshShapeType = i2251[16]
  request.r(i2251[17], i2251[18], 0, i2250, 'mesh')
  request.r(i2251[19], i2251[20], 0, i2250, 'meshRenderer')
  request.r(i2251[21], i2251[22], 0, i2250, 'skinnedMeshRenderer')
  i2250.useMeshMaterialIndex = !!i2251[23]
  i2250.meshMaterialIndex = i2251[24]
  i2250.useMeshColors = !!i2251[25]
  i2250.normalOffset = i2251[26]
  i2250.arc = i2251[27]
  i2250.arcMode = i2251[28]
  i2250.arcSpread = i2251[29]
  i2250.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2251[30], i2250.arcSpeed)
  i2250.donutRadius = i2251[31]
  i2250.position = new pc.Vec3( i2251[32], i2251[33], i2251[34] )
  i2250.rotation = new pc.Vec3( i2251[35], i2251[36], i2251[37] )
  i2250.scale = new pc.Vec3( i2251[38], i2251[39], i2251[40] )
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2252 = root || new pc.ParticleSystemSizeBySpeed()
  var i2253 = data
  i2252.enabled = !!i2253[0]
  i2252.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[1], i2252.x)
  i2252.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[2], i2252.y)
  i2252.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[3], i2252.z)
  i2252.separateAxes = !!i2253[4]
  i2252.range = new pc.Vec2( i2253[5], i2253[6] )
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2254 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2255 = data
  i2254.enabled = !!i2255[0]
  i2254.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2255[1], i2254.x)
  i2254.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2255[2], i2254.y)
  i2254.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2255[3], i2254.z)
  i2254.separateAxes = !!i2255[4]
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2256 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2257 = data
  i2256.enabled = !!i2257[0]
  i2256.mode = i2257[1]
  i2256.animation = i2257[2]
  i2256.numTilesX = i2257[3]
  i2256.numTilesY = i2257[4]
  i2256.useRandomRow = !!i2257[5]
  i2256.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[6], i2256.frameOverTime)
  i2256.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[7], i2256.startFrame)
  i2256.cycleCount = i2257[8]
  i2256.rowIndex = i2257[9]
  i2256.flipU = i2257[10]
  i2256.flipV = i2257[11]
  i2256.spriteCount = i2257[12]
  var i2259 = i2257[13]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 2) {
  request.r(i2259[i + 0], i2259[i + 1], 2, i2258, '')
  }
  i2256.sprites = i2258
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2262 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2263 = data
  i2262.enabled = !!i2263[0]
  i2262.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[1], i2262.x)
  i2262.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[2], i2262.y)
  i2262.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[3], i2262.z)
  i2262.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[4], i2262.radial)
  i2262.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[5], i2262.speedModifier)
  i2262.space = i2263[6]
  i2262.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[7], i2262.orbitalX)
  i2262.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[8], i2262.orbitalY)
  i2262.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[9], i2262.orbitalZ)
  i2262.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[10], i2262.orbitalOffsetX)
  i2262.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[11], i2262.orbitalOffsetY)
  i2262.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[12], i2262.orbitalOffsetZ)
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2264 = root || new pc.ParticleSystemNoise()
  var i2265 = data
  i2264.enabled = !!i2265[0]
  i2264.separateAxes = !!i2265[1]
  i2264.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[2], i2264.strengthX)
  i2264.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[3], i2264.strengthY)
  i2264.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[4], i2264.strengthZ)
  i2264.frequency = i2265[5]
  i2264.damping = !!i2265[6]
  i2264.octaveCount = i2265[7]
  i2264.octaveMultiplier = i2265[8]
  i2264.octaveScale = i2265[9]
  i2264.quality = i2265[10]
  i2264.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[11], i2264.scrollSpeed)
  i2264.scrollSpeedMultiplier = i2265[12]
  i2264.remapEnabled = !!i2265[13]
  i2264.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[14], i2264.remapX)
  i2264.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[15], i2264.remapY)
  i2264.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[16], i2264.remapZ)
  i2264.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[17], i2264.positionAmount)
  i2264.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[18], i2264.rotationAmount)
  i2264.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[19], i2264.sizeAmount)
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2266 = root || new pc.ParticleSystemInheritVelocity()
  var i2267 = data
  i2266.enabled = !!i2267[0]
  i2266.mode = i2267[1]
  i2266.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2267[2], i2266.curve)
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2268 = root || new pc.ParticleSystemForceOverLifetime()
  var i2269 = data
  i2268.enabled = !!i2269[0]
  i2268.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[1], i2268.x)
  i2268.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[2], i2268.y)
  i2268.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[3], i2268.z)
  i2268.space = i2269[4]
  i2268.randomized = !!i2269[5]
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2270 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2271 = data
  i2270.enabled = !!i2271[0]
  i2270.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2271[1], i2270.limit)
  i2270.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2271[2], i2270.limitX)
  i2270.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2271[3], i2270.limitY)
  i2270.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2271[4], i2270.limitZ)
  i2270.dampen = i2271[5]
  i2270.separateAxes = !!i2271[6]
  i2270.space = i2271[7]
  i2270.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2271[8], i2270.drag)
  i2270.multiplyDragByParticleSize = !!i2271[9]
  i2270.multiplyDragByParticleVelocity = !!i2271[10]
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2273 = data
  i2272.enabled = !!i2273[0]
  request.r(i2273[1], i2273[2], 0, i2272, 'sharedMaterial')
  var i2275 = i2273[3]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 2) {
  request.r(i2275[i + 0], i2275[i + 1], 2, i2274, '')
  }
  i2272.sharedMaterials = i2274
  i2272.receiveShadows = !!i2273[4]
  i2272.shadowCastingMode = i2273[5]
  i2272.sortingLayerID = i2273[6]
  i2272.sortingOrder = i2273[7]
  i2272.lightmapIndex = i2273[8]
  i2272.lightmapSceneIndex = i2273[9]
  i2272.lightmapScaleOffset = new pc.Vec4( i2273[10], i2273[11], i2273[12], i2273[13] )
  i2272.lightProbeUsage = i2273[14]
  i2272.reflectionProbeUsage = i2273[15]
  request.r(i2273[16], i2273[17], 0, i2272, 'mesh')
  i2272.meshCount = i2273[18]
  i2272.activeVertexStreamsCount = i2273[19]
  i2272.alignment = i2273[20]
  i2272.renderMode = i2273[21]
  i2272.sortMode = i2273[22]
  i2272.lengthScale = i2273[23]
  i2272.velocityScale = i2273[24]
  i2272.cameraVelocityScale = i2273[25]
  i2272.normalDirection = i2273[26]
  i2272.sortingFudge = i2273[27]
  i2272.minParticleSize = i2273[28]
  i2272.maxParticleSize = i2273[29]
  i2272.pivot = new pc.Vec3( i2273[30], i2273[31], i2273[32] )
  request.r(i2273[33], i2273[34], 0, i2272, 'trailMaterial')
  return i2272
}

Deserializers["CoinCollectible"] = function (request, data, root) {
  var i2276 = root || request.c( 'CoinCollectible' )
  var i2277 = data
  i2276.distance = i2277[0]
  i2276.moveTime = i2277[1]
  return i2276
}

Deserializers["BotController"] = function (request, data, root) {
  var i2278 = root || request.c( 'BotController' )
  var i2279 = data
  request.r(i2279[0], i2279[1], 0, i2278, '_animator')
  i2278.moveDirection = new pc.Vec3( i2279[2], i2279[3], i2279[4] )
  i2278._hasAnimator = !!i2279[5]
  i2278._animIDSpeed = i2279[6]
  i2278._animIDMotionSpeed = i2279[7]
  i2278._animIEnd = i2279[8]
  i2278.MoveSpeed = i2279[9]
  i2278.SpeedChangeRate = i2279[10]
  i2278.RotationSmoothTime = i2279[11]
  i2278.gravity = i2279[12]
  i2278.fallThreshold = i2279[13]
  i2278.pushForceDecayRate = i2279[14]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2281 = data
  i2280.pivot = new pc.Vec2( i2281[0], i2281[1] )
  i2280.anchorMin = new pc.Vec2( i2281[2], i2281[3] )
  i2280.anchorMax = new pc.Vec2( i2281[4], i2281[5] )
  i2280.sizeDelta = new pc.Vec2( i2281[6], i2281[7] )
  i2280.anchoredPosition3D = new pc.Vec3( i2281[8], i2281[9], i2281[10] )
  i2280.rotation = new pc.Quat(i2281[11], i2281[12], i2281[13], i2281[14])
  i2280.scale = new pc.Vec3( i2281[15], i2281[16], i2281[17] )
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2283 = data
  i2282.cullTransparentMesh = !!i2283[0]
  return i2282
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.UI.Image' )
  var i2285 = data
  request.r(i2285[0], i2285[1], 0, i2284, 'm_Sprite')
  i2284.m_Type = i2285[2]
  i2284.m_PreserveAspect = !!i2285[3]
  i2284.m_FillCenter = !!i2285[4]
  i2284.m_FillMethod = i2285[5]
  i2284.m_FillAmount = i2285[6]
  i2284.m_FillClockwise = !!i2285[7]
  i2284.m_FillOrigin = i2285[8]
  i2284.m_UseSpriteMesh = !!i2285[9]
  i2284.m_PixelsPerUnitMultiplier = i2285[10]
  request.r(i2285[11], i2285[12], 0, i2284, 'm_Material')
  i2284.m_Maskable = !!i2285[13]
  i2284.m_Color = new pc.Color(i2285[14], i2285[15], i2285[16], i2285[17])
  i2284.m_RaycastTarget = !!i2285[18]
  i2284.m_RaycastPadding = new pc.Vec4( i2285[19], i2285[20], i2285[21], i2285[22] )
  return i2284
}

Deserializers["BombPrefab"] = function (request, data, root) {
  var i2286 = root || request.c( 'BombPrefab' )
  var i2287 = data
  request.r(i2287[0], i2287[1], 0, i2286, 'explosionEffect')
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2289 = data
  i2288.name = i2289[0]
  i2288.atlasId = i2289[1]
  i2288.mipmapCount = i2289[2]
  i2288.hdr = !!i2289[3]
  i2288.size = i2289[4]
  i2288.anisoLevel = i2289[5]
  i2288.filterMode = i2289[6]
  var i2291 = i2289[7]
  var i2290 = []
  for(var i = 0; i < i2291.length; i += 4) {
    i2290.push( UnityEngine.Rect.MinMaxRect(i2291[i + 0], i2291[i + 1], i2291[i + 2], i2291[i + 3]) );
  }
  i2288.rects = i2290
  i2288.wrapU = i2289[8]
  i2288.wrapV = i2289[9]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2295 = data
  i2294.name = i2295[0]
  i2294.index = i2295[1]
  i2294.startup = !!i2295[2]
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2297 = data
  i2296.enabled = !!i2297[0]
  i2296.aspect = i2297[1]
  i2296.orthographic = !!i2297[2]
  i2296.orthographicSize = i2297[3]
  i2296.backgroundColor = new pc.Color(i2297[4], i2297[5], i2297[6], i2297[7])
  i2296.nearClipPlane = i2297[8]
  i2296.farClipPlane = i2297[9]
  i2296.fieldOfView = i2297[10]
  i2296.depth = i2297[11]
  i2296.clearFlags = i2297[12]
  i2296.cullingMask = i2297[13]
  i2296.rect = i2297[14]
  request.r(i2297[15], i2297[16], 0, i2296, 'targetTexture')
  i2296.usePhysicalProperties = !!i2297[17]
  i2296.focalLength = i2297[18]
  i2296.sensorSize = new pc.Vec2( i2297[19], i2297[20] )
  i2296.lensShift = new pc.Vec2( i2297[21], i2297[22] )
  i2296.gateFit = i2297[23]
  i2296.commandBufferCount = i2297[24]
  i2296.cameraType = i2297[25]
  return i2296
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i2298 = root || request.c( 'CameraFollow' )
  var i2299 = data
  request.r(i2299[0], i2299[1], 0, i2298, 'target')
  request.r(i2299[2], i2299[3], 0, i2298, 'finishTarget')
  return i2298
}

Deserializers["FOVCalculator"] = function (request, data, root) {
  var i2300 = root || request.c( 'FOVCalculator' )
  var i2301 = data
  return i2300
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i2302 = root || request.c( 'SoundManager' )
  var i2303 = data
  request.r(i2303[0], i2303[1], 0, i2302, 'pushSound')
  request.r(i2303[2], i2303[3], 0, i2302, 'coinSound')
  request.r(i2303[4], i2303[5], 0, i2302, 'countdownSound')
  request.r(i2303[6], i2303[7], 0, i2302, 'botDeathSound')
  request.r(i2303[8], i2303[9], 0, i2302, 'coinFirstInteractionSound')
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2305 = data
  request.r(i2305[0], i2305[1], 0, i2304, 'clip')
  request.r(i2305[2], i2305[3], 0, i2304, 'outputAudioMixerGroup')
  i2304.playOnAwake = !!i2305[4]
  i2304.loop = !!i2305[5]
  i2304.time = i2305[6]
  i2304.volume = i2305[7]
  i2304.pitch = i2305[8]
  i2304.enabled = !!i2305[9]
  return i2304
}

Deserializers["RankManager"] = function (request, data, root) {
  var i2306 = root || request.c( 'RankManager' )
  var i2307 = data
  request.r(i2307[0], i2307[1], 0, i2306, 'rankImage')
  var i2309 = i2307[2]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 2) {
  request.r(i2309[i + 0], i2309[i + 1], 2, i2308, '')
  }
  i2306.rankSprites = i2308
  var i2311 = i2307[3]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 2) {
  request.r(i2311[i + 0], i2311[i + 1], 2, i2310, '')
  }
  i2306.racers = i2310
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2315 = data
  i2314.enabled = !!i2315[0]
  i2314.planeDistance = i2315[1]
  i2314.referencePixelsPerUnit = i2315[2]
  i2314.isFallbackOverlay = !!i2315[3]
  i2314.renderMode = i2315[4]
  i2314.renderOrder = i2315[5]
  i2314.sortingLayerName = i2315[6]
  i2314.sortingOrder = i2315[7]
  i2314.scaleFactor = i2315[8]
  request.r(i2315[9], i2315[10], 0, i2314, 'worldCamera')
  i2314.overrideSorting = !!i2315[11]
  i2314.pixelPerfect = !!i2315[12]
  i2314.targetDisplay = i2315[13]
  i2314.overridePixelPerfect = !!i2315[14]
  return i2314
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2316 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2317 = data
  i2316.m_UiScaleMode = i2317[0]
  i2316.m_ReferencePixelsPerUnit = i2317[1]
  i2316.m_ScaleFactor = i2317[2]
  i2316.m_ReferenceResolution = new pc.Vec2( i2317[3], i2317[4] )
  i2316.m_ScreenMatchMode = i2317[5]
  i2316.m_MatchWidthOrHeight = i2317[6]
  i2316.m_PhysicalUnit = i2317[7]
  i2316.m_FallbackScreenDPI = i2317[8]
  i2316.m_DefaultSpriteDPI = i2317[9]
  i2316.m_DynamicPixelsPerUnit = i2317[10]
  i2316.m_PresetInfoIsWorld = !!i2317[11]
  return i2316
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2318 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2319 = data
  i2318.m_IgnoreReversedGraphics = !!i2319[0]
  i2318.m_BlockingObjects = i2319[1]
  i2318.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2319[2] )
  return i2318
}

Deserializers["Joystick"] = function (request, data, root) {
  var i2320 = root || request.c( 'Joystick' )
  var i2321 = data
  request.r(i2321[0], i2321[1], 0, i2320, 'joystickBackground')
  request.r(i2321[2], i2321[3], 0, i2320, 'joystickHandle')
  return i2320
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2322 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2323 = data
  i2322.m_Spacing = i2323[0]
  i2322.m_ChildForceExpandWidth = !!i2323[1]
  i2322.m_ChildForceExpandHeight = !!i2323[2]
  i2322.m_ChildControlWidth = !!i2323[3]
  i2322.m_ChildControlHeight = !!i2323[4]
  i2322.m_ChildScaleWidth = !!i2323[5]
  i2322.m_ChildScaleHeight = !!i2323[6]
  i2322.m_ReverseArrangement = !!i2323[7]
  i2322.m_Padding = UnityEngine.RectOffset.FromPaddings(i2323[8], i2323[9], i2323[10], i2323[11])
  i2322.m_ChildAlignment = i2323[12]
  return i2322
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i2324 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i2325 = data
  i2324.m_HorizontalFit = i2325[0]
  i2324.m_VerticalFit = i2325[1]
  return i2324
}

Deserializers["DeathCounter"] = function (request, data, root) {
  var i2326 = root || request.c( 'DeathCounter' )
  var i2327 = data
  request.r(i2327[0], i2327[1], 0, i2326, 'deathCounterText')
  return i2326
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2328 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2329 = data
  i2328.m_hasFontAssetChanged = !!i2329[0]
  request.r(i2329[1], i2329[2], 0, i2328, 'm_baseMaterial')
  i2328.m_maskOffset = new pc.Vec4( i2329[3], i2329[4], i2329[5], i2329[6] )
  i2328.m_text = i2329[7]
  i2328.m_isRightToLeft = !!i2329[8]
  request.r(i2329[9], i2329[10], 0, i2328, 'm_fontAsset')
  request.r(i2329[11], i2329[12], 0, i2328, 'm_sharedMaterial')
  var i2331 = i2329[13]
  var i2330 = []
  for(var i = 0; i < i2331.length; i += 2) {
  request.r(i2331[i + 0], i2331[i + 1], 2, i2330, '')
  }
  i2328.m_fontSharedMaterials = i2330
  request.r(i2329[14], i2329[15], 0, i2328, 'm_fontMaterial')
  var i2333 = i2329[16]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 2) {
  request.r(i2333[i + 0], i2333[i + 1], 2, i2332, '')
  }
  i2328.m_fontMaterials = i2332
  i2328.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2329[17], i2329[18], i2329[19], i2329[20])
  i2328.m_fontColor = new pc.Color(i2329[21], i2329[22], i2329[23], i2329[24])
  i2328.m_enableVertexGradient = !!i2329[25]
  i2328.m_colorMode = i2329[26]
  i2328.m_fontColorGradient = request.d('TMPro.VertexGradient', i2329[27], i2328.m_fontColorGradient)
  request.r(i2329[28], i2329[29], 0, i2328, 'm_fontColorGradientPreset')
  request.r(i2329[30], i2329[31], 0, i2328, 'm_spriteAsset')
  i2328.m_tintAllSprites = !!i2329[32]
  request.r(i2329[33], i2329[34], 0, i2328, 'm_StyleSheet')
  i2328.m_TextStyleHashCode = i2329[35]
  i2328.m_overrideHtmlColors = !!i2329[36]
  i2328.m_faceColor = UnityEngine.Color32.ConstructColor(i2329[37], i2329[38], i2329[39], i2329[40])
  i2328.m_fontSize = i2329[41]
  i2328.m_fontSizeBase = i2329[42]
  i2328.m_fontWeight = i2329[43]
  i2328.m_enableAutoSizing = !!i2329[44]
  i2328.m_fontSizeMin = i2329[45]
  i2328.m_fontSizeMax = i2329[46]
  i2328.m_fontStyle = i2329[47]
  i2328.m_HorizontalAlignment = i2329[48]
  i2328.m_VerticalAlignment = i2329[49]
  i2328.m_textAlignment = i2329[50]
  i2328.m_characterSpacing = i2329[51]
  i2328.m_wordSpacing = i2329[52]
  i2328.m_lineSpacing = i2329[53]
  i2328.m_lineSpacingMax = i2329[54]
  i2328.m_paragraphSpacing = i2329[55]
  i2328.m_charWidthMaxAdj = i2329[56]
  i2328.m_enableWordWrapping = !!i2329[57]
  i2328.m_wordWrappingRatios = i2329[58]
  i2328.m_overflowMode = i2329[59]
  request.r(i2329[60], i2329[61], 0, i2328, 'm_linkedTextComponent')
  request.r(i2329[62], i2329[63], 0, i2328, 'parentLinkedComponent')
  i2328.m_enableKerning = !!i2329[64]
  i2328.m_enableExtraPadding = !!i2329[65]
  i2328.checkPaddingRequired = !!i2329[66]
  i2328.m_isRichText = !!i2329[67]
  i2328.m_parseCtrlCharacters = !!i2329[68]
  i2328.m_isOrthographic = !!i2329[69]
  i2328.m_isCullingEnabled = !!i2329[70]
  i2328.m_horizontalMapping = i2329[71]
  i2328.m_verticalMapping = i2329[72]
  i2328.m_uvLineOffset = i2329[73]
  i2328.m_geometrySortingOrder = i2329[74]
  i2328.m_IsTextObjectScaleStatic = !!i2329[75]
  i2328.m_VertexBufferAutoSizeReduction = !!i2329[76]
  i2328.m_useMaxVisibleDescender = !!i2329[77]
  i2328.m_pageToDisplay = i2329[78]
  i2328.m_margin = new pc.Vec4( i2329[79], i2329[80], i2329[81], i2329[82] )
  i2328.m_isUsingLegacyAnimationComponent = !!i2329[83]
  i2328.m_isVolumetricText = !!i2329[84]
  request.r(i2329[85], i2329[86], 0, i2328, 'm_Material')
  i2328.m_Maskable = !!i2329[87]
  i2328.m_Color = new pc.Color(i2329[88], i2329[89], i2329[90], i2329[91])
  i2328.m_RaycastTarget = !!i2329[92]
  i2328.m_RaycastPadding = new pc.Vec4( i2329[93], i2329[94], i2329[95], i2329[96] )
  return i2328
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2334 = root || request.c( 'TMPro.VertexGradient' )
  var i2335 = data
  i2334.topLeft = new pc.Color(i2335[0], i2335[1], i2335[2], i2335[3])
  i2334.topRight = new pc.Color(i2335[4], i2335[5], i2335[6], i2335[7])
  i2334.bottomLeft = new pc.Color(i2335[8], i2335[9], i2335[10], i2335[11])
  i2334.bottomRight = new pc.Color(i2335[12], i2335[13], i2335[14], i2335[15])
  return i2334
}

Deserializers["CoinManager"] = function (request, data, root) {
  var i2336 = root || request.c( 'CoinManager' )
  var i2337 = data
  request.r(i2337[0], i2337[1], 0, i2336, 'coinCounterText')
  request.r(i2337[2], i2337[3], 0, i2336, 'flyingCoinPrefab')
  request.r(i2337[4], i2337[5], 0, i2336, 'uiTarget')
  return i2336
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2338 = root || request.c( 'UnityEngine.UI.Button' )
  var i2339 = data
  i2338.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2339[0], i2338.m_OnClick)
  i2338.m_Navigation = request.d('UnityEngine.UI.Navigation', i2339[1], i2338.m_Navigation)
  i2338.m_Transition = i2339[2]
  i2338.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2339[3], i2338.m_Colors)
  i2338.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2339[4], i2338.m_SpriteState)
  i2338.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2339[5], i2338.m_AnimationTriggers)
  i2338.m_Interactable = !!i2339[6]
  request.r(i2339[7], i2339[8], 0, i2338, 'm_TargetGraphic')
  return i2338
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2340 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2341 = data
  i2340.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2341[0], i2340.m_PersistentCalls)
  return i2340
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2342 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2343 = data
  var i2345 = i2343[0]
  var i2344 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2345.length; i += 1) {
    i2344.add(request.d('UnityEngine.Events.PersistentCall', i2345[i + 0]));
  }
  i2342.m_Calls = i2344
  return i2342
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2348 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2349 = data
  request.r(i2349[0], i2349[1], 0, i2348, 'm_Target')
  i2348.m_TargetAssemblyTypeName = i2349[2]
  i2348.m_MethodName = i2349[3]
  i2348.m_Mode = i2349[4]
  i2348.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2349[5], i2348.m_Arguments)
  i2348.m_CallState = i2349[6]
  return i2348
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2350 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2351 = data
  request.r(i2351[0], i2351[1], 0, i2350, 'm_ObjectArgument')
  i2350.m_ObjectArgumentAssemblyTypeName = i2351[2]
  i2350.m_IntArgument = i2351[3]
  i2350.m_FloatArgument = i2351[4]
  i2350.m_StringArgument = i2351[5]
  i2350.m_BoolArgument = !!i2351[6]
  return i2350
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2352 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2353 = data
  i2352.m_Mode = i2353[0]
  i2352.m_WrapAround = !!i2353[1]
  request.r(i2353[2], i2353[3], 0, i2352, 'm_SelectOnUp')
  request.r(i2353[4], i2353[5], 0, i2352, 'm_SelectOnDown')
  request.r(i2353[6], i2353[7], 0, i2352, 'm_SelectOnLeft')
  request.r(i2353[8], i2353[9], 0, i2352, 'm_SelectOnRight')
  return i2352
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2354 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2355 = data
  i2354.m_NormalColor = new pc.Color(i2355[0], i2355[1], i2355[2], i2355[3])
  i2354.m_HighlightedColor = new pc.Color(i2355[4], i2355[5], i2355[6], i2355[7])
  i2354.m_PressedColor = new pc.Color(i2355[8], i2355[9], i2355[10], i2355[11])
  i2354.m_SelectedColor = new pc.Color(i2355[12], i2355[13], i2355[14], i2355[15])
  i2354.m_DisabledColor = new pc.Color(i2355[16], i2355[17], i2355[18], i2355[19])
  i2354.m_ColorMultiplier = i2355[20]
  i2354.m_FadeDuration = i2355[21]
  return i2354
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2356 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2357 = data
  request.r(i2357[0], i2357[1], 0, i2356, 'm_HighlightedSprite')
  request.r(i2357[2], i2357[3], 0, i2356, 'm_PressedSprite')
  request.r(i2357[4], i2357[5], 0, i2356, 'm_SelectedSprite')
  request.r(i2357[6], i2357[7], 0, i2356, 'm_DisabledSprite')
  return i2356
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2358 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2359 = data
  i2358.m_NormalTrigger = i2359[0]
  i2358.m_HighlightedTrigger = i2359[1]
  i2358.m_PressedTrigger = i2359[2]
  i2358.m_SelectedTrigger = i2359[3]
  i2358.m_DisabledTrigger = i2359[4]
  return i2358
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2360 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2361 = data
  request.r(i2361[0], i2361[1], 0, i2360, 'm_FirstSelected')
  i2360.m_sendNavigationEvents = !!i2361[2]
  i2360.m_DragThreshold = i2361[3]
  return i2360
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2362 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2363 = data
  i2362.m_HorizontalAxis = i2363[0]
  i2362.m_VerticalAxis = i2363[1]
  i2362.m_SubmitButton = i2363[2]
  i2362.m_CancelButton = i2363[3]
  i2362.m_InputActionsPerSecond = i2363[4]
  i2362.m_RepeatDelay = i2363[5]
  i2362.m_ForceModuleActive = !!i2363[6]
  i2362.m_SendPointerHoverToParent = !!i2363[7]
  return i2362
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2364 = root || request.c( 'GameManager' )
  var i2365 = data
  i2364.isRunnerGameStarted = !!i2365[0]
  i2364.isGameCompleted = !!i2365[1]
  request.r(i2365[2], i2365[3], 0, i2364, 'completeGameUI')
  request.r(i2365[4], i2365[5], 0, i2364, 'startGameUI')
  request.r(i2365[6], i2365[7], 0, i2364, 'starterText')
  request.r(i2365[8], i2365[9], 0, i2364, 'starterImage')
  var i2367 = i2365[10]
  var i2366 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2367.length; i += 2) {
  request.r(i2367[i + 0], i2367[i + 1], 1, i2366, '')
  }
  i2364.starterImages = i2366
  request.r(i2365[11], i2365[12], 0, i2364, 'tapToStartText')
  i2364.skipStartScreen = !!i2365[13]
  return i2364
}

Deserializers["FinishLine"] = function (request, data, root) {
  var i2370 = root || request.c( 'FinishLine' )
  var i2371 = data
  return i2370
}

Deserializers["PowerUp"] = function (request, data, root) {
  var i2372 = root || request.c( 'PowerUp' )
  var i2373 = data
  i2372.powerUpType = i2373[0]
  i2372.distance = i2373[1]
  i2372.moveTime = i2373[2]
  return i2372
}

Deserializers["BackgroundMusic"] = function (request, data, root) {
  var i2374 = root || request.c( 'BackgroundMusic' )
  var i2375 = data
  return i2374
}

Deserializers["NodeManager"] = function (request, data, root) {
  var i2376 = root || request.c( 'NodeManager' )
  var i2377 = data
  return i2376
}

Deserializers["AINode"] = function (request, data, root) {
  var i2378 = root || request.c( 'AINode' )
  var i2379 = data
  i2378.leftOffset = i2379[0]
  i2378.rightOffset = i2379[1]
  request.r(i2379[2], i2379[3], 0, i2378, 'nextNode')
  return i2378
}

Deserializers["PowerupManager"] = function (request, data, root) {
  var i2380 = root || request.c( 'PowerupManager' )
  var i2381 = data
  request.r(i2381[0], i2381[1], 0, i2380, 'bananaPrefab')
  request.r(i2381[2], i2381[3], 0, i2380, 'placePowerUpText')
  request.r(i2381[4], i2381[5], 0, i2380, 'cursor')
  request.r(i2381[6], i2381[7], 0, i2380, 'powerUpUI')
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2383 = data
  i2382.ambientIntensity = i2383[0]
  i2382.reflectionIntensity = i2383[1]
  i2382.ambientMode = i2383[2]
  i2382.ambientLight = new pc.Color(i2383[3], i2383[4], i2383[5], i2383[6])
  i2382.ambientSkyColor = new pc.Color(i2383[7], i2383[8], i2383[9], i2383[10])
  i2382.ambientGroundColor = new pc.Color(i2383[11], i2383[12], i2383[13], i2383[14])
  i2382.ambientEquatorColor = new pc.Color(i2383[15], i2383[16], i2383[17], i2383[18])
  i2382.fogColor = new pc.Color(i2383[19], i2383[20], i2383[21], i2383[22])
  i2382.fogEndDistance = i2383[23]
  i2382.fogStartDistance = i2383[24]
  i2382.fogDensity = i2383[25]
  i2382.fog = !!i2383[26]
  request.r(i2383[27], i2383[28], 0, i2382, 'skybox')
  i2382.fogMode = i2383[29]
  var i2385 = i2383[30]
  var i2384 = []
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2385[i + 0]) );
  }
  i2382.lightmaps = i2384
  i2382.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2383[31], i2382.lightProbes)
  i2382.lightmapsMode = i2383[32]
  i2382.mixedBakeMode = i2383[33]
  i2382.environmentLightingMode = i2383[34]
  i2382.ambientProbe = new pc.SphericalHarmonicsL2(i2383[35])
  i2382.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2383[36])
  i2382.useReferenceAmbientProbe = !!i2383[37]
  request.r(i2383[38], i2383[39], 0, i2382, 'customReflection')
  request.r(i2383[40], i2383[41], 0, i2382, 'defaultReflection')
  i2382.defaultReflectionMode = i2383[42]
  i2382.defaultReflectionResolution = i2383[43]
  i2382.sunLightObjectId = i2383[44]
  i2382.pixelLightCount = i2383[45]
  i2382.defaultReflectionHDR = !!i2383[46]
  i2382.hasLightDataAsset = !!i2383[47]
  i2382.hasManualGenerate = !!i2383[48]
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2389 = data
  request.r(i2389[0], i2389[1], 0, i2388, 'lightmapColor')
  request.r(i2389[2], i2389[3], 0, i2388, 'lightmapDirection')
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2390 = root || new UnityEngine.LightProbes()
  var i2391 = data
  return i2390
}

Deserializers["WallPainter"] = function (request, data, root) {
  var i2398 = root || request.c( 'WallPainter' )
  var i2399 = data
  request.r(i2399[0], i2399[1], 0, i2398, 'texturePaint')
  request.r(i2399[2], i2399[3], 0, i2398, 'brushSizeSlider')
  request.r(i2399[4], i2399[5], 0, i2398, 'paintedPercentageText')
  request.r(i2399[6], i2399[7], 0, i2398, 'yellowButton')
  request.r(i2399[8], i2399[9], 0, i2398, 'redButton')
  request.r(i2399[10], i2399[11], 0, i2398, 'blueButton')
  request.r(i2399[12], i2399[13], 0, i2398, 'canvas')
  request.r(i2399[14], i2399[15], 0, i2398, 'mainMaterial')
  request.r(i2399[16], i2399[17], 0, i2398, '_meshRenderer')
  request.r(i2399[18], i2399[19], 0, i2398, 'wallTransform')
  request.r(i2399[20], i2399[21], 0, i2398, '_audioSource')
  i2398.maxVolume = i2399[22]
  i2398.volumeFadeSpeed = i2399[23]
  return i2398
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2400 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2401 = data
  request.r(i2401[0], i2401[1], 0, i2400, 'm_FillRect')
  request.r(i2401[2], i2401[3], 0, i2400, 'm_HandleRect')
  i2400.m_Direction = i2401[4]
  i2400.m_MinValue = i2401[5]
  i2400.m_MaxValue = i2401[6]
  i2400.m_WholeNumbers = !!i2401[7]
  i2400.m_Value = i2401[8]
  i2400.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2401[9], i2400.m_OnValueChanged)
  i2400.m_Navigation = request.d('UnityEngine.UI.Navigation', i2401[10], i2400.m_Navigation)
  i2400.m_Transition = i2401[11]
  i2400.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2401[12], i2400.m_Colors)
  i2400.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2401[13], i2400.m_SpriteState)
  i2400.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2401[14], i2400.m_AnimationTriggers)
  i2400.m_Interactable = !!i2401[15]
  request.r(i2401[16], i2401[17], 0, i2400, 'm_TargetGraphic')
  return i2400
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2402 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2403 = data
  i2402.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2403[0], i2402.m_PersistentCalls)
  return i2402
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i2404 = root || request.c( 'TMPro.TextMeshPro' )
  var i2405 = data
  i2404._SortingLayer = i2405[0]
  i2404._SortingLayerID = i2405[1]
  i2404._SortingOrder = i2405[2]
  i2404.m_hasFontAssetChanged = !!i2405[3]
  request.r(i2405[4], i2405[5], 0, i2404, 'm_renderer')
  i2404.m_maskType = i2405[6]
  i2404.m_text = i2405[7]
  i2404.m_isRightToLeft = !!i2405[8]
  request.r(i2405[9], i2405[10], 0, i2404, 'm_fontAsset')
  request.r(i2405[11], i2405[12], 0, i2404, 'm_sharedMaterial')
  var i2407 = i2405[13]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 2) {
  request.r(i2407[i + 0], i2407[i + 1], 2, i2406, '')
  }
  i2404.m_fontSharedMaterials = i2406
  request.r(i2405[14], i2405[15], 0, i2404, 'm_fontMaterial')
  var i2409 = i2405[16]
  var i2408 = []
  for(var i = 0; i < i2409.length; i += 2) {
  request.r(i2409[i + 0], i2409[i + 1], 2, i2408, '')
  }
  i2404.m_fontMaterials = i2408
  i2404.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2405[17], i2405[18], i2405[19], i2405[20])
  i2404.m_fontColor = new pc.Color(i2405[21], i2405[22], i2405[23], i2405[24])
  i2404.m_enableVertexGradient = !!i2405[25]
  i2404.m_colorMode = i2405[26]
  i2404.m_fontColorGradient = request.d('TMPro.VertexGradient', i2405[27], i2404.m_fontColorGradient)
  request.r(i2405[28], i2405[29], 0, i2404, 'm_fontColorGradientPreset')
  request.r(i2405[30], i2405[31], 0, i2404, 'm_spriteAsset')
  i2404.m_tintAllSprites = !!i2405[32]
  request.r(i2405[33], i2405[34], 0, i2404, 'm_StyleSheet')
  i2404.m_TextStyleHashCode = i2405[35]
  i2404.m_overrideHtmlColors = !!i2405[36]
  i2404.m_faceColor = UnityEngine.Color32.ConstructColor(i2405[37], i2405[38], i2405[39], i2405[40])
  i2404.m_fontSize = i2405[41]
  i2404.m_fontSizeBase = i2405[42]
  i2404.m_fontWeight = i2405[43]
  i2404.m_enableAutoSizing = !!i2405[44]
  i2404.m_fontSizeMin = i2405[45]
  i2404.m_fontSizeMax = i2405[46]
  i2404.m_fontStyle = i2405[47]
  i2404.m_HorizontalAlignment = i2405[48]
  i2404.m_VerticalAlignment = i2405[49]
  i2404.m_textAlignment = i2405[50]
  i2404.m_characterSpacing = i2405[51]
  i2404.m_wordSpacing = i2405[52]
  i2404.m_lineSpacing = i2405[53]
  i2404.m_lineSpacingMax = i2405[54]
  i2404.m_paragraphSpacing = i2405[55]
  i2404.m_charWidthMaxAdj = i2405[56]
  i2404.m_enableWordWrapping = !!i2405[57]
  i2404.m_wordWrappingRatios = i2405[58]
  i2404.m_overflowMode = i2405[59]
  request.r(i2405[60], i2405[61], 0, i2404, 'm_linkedTextComponent')
  request.r(i2405[62], i2405[63], 0, i2404, 'parentLinkedComponent')
  i2404.m_enableKerning = !!i2405[64]
  i2404.m_enableExtraPadding = !!i2405[65]
  i2404.checkPaddingRequired = !!i2405[66]
  i2404.m_isRichText = !!i2405[67]
  i2404.m_parseCtrlCharacters = !!i2405[68]
  i2404.m_isOrthographic = !!i2405[69]
  i2404.m_isCullingEnabled = !!i2405[70]
  i2404.m_horizontalMapping = i2405[71]
  i2404.m_verticalMapping = i2405[72]
  i2404.m_uvLineOffset = i2405[73]
  i2404.m_geometrySortingOrder = i2405[74]
  i2404.m_IsTextObjectScaleStatic = !!i2405[75]
  i2404.m_VertexBufferAutoSizeReduction = !!i2405[76]
  i2404.m_useMaxVisibleDescender = !!i2405[77]
  i2404.m_pageToDisplay = i2405[78]
  i2404.m_margin = new pc.Vec4( i2405[79], i2405[80], i2405[81], i2405[82] )
  i2404.m_isUsingLegacyAnimationComponent = !!i2405[83]
  i2404.m_isVolumetricText = !!i2405[84]
  request.r(i2405[85], i2405[86], 0, i2404, 'm_Material')
  i2404.m_Maskable = !!i2405[87]
  i2404.m_Color = new pc.Color(i2405[88], i2405[89], i2405[90], i2405[91])
  i2404.m_RaycastTarget = !!i2405[92]
  i2404.m_RaycastPadding = new pc.Vec4( i2405[93], i2405[94], i2405[95], i2405[96] )
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2411 = data
  var i2413 = i2411[0]
  var i2412 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2413.length; i += 1) {
    i2412.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2413[i + 0]));
  }
  i2410.ShaderCompilationErrors = i2412
  i2410.name = i2411[1]
  i2410.guid = i2411[2]
  var i2415 = i2411[3]
  var i2414 = []
  for(var i = 0; i < i2415.length; i += 1) {
    i2414.push( i2415[i + 0] );
  }
  i2410.shaderDefinedKeywords = i2414
  var i2417 = i2411[4]
  var i2416 = []
  for(var i = 0; i < i2417.length; i += 1) {
    i2416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2417[i + 0]) );
  }
  i2410.passes = i2416
  var i2419 = i2411[5]
  var i2418 = []
  for(var i = 0; i < i2419.length; i += 1) {
    i2418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2419[i + 0]) );
  }
  i2410.usePasses = i2418
  var i2421 = i2411[6]
  var i2420 = []
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2421[i + 0]) );
  }
  i2410.defaultParameterValues = i2420
  request.r(i2411[7], i2411[8], 0, i2410, 'unityFallbackShader')
  i2410.readDepth = !!i2411[9]
  i2410.isCreatedByShaderGraph = !!i2411[10]
  i2410.compiled = !!i2411[11]
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2425 = data
  i2424.shaderName = i2425[0]
  i2424.errorMessage = i2425[1]
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2430 = root || new pc.UnityShaderPass()
  var i2431 = data
  i2430.id = i2431[0]
  i2430.subShaderIndex = i2431[1]
  i2430.name = i2431[2]
  i2430.passType = i2431[3]
  i2430.grabPassTextureName = i2431[4]
  i2430.usePass = !!i2431[5]
  i2430.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2431[6], i2430.zTest)
  i2430.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2431[7], i2430.zWrite)
  i2430.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2431[8], i2430.culling)
  i2430.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2431[9], i2430.blending)
  i2430.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2431[10], i2430.alphaBlending)
  i2430.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2431[11], i2430.colorWriteMask)
  i2430.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2431[12], i2430.offsetUnits)
  i2430.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2431[13], i2430.offsetFactor)
  i2430.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2431[14], i2430.stencilRef)
  i2430.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2431[15], i2430.stencilReadMask)
  i2430.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2431[16], i2430.stencilWriteMask)
  i2430.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2431[17], i2430.stencilOp)
  i2430.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2431[18], i2430.stencilOpFront)
  i2430.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2431[19], i2430.stencilOpBack)
  var i2433 = i2431[20]
  var i2432 = []
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2433[i + 0]) );
  }
  i2430.tags = i2432
  var i2435 = i2431[21]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.push( i2435[i + 0] );
  }
  i2430.passDefinedKeywords = i2434
  var i2437 = i2431[22]
  var i2436 = []
  for(var i = 0; i < i2437.length; i += 1) {
    i2436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2437[i + 0]) );
  }
  i2430.passDefinedKeywordGroups = i2436
  var i2439 = i2431[23]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 1) {
    i2438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2439[i + 0]) );
  }
  i2430.variants = i2438
  var i2441 = i2431[24]
  var i2440 = []
  for(var i = 0; i < i2441.length; i += 1) {
    i2440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2441[i + 0]) );
  }
  i2430.excludedVariants = i2440
  i2430.hasDepthReader = !!i2431[25]
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2443 = data
  i2442.val = i2443[0]
  i2442.name = i2443[1]
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2445 = data
  i2444.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2445[0], i2444.src)
  i2444.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2445[1], i2444.dst)
  i2444.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2445[2], i2444.op)
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2447 = data
  i2446.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2447[0], i2446.pass)
  i2446.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2447[1], i2446.fail)
  i2446.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2447[2], i2446.zFail)
  i2446.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2447[3], i2446.comp)
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2451 = data
  i2450.name = i2451[0]
  i2450.value = i2451[1]
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2455 = data
  var i2457 = i2455[0]
  var i2456 = []
  for(var i = 0; i < i2457.length; i += 1) {
    i2456.push( i2457[i + 0] );
  }
  i2454.keywords = i2456
  i2454.hasDiscard = !!i2455[1]
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2461 = data
  i2460.passId = i2461[0]
  i2460.subShaderIndex = i2461[1]
  var i2463 = i2461[2]
  var i2462 = []
  for(var i = 0; i < i2463.length; i += 1) {
    i2462.push( i2463[i + 0] );
  }
  i2460.keywords = i2462
  i2460.vertexProgram = i2461[3]
  i2460.fragmentProgram = i2461[4]
  i2460.exportedForWebGl2 = !!i2461[5]
  i2460.readDepth = !!i2461[6]
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2467 = data
  request.r(i2467[0], i2467[1], 0, i2466, 'shader')
  i2466.pass = i2467[2]
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2471 = data
  i2470.name = i2471[0]
  i2470.type = i2471[1]
  i2470.value = new pc.Vec4( i2471[2], i2471[3], i2471[4], i2471[5] )
  i2470.textureValue = i2471[6]
  i2470.shaderPropertyFlag = i2471[7]
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2473 = data
  i2472.name = i2473[0]
  request.r(i2473[1], i2473[2], 0, i2472, 'texture')
  i2472.aabb = i2473[3]
  i2472.vertices = i2473[4]
  i2472.triangles = i2473[5]
  i2472.textureRect = UnityEngine.Rect.MinMaxRect(i2473[6], i2473[7], i2473[8], i2473[9])
  i2472.packedRect = UnityEngine.Rect.MinMaxRect(i2473[10], i2473[11], i2473[12], i2473[13])
  i2472.border = new pc.Vec4( i2473[14], i2473[15], i2473[16], i2473[17] )
  i2472.transparency = i2473[18]
  i2472.bounds = i2473[19]
  i2472.pixelsPerUnit = i2473[20]
  i2472.textureWidth = i2473[21]
  i2472.textureHeight = i2473[22]
  i2472.nativeSize = new pc.Vec2( i2473[23], i2473[24] )
  i2472.pivot = new pc.Vec2( i2473[25], i2473[26] )
  i2472.textureRectOffset = new pc.Vec2( i2473[27], i2473[28] )
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2475 = data
  i2474.name = i2475[0]
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2477 = data
  i2476.name = i2477[0]
  i2476.wrapMode = i2477[1]
  i2476.isLooping = !!i2477[2]
  i2476.length = i2477[3]
  var i2479 = i2477[4]
  var i2478 = []
  for(var i = 0; i < i2479.length; i += 1) {
    i2478.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2479[i + 0]) );
  }
  i2476.curves = i2478
  var i2481 = i2477[5]
  var i2480 = []
  for(var i = 0; i < i2481.length; i += 1) {
    i2480.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2481[i + 0]) );
  }
  i2476.events = i2480
  i2476.halfPrecision = !!i2477[6]
  i2476._frameRate = i2477[7]
  i2476.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2477[8], i2476.localBounds)
  i2476.hasMuscleCurves = !!i2477[9]
  var i2483 = i2477[10]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.push( i2483[i + 0] );
  }
  i2476.clipMuscleConstant = i2482
  i2476.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2477[11], i2476.clipBindingConstant)
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2487 = data
  i2486.path = i2487[0]
  i2486.hash = i2487[1]
  i2486.componentType = i2487[2]
  i2486.property = i2487[3]
  i2486.keys = i2487[4]
  var i2489 = i2487[5]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2489[i + 0]) );
  }
  i2486.objectReferenceKeys = i2488
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2493 = data
  i2492.time = i2493[0]
  request.r(i2493[1], i2493[2], 0, i2492, 'value')
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2497 = data
  i2496.functionName = i2497[0]
  i2496.floatParameter = i2497[1]
  i2496.intParameter = i2497[2]
  i2496.stringParameter = i2497[3]
  request.r(i2497[4], i2497[5], 0, i2496, 'objectReferenceParameter')
  i2496.time = i2497[6]
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2499 = data
  i2498.center = new pc.Vec3( i2499[0], i2499[1], i2499[2] )
  i2498.extends = new pc.Vec3( i2499[3], i2499[4], i2499[5] )
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2503 = data
  var i2505 = i2503[0]
  var i2504 = []
  for(var i = 0; i < i2505.length; i += 1) {
    i2504.push( i2505[i + 0] );
  }
  i2502.genericBindings = i2504
  var i2507 = i2503[1]
  var i2506 = []
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.push( i2507[i + 0] );
  }
  i2502.pptrCurveMapping = i2506
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i2508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i2509 = data
  i2508.name = i2509[0]
  i2508.blendParameter = i2509[1]
  i2508.blendParameterY = i2509[2]
  i2508.blendType = i2509[3]
  var i2511 = i2509[4]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i2511[i + 0]) );
  }
  i2508.children = i2510
  i2508.useAutomaticThresholds = !!i2509[5]
  i2508.minThreshold = i2509[6]
  i2508.maxThreshold = i2509[7]
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i2514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i2515 = data
  request.r(i2515[0], i2515[1], 0, i2514, 'motion')
  i2514.threshold = i2515[2]
  i2514.position = new pc.Vec2( i2515[3], i2515[4] )
  i2514.timeScale = i2515[5]
  i2514.cycleOffset = i2515[6]
  i2514.directBlendParameter = i2515[7]
  i2514.mirror = !!i2515[8]
  return i2514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2517 = data
  i2516.name = i2517[0]
  i2516.ascent = i2517[1]
  i2516.originalLineHeight = i2517[2]
  i2516.fontSize = i2517[3]
  var i2519 = i2517[4]
  var i2518 = []
  for(var i = 0; i < i2519.length; i += 1) {
    i2518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2519[i + 0]) );
  }
  i2516.characterInfo = i2518
  request.r(i2517[5], i2517[6], 0, i2516, 'texture')
  i2516.originalFontSize = i2517[7]
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2523 = data
  i2522.index = i2523[0]
  i2522.advance = i2523[1]
  i2522.bearing = i2523[2]
  i2522.glyphWidth = i2523[3]
  i2522.glyphHeight = i2523[4]
  i2522.minX = i2523[5]
  i2522.maxX = i2523[6]
  i2522.minY = i2523[7]
  i2522.maxY = i2523[8]
  i2522.uvBottomLeftX = i2523[9]
  i2522.uvBottomLeftY = i2523[10]
  i2522.uvBottomRightX = i2523[11]
  i2522.uvBottomRightY = i2523[12]
  i2522.uvTopLeftX = i2523[13]
  i2522.uvTopLeftY = i2523[14]
  i2522.uvTopRightX = i2523[15]
  i2522.uvTopRightY = i2523[16]
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2525 = data
  i2524.name = i2525[0]
  var i2527 = i2525[1]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2527[i + 0]) );
  }
  i2524.layers = i2526
  var i2529 = i2525[2]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2529[i + 0]) );
  }
  i2524.parameters = i2528
  i2524.animationClips = i2525[3]
  i2524.avatarUnsupported = i2525[4]
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2533 = data
  i2532.name = i2533[0]
  i2532.defaultWeight = i2533[1]
  i2532.blendingMode = i2533[2]
  i2532.avatarMask = i2533[3]
  i2532.syncedLayerIndex = i2533[4]
  i2532.syncedLayerAffectsTiming = !!i2533[5]
  i2532.syncedLayers = i2533[6]
  i2532.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2533[7], i2532.stateMachine)
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2535 = data
  i2534.id = i2535[0]
  i2534.name = i2535[1]
  i2534.path = i2535[2]
  var i2537 = i2535[3]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2537[i + 0]) );
  }
  i2534.states = i2536
  var i2539 = i2535[4]
  var i2538 = []
  for(var i = 0; i < i2539.length; i += 1) {
    i2538.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2539[i + 0]) );
  }
  i2534.machines = i2538
  var i2541 = i2535[5]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2541[i + 0]) );
  }
  i2534.entryStateTransitions = i2540
  var i2543 = i2535[6]
  var i2542 = []
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2543[i + 0]) );
  }
  i2534.exitStateTransitions = i2542
  var i2545 = i2535[7]
  var i2544 = []
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2545[i + 0]) );
  }
  i2534.anyStateTransitions = i2544
  i2534.defaultStateId = i2535[8]
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2549 = data
  i2548.id = i2549[0]
  i2548.name = i2549[1]
  i2548.cycleOffset = i2549[2]
  i2548.cycleOffsetParameter = i2549[3]
  i2548.cycleOffsetParameterActive = !!i2549[4]
  i2548.mirror = !!i2549[5]
  i2548.mirrorParameter = i2549[6]
  i2548.mirrorParameterActive = !!i2549[7]
  i2548.motionId = i2549[8]
  i2548.nameHash = i2549[9]
  i2548.fullPathHash = i2549[10]
  i2548.speed = i2549[11]
  i2548.speedParameter = i2549[12]
  i2548.speedParameterActive = !!i2549[13]
  i2548.tag = i2549[14]
  i2548.tagHash = i2549[15]
  i2548.writeDefaultValues = !!i2549[16]
  var i2551 = i2549[17]
  var i2550 = []
  for(var i = 0; i < i2551.length; i += 2) {
  request.r(i2551[i + 0], i2551[i + 1], 2, i2550, '')
  }
  i2548.behaviours = i2550
  var i2553 = i2549[18]
  var i2552 = []
  for(var i = 0; i < i2553.length; i += 1) {
    i2552.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2553[i + 0]) );
  }
  i2548.transitions = i2552
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2559 = data
  i2558.fullPath = i2559[0]
  i2558.canTransitionToSelf = !!i2559[1]
  i2558.duration = i2559[2]
  i2558.exitTime = i2559[3]
  i2558.hasExitTime = !!i2559[4]
  i2558.hasFixedDuration = !!i2559[5]
  i2558.interruptionSource = i2559[6]
  i2558.offset = i2559[7]
  i2558.orderedInterruption = !!i2559[8]
  i2558.destinationStateId = i2559[9]
  i2558.isExit = !!i2559[10]
  i2558.mute = !!i2559[11]
  i2558.solo = !!i2559[12]
  var i2561 = i2559[13]
  var i2560 = []
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2561[i + 0]) );
  }
  i2558.conditions = i2560
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2565 = data
  i2564.mode = i2565[0]
  i2564.parameter = i2565[1]
  i2564.threshold = i2565[2]
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2571 = data
  i2570.destinationStateId = i2571[0]
  i2570.isExit = !!i2571[1]
  i2570.mute = !!i2571[2]
  i2570.solo = !!i2571[3]
  var i2573 = i2571[4]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2573[i + 0]) );
  }
  i2570.conditions = i2572
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2577 = data
  i2576.defaultBool = !!i2577[0]
  i2576.defaultFloat = i2577[1]
  i2576.defaultInt = i2577[2]
  i2576.name = i2577[3]
  i2576.nameHash = i2577[4]
  i2576.type = i2577[5]
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2579 = data
  i2578.name = i2579[0]
  i2578.bytes64 = i2579[1]
  i2578.data = i2579[2]
  return i2578
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2580 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2581 = data
  i2580.hashCode = i2581[0]
  request.r(i2581[1], i2581[2], 0, i2580, 'material')
  i2580.materialHashCode = i2581[3]
  request.r(i2581[4], i2581[5], 0, i2580, 'atlas')
  i2580.normalStyle = i2581[6]
  i2580.normalSpacingOffset = i2581[7]
  i2580.boldStyle = i2581[8]
  i2580.boldSpacing = i2581[9]
  i2580.italicStyle = i2581[10]
  i2580.tabSize = i2581[11]
  i2580.m_Version = i2581[12]
  i2580.m_SourceFontFileGUID = i2581[13]
  request.r(i2581[14], i2581[15], 0, i2580, 'm_SourceFontFile_EditorRef')
  request.r(i2581[16], i2581[17], 0, i2580, 'm_SourceFontFile')
  i2580.m_AtlasPopulationMode = i2581[18]
  i2580.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2581[19], i2580.m_FaceInfo)
  var i2583 = i2581[20]
  var i2582 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2583.length; i += 1) {
    i2582.add(request.d('UnityEngine.TextCore.Glyph', i2583[i + 0]));
  }
  i2580.m_GlyphTable = i2582
  var i2585 = i2581[21]
  var i2584 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2585.length; i += 1) {
    i2584.add(request.d('TMPro.TMP_Character', i2585[i + 0]));
  }
  i2580.m_CharacterTable = i2584
  var i2587 = i2581[22]
  var i2586 = []
  for(var i = 0; i < i2587.length; i += 2) {
  request.r(i2587[i + 0], i2587[i + 1], 2, i2586, '')
  }
  i2580.m_AtlasTextures = i2586
  i2580.m_AtlasTextureIndex = i2581[23]
  i2580.m_IsMultiAtlasTexturesEnabled = !!i2581[24]
  i2580.m_ClearDynamicDataOnBuild = !!i2581[25]
  var i2589 = i2581[26]
  var i2588 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.add(request.d('UnityEngine.TextCore.GlyphRect', i2589[i + 0]));
  }
  i2580.m_UsedGlyphRects = i2588
  var i2591 = i2581[27]
  var i2590 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2591.length; i += 1) {
    i2590.add(request.d('UnityEngine.TextCore.GlyphRect', i2591[i + 0]));
  }
  i2580.m_FreeGlyphRects = i2590
  i2580.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2581[28], i2580.m_fontInfo)
  i2580.m_AtlasWidth = i2581[29]
  i2580.m_AtlasHeight = i2581[30]
  i2580.m_AtlasPadding = i2581[31]
  i2580.m_AtlasRenderMode = i2581[32]
  var i2593 = i2581[33]
  var i2592 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2593.length; i += 1) {
    i2592.add(request.d('TMPro.TMP_Glyph', i2593[i + 0]));
  }
  i2580.m_glyphInfoList = i2592
  i2580.m_KerningTable = request.d('TMPro.KerningTable', i2581[34], i2580.m_KerningTable)
  i2580.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2581[35], i2580.m_FontFeatureTable)
  var i2595 = i2581[36]
  var i2594 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2595.length; i += 2) {
  request.r(i2595[i + 0], i2595[i + 1], 1, i2594, '')
  }
  i2580.fallbackFontAssets = i2594
  var i2597 = i2581[37]
  var i2596 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2597.length; i += 2) {
  request.r(i2597[i + 0], i2597[i + 1], 1, i2596, '')
  }
  i2580.m_FallbackFontAssetTable = i2596
  i2580.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2581[38], i2580.m_CreationSettings)
  var i2599 = i2581[39]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.push( request.d('TMPro.TMP_FontWeightPair', i2599[i + 0]) );
  }
  i2580.m_FontWeightTable = i2598
  var i2601 = i2581[40]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.push( request.d('TMPro.TMP_FontWeightPair', i2601[i + 0]) );
  }
  i2580.fontWeights = i2600
  return i2580
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2602 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2603 = data
  i2602.m_FaceIndex = i2603[0]
  i2602.m_FamilyName = i2603[1]
  i2602.m_StyleName = i2603[2]
  i2602.m_PointSize = i2603[3]
  i2602.m_Scale = i2603[4]
  i2602.m_UnitsPerEM = i2603[5]
  i2602.m_LineHeight = i2603[6]
  i2602.m_AscentLine = i2603[7]
  i2602.m_CapLine = i2603[8]
  i2602.m_MeanLine = i2603[9]
  i2602.m_Baseline = i2603[10]
  i2602.m_DescentLine = i2603[11]
  i2602.m_SuperscriptOffset = i2603[12]
  i2602.m_SuperscriptSize = i2603[13]
  i2602.m_SubscriptOffset = i2603[14]
  i2602.m_SubscriptSize = i2603[15]
  i2602.m_UnderlineOffset = i2603[16]
  i2602.m_UnderlineThickness = i2603[17]
  i2602.m_StrikethroughOffset = i2603[18]
  i2602.m_StrikethroughThickness = i2603[19]
  i2602.m_TabWidth = i2603[20]
  return i2602
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2606 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2607 = data
  i2606.m_Index = i2607[0]
  i2606.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2607[1], i2606.m_Metrics)
  i2606.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2607[2], i2606.m_GlyphRect)
  i2606.m_Scale = i2607[3]
  i2606.m_AtlasIndex = i2607[4]
  i2606.m_ClassDefinitionType = i2607[5]
  return i2606
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2608 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2609 = data
  i2608.m_Width = i2609[0]
  i2608.m_Height = i2609[1]
  i2608.m_HorizontalBearingX = i2609[2]
  i2608.m_HorizontalBearingY = i2609[3]
  i2608.m_HorizontalAdvance = i2609[4]
  return i2608
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2610 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2611 = data
  i2610.m_X = i2611[0]
  i2610.m_Y = i2611[1]
  i2610.m_Width = i2611[2]
  i2610.m_Height = i2611[3]
  return i2610
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2614 = root || request.c( 'TMPro.TMP_Character' )
  var i2615 = data
  i2614.m_ElementType = i2615[0]
  i2614.m_Unicode = i2615[1]
  i2614.m_GlyphIndex = i2615[2]
  i2614.m_Scale = i2615[3]
  return i2614
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2620 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2621 = data
  i2620.Name = i2621[0]
  i2620.PointSize = i2621[1]
  i2620.Scale = i2621[2]
  i2620.CharacterCount = i2621[3]
  i2620.LineHeight = i2621[4]
  i2620.Baseline = i2621[5]
  i2620.Ascender = i2621[6]
  i2620.CapHeight = i2621[7]
  i2620.Descender = i2621[8]
  i2620.CenterLine = i2621[9]
  i2620.SuperscriptOffset = i2621[10]
  i2620.SubscriptOffset = i2621[11]
  i2620.SubSize = i2621[12]
  i2620.Underline = i2621[13]
  i2620.UnderlineThickness = i2621[14]
  i2620.strikethrough = i2621[15]
  i2620.strikethroughThickness = i2621[16]
  i2620.TabWidth = i2621[17]
  i2620.Padding = i2621[18]
  i2620.AtlasWidth = i2621[19]
  i2620.AtlasHeight = i2621[20]
  return i2620
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2624 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2625 = data
  i2624.id = i2625[0]
  i2624.x = i2625[1]
  i2624.y = i2625[2]
  i2624.width = i2625[3]
  i2624.height = i2625[4]
  i2624.xOffset = i2625[5]
  i2624.yOffset = i2625[6]
  i2624.xAdvance = i2625[7]
  i2624.scale = i2625[8]
  return i2624
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2626 = root || request.c( 'TMPro.KerningTable' )
  var i2627 = data
  var i2629 = i2627[0]
  var i2628 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.add(request.d('TMPro.KerningPair', i2629[i + 0]));
  }
  i2626.kerningPairs = i2628
  return i2626
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2632 = root || request.c( 'TMPro.KerningPair' )
  var i2633 = data
  i2632.xOffset = i2633[0]
  i2632.m_FirstGlyph = i2633[1]
  i2632.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2633[2], i2632.m_FirstGlyphAdjustments)
  i2632.m_SecondGlyph = i2633[3]
  i2632.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2633[4], i2632.m_SecondGlyphAdjustments)
  i2632.m_IgnoreSpacingAdjustments = !!i2633[5]
  return i2632
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2634 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2635 = data
  var i2637 = i2635[0]
  var i2636 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2637.length; i += 1) {
    i2636.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2637[i + 0]));
  }
  i2634.m_GlyphPairAdjustmentRecords = i2636
  return i2634
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2640 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2641 = data
  i2640.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2641[0], i2640.m_FirstAdjustmentRecord)
  i2640.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2641[1], i2640.m_SecondAdjustmentRecord)
  i2640.m_FeatureLookupFlags = i2641[2]
  return i2640
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2642 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2643 = data
  i2642.m_GlyphIndex = i2643[0]
  i2642.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2643[1], i2642.m_GlyphValueRecord)
  return i2642
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2644 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2645 = data
  i2644.m_XPlacement = i2645[0]
  i2644.m_YPlacement = i2645[1]
  i2644.m_XAdvance = i2645[2]
  i2644.m_YAdvance = i2645[3]
  return i2644
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2648 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2649 = data
  i2648.sourceFontFileName = i2649[0]
  i2648.sourceFontFileGUID = i2649[1]
  i2648.pointSizeSamplingMode = i2649[2]
  i2648.pointSize = i2649[3]
  i2648.padding = i2649[4]
  i2648.packingMode = i2649[5]
  i2648.atlasWidth = i2649[6]
  i2648.atlasHeight = i2649[7]
  i2648.characterSetSelectionMode = i2649[8]
  i2648.characterSequence = i2649[9]
  i2648.referencedFontAssetGUID = i2649[10]
  i2648.referencedTextAssetGUID = i2649[11]
  i2648.fontStyle = i2649[12]
  i2648.fontStyleModifier = i2649[13]
  i2648.renderMode = i2649[14]
  i2648.includeFontFeatures = !!i2649[15]
  return i2648
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2652 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2653 = data
  request.r(i2653[0], i2653[1], 0, i2652, 'regularTypeface')
  request.r(i2653[2], i2653[3], 0, i2652, 'italicTypeface')
  return i2652
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2654 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2655 = data
  i2654.useSafeMode = !!i2655[0]
  i2654.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2655[1], i2654.safeModeOptions)
  i2654.timeScale = i2655[2]
  i2654.unscaledTimeScale = i2655[3]
  i2654.useSmoothDeltaTime = !!i2655[4]
  i2654.maxSmoothUnscaledTime = i2655[5]
  i2654.rewindCallbackMode = i2655[6]
  i2654.showUnityEditorReport = !!i2655[7]
  i2654.logBehaviour = i2655[8]
  i2654.drawGizmos = !!i2655[9]
  i2654.defaultRecyclable = !!i2655[10]
  i2654.defaultAutoPlay = i2655[11]
  i2654.defaultUpdateType = i2655[12]
  i2654.defaultTimeScaleIndependent = !!i2655[13]
  i2654.defaultEaseType = i2655[14]
  i2654.defaultEaseOvershootOrAmplitude = i2655[15]
  i2654.defaultEasePeriod = i2655[16]
  i2654.defaultAutoKill = !!i2655[17]
  i2654.defaultLoopType = i2655[18]
  i2654.debugMode = !!i2655[19]
  i2654.debugStoreTargetId = !!i2655[20]
  i2654.showPreviewPanel = !!i2655[21]
  i2654.storeSettingsLocation = i2655[22]
  i2654.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2655[23], i2654.modules)
  i2654.createASMDEF = !!i2655[24]
  i2654.showPlayingTweens = !!i2655[25]
  i2654.showPausedTweens = !!i2655[26]
  return i2654
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2656 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2657 = data
  i2656.logBehaviour = i2657[0]
  i2656.nestedTweenFailureBehaviour = i2657[1]
  return i2656
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2658 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2659 = data
  i2658.showPanel = !!i2659[0]
  i2658.audioEnabled = !!i2659[1]
  i2658.physicsEnabled = !!i2659[2]
  i2658.physics2DEnabled = !!i2659[3]
  i2658.spriteEnabled = !!i2659[4]
  i2658.uiEnabled = !!i2659[5]
  i2658.textMeshProEnabled = !!i2659[6]
  i2658.tk2DEnabled = !!i2659[7]
  i2658.deAudioEnabled = !!i2659[8]
  i2658.deUnityExtendedEnabled = !!i2659[9]
  i2658.epoOutlineEnabled = !!i2659[10]
  return i2658
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2660 = root || request.c( 'TMPro.TMP_Settings' )
  var i2661 = data
  i2660.m_enableWordWrapping = !!i2661[0]
  i2660.m_enableKerning = !!i2661[1]
  i2660.m_enableExtraPadding = !!i2661[2]
  i2660.m_enableTintAllSprites = !!i2661[3]
  i2660.m_enableParseEscapeCharacters = !!i2661[4]
  i2660.m_EnableRaycastTarget = !!i2661[5]
  i2660.m_GetFontFeaturesAtRuntime = !!i2661[6]
  i2660.m_missingGlyphCharacter = i2661[7]
  i2660.m_warningsDisabled = !!i2661[8]
  request.r(i2661[9], i2661[10], 0, i2660, 'm_defaultFontAsset')
  i2660.m_defaultFontAssetPath = i2661[11]
  i2660.m_defaultFontSize = i2661[12]
  i2660.m_defaultAutoSizeMinRatio = i2661[13]
  i2660.m_defaultAutoSizeMaxRatio = i2661[14]
  i2660.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2661[15], i2661[16] )
  i2660.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2661[17], i2661[18] )
  i2660.m_autoSizeTextContainer = !!i2661[19]
  i2660.m_IsTextObjectScaleStatic = !!i2661[20]
  var i2663 = i2661[21]
  var i2662 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2663.length; i += 2) {
  request.r(i2663[i + 0], i2663[i + 1], 1, i2662, '')
  }
  i2660.m_fallbackFontAssets = i2662
  i2660.m_matchMaterialPreset = !!i2661[22]
  request.r(i2661[23], i2661[24], 0, i2660, 'm_defaultSpriteAsset')
  i2660.m_defaultSpriteAssetPath = i2661[25]
  i2660.m_enableEmojiSupport = !!i2661[26]
  i2660.m_MissingCharacterSpriteUnicode = i2661[27]
  i2660.m_defaultColorGradientPresetsPath = i2661[28]
  request.r(i2661[29], i2661[30], 0, i2660, 'm_defaultStyleSheet')
  i2660.m_StyleSheetsResourcePath = i2661[31]
  request.r(i2661[32], i2661[33], 0, i2660, 'm_leadingCharacters')
  request.r(i2661[34], i2661[35], 0, i2660, 'm_followingCharacters')
  i2660.m_UseModernHangulLineBreakingRules = !!i2661[36]
  return i2660
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2664 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2665 = data
  i2664.hashCode = i2665[0]
  request.r(i2665[1], i2665[2], 0, i2664, 'material')
  i2664.materialHashCode = i2665[3]
  request.r(i2665[4], i2665[5], 0, i2664, 'spriteSheet')
  var i2667 = i2665[6]
  var i2666 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2667.length; i += 1) {
    i2666.add(request.d('TMPro.TMP_Sprite', i2667[i + 0]));
  }
  i2664.spriteInfoList = i2666
  var i2669 = i2665[7]
  var i2668 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2669.length; i += 2) {
  request.r(i2669[i + 0], i2669[i + 1], 1, i2668, '')
  }
  i2664.fallbackSpriteAssets = i2668
  i2664.m_Version = i2665[8]
  i2664.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2665[9], i2664.m_FaceInfo)
  var i2671 = i2665[10]
  var i2670 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2671.length; i += 1) {
    i2670.add(request.d('TMPro.TMP_SpriteCharacter', i2671[i + 0]));
  }
  i2664.m_SpriteCharacterTable = i2670
  var i2673 = i2665[11]
  var i2672 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2673.length; i += 1) {
    i2672.add(request.d('TMPro.TMP_SpriteGlyph', i2673[i + 0]));
  }
  i2664.m_SpriteGlyphTable = i2672
  return i2664
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2676 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2677 = data
  i2676.name = i2677[0]
  i2676.hashCode = i2677[1]
  i2676.unicode = i2677[2]
  i2676.pivot = new pc.Vec2( i2677[3], i2677[4] )
  request.r(i2677[5], i2677[6], 0, i2676, 'sprite')
  i2676.id = i2677[7]
  i2676.x = i2677[8]
  i2676.y = i2677[9]
  i2676.width = i2677[10]
  i2676.height = i2677[11]
  i2676.xOffset = i2677[12]
  i2676.yOffset = i2677[13]
  i2676.xAdvance = i2677[14]
  i2676.scale = i2677[15]
  return i2676
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2682 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2683 = data
  i2682.m_Name = i2683[0]
  i2682.m_HashCode = i2683[1]
  i2682.m_ElementType = i2683[2]
  i2682.m_Unicode = i2683[3]
  i2682.m_GlyphIndex = i2683[4]
  i2682.m_Scale = i2683[5]
  return i2682
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2686 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2687 = data
  request.r(i2687[0], i2687[1], 0, i2686, 'sprite')
  i2686.m_Index = i2687[2]
  i2686.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2687[3], i2686.m_Metrics)
  i2686.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2687[4], i2686.m_GlyphRect)
  i2686.m_Scale = i2687[5]
  i2686.m_AtlasIndex = i2687[6]
  i2686.m_ClassDefinitionType = i2687[7]
  return i2686
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2688 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2689 = data
  var i2691 = i2689[0]
  var i2690 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.add(request.d('TMPro.TMP_Style', i2691[i + 0]));
  }
  i2688.m_StyleList = i2690
  return i2688
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2694 = root || request.c( 'TMPro.TMP_Style' )
  var i2695 = data
  i2694.m_Name = i2695[0]
  i2694.m_HashCode = i2695[1]
  i2694.m_OpeningDefinition = i2695[2]
  i2694.m_ClosingDefinition = i2695[3]
  i2694.m_OpeningTagArray = i2695[4]
  i2694.m_ClosingTagArray = i2695[5]
  i2694.m_OpeningTagUnicodeArray = i2695[6]
  i2694.m_ClosingTagUnicodeArray = i2695[7]
  return i2694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2697 = data
  var i2699 = i2697[0]
  var i2698 = []
  for(var i = 0; i < i2699.length; i += 1) {
    i2698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2699[i + 0]) );
  }
  i2696.files = i2698
  i2696.componentToPrefabIds = i2697[1]
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2703 = data
  i2702.path = i2703[0]
  request.r(i2703[1], i2703[2], 0, i2702, 'unityObject')
  return i2702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2705 = data
  var i2707 = i2705[0]
  var i2706 = []
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2707[i + 0]) );
  }
  i2704.scriptsExecutionOrder = i2706
  var i2709 = i2705[1]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2709[i + 0]) );
  }
  i2704.sortingLayers = i2708
  var i2711 = i2705[2]
  var i2710 = []
  for(var i = 0; i < i2711.length; i += 1) {
    i2710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2711[i + 0]) );
  }
  i2704.cullingLayers = i2710
  i2704.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2705[3], i2704.timeSettings)
  i2704.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2705[4], i2704.physicsSettings)
  i2704.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2705[5], i2704.physics2DSettings)
  i2704.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2705[6], i2704.qualitySettings)
  i2704.enableRealtimeShadows = !!i2705[7]
  i2704.enableAutoInstancing = !!i2705[8]
  i2704.enableDynamicBatching = !!i2705[9]
  i2704.lightmapEncodingQuality = i2705[10]
  i2704.desiredColorSpace = i2705[11]
  var i2713 = i2705[12]
  var i2712 = []
  for(var i = 0; i < i2713.length; i += 1) {
    i2712.push( i2713[i + 0] );
  }
  i2704.allTags = i2712
  return i2704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2717 = data
  i2716.name = i2717[0]
  i2716.value = i2717[1]
  return i2716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2721 = data
  i2720.id = i2721[0]
  i2720.name = i2721[1]
  i2720.value = i2721[2]
  return i2720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2725 = data
  i2724.id = i2725[0]
  i2724.name = i2725[1]
  return i2724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2727 = data
  i2726.fixedDeltaTime = i2727[0]
  i2726.maximumDeltaTime = i2727[1]
  i2726.timeScale = i2727[2]
  i2726.maximumParticleTimestep = i2727[3]
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2729 = data
  i2728.gravity = new pc.Vec3( i2729[0], i2729[1], i2729[2] )
  i2728.defaultSolverIterations = i2729[3]
  i2728.bounceThreshold = i2729[4]
  i2728.autoSyncTransforms = !!i2729[5]
  i2728.autoSimulation = !!i2729[6]
  var i2731 = i2729[7]
  var i2730 = []
  for(var i = 0; i < i2731.length; i += 1) {
    i2730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2731[i + 0]) );
  }
  i2728.collisionMatrix = i2730
  return i2728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2735 = data
  i2734.enabled = !!i2735[0]
  i2734.layerId = i2735[1]
  i2734.otherLayerId = i2735[2]
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2737 = data
  request.r(i2737[0], i2737[1], 0, i2736, 'material')
  i2736.gravity = new pc.Vec2( i2737[2], i2737[3] )
  i2736.positionIterations = i2737[4]
  i2736.velocityIterations = i2737[5]
  i2736.velocityThreshold = i2737[6]
  i2736.maxLinearCorrection = i2737[7]
  i2736.maxAngularCorrection = i2737[8]
  i2736.maxTranslationSpeed = i2737[9]
  i2736.maxRotationSpeed = i2737[10]
  i2736.baumgarteScale = i2737[11]
  i2736.baumgarteTOIScale = i2737[12]
  i2736.timeToSleep = i2737[13]
  i2736.linearSleepTolerance = i2737[14]
  i2736.angularSleepTolerance = i2737[15]
  i2736.defaultContactOffset = i2737[16]
  i2736.autoSimulation = !!i2737[17]
  i2736.queriesHitTriggers = !!i2737[18]
  i2736.queriesStartInColliders = !!i2737[19]
  i2736.callbacksOnDisable = !!i2737[20]
  i2736.reuseCollisionCallbacks = !!i2737[21]
  i2736.autoSyncTransforms = !!i2737[22]
  var i2739 = i2737[23]
  var i2738 = []
  for(var i = 0; i < i2739.length; i += 1) {
    i2738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2739[i + 0]) );
  }
  i2736.collisionMatrix = i2738
  return i2736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2743 = data
  i2742.enabled = !!i2743[0]
  i2742.layerId = i2743[1]
  i2742.otherLayerId = i2743[2]
  return i2742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2745 = data
  var i2747 = i2745[0]
  var i2746 = []
  for(var i = 0; i < i2747.length; i += 1) {
    i2746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2747[i + 0]) );
  }
  i2744.qualityLevels = i2746
  var i2749 = i2745[1]
  var i2748 = []
  for(var i = 0; i < i2749.length; i += 1) {
    i2748.push( i2749[i + 0] );
  }
  i2744.names = i2748
  i2744.shadows = i2745[2]
  i2744.anisotropicFiltering = i2745[3]
  i2744.antiAliasing = i2745[4]
  i2744.lodBias = i2745[5]
  i2744.shadowCascades = i2745[6]
  i2744.shadowDistance = i2745[7]
  i2744.shadowmaskMode = i2745[8]
  i2744.shadowProjection = i2745[9]
  i2744.shadowResolution = i2745[10]
  i2744.softParticles = !!i2745[11]
  i2744.softVegetation = !!i2745[12]
  i2744.activeColorSpace = i2745[13]
  i2744.desiredColorSpace = i2745[14]
  i2744.masterTextureLimit = i2745[15]
  i2744.maxQueuedFrames = i2745[16]
  i2744.particleRaycastBudget = i2745[17]
  i2744.pixelLightCount = i2745[18]
  i2744.realtimeReflectionProbes = !!i2745[19]
  i2744.shadowCascade2Split = i2745[20]
  i2744.shadowCascade4Split = new pc.Vec3( i2745[21], i2745[22], i2745[23] )
  i2744.streamingMipmapsActive = !!i2745[24]
  i2744.vSyncCount = i2745[25]
  i2744.asyncUploadBufferSize = i2745[26]
  i2744.asyncUploadTimeSlice = i2745[27]
  i2744.billboardsFaceCameraPosition = !!i2745[28]
  i2744.shadowNearPlaneOffset = i2745[29]
  i2744.streamingMipmapsMemoryBudget = i2745[30]
  i2744.maximumLODLevel = i2745[31]
  i2744.streamingMipmapsAddAllCameras = !!i2745[32]
  i2744.streamingMipmapsMaxLevelReduction = i2745[33]
  i2744.streamingMipmapsRenderersPerFrame = i2745[34]
  i2744.resolutionScalingFixedDPIFactor = i2745[35]
  i2744.streamingMipmapsMaxFileIORequests = i2745[36]
  i2744.currentQualityLevel = i2745[37]
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2753 = data
  i2752.name = i2753[0]
  var i2755 = i2753[1]
  var i2754 = []
  for(var i = 0; i < i2755.length; i += 1) {
    i2754.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2755[i + 0]) );
  }
  i2752.tos = i2754
  var i2757 = i2753[2]
  var i2756 = []
  for(var i = 0; i < i2757.length; i += 1) {
    i2756.push( i2757[i + 0] );
  }
  i2752.constant = i2756
  i2752.isValid = !!i2753[3]
  i2752.isHuman = !!i2753[4]
  i2752.hasRootMotion = !!i2753[5]
  return i2752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2761 = data
  i2760.hash = i2761[0]
  i2760.path = i2761[1]
  return i2760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2765 = data
  i2764.weight = i2765[0]
  i2764.vertices = i2765[1]
  i2764.normals = i2765[2]
  i2764.tangents = i2765[3]
  return i2764
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2766 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2767 = data
  i2766.xPlacement = i2767[0]
  i2766.yPlacement = i2767[1]
  i2766.xAdvance = i2767[2]
  i2766.yAdvance = i2767[3]
  return i2766
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[9],"83":[35],"84":[1],"85":[1],"86":[1],"87":[1],"88":[1],"89":[1],"90":[1],"91":[92],"93":[92],"94":[92],"95":[92],"96":[92],"97":[92],"98":[92],"99":[92],"100":[92],"101":[92],"102":[92],"103":[92],"104":[92],"105":[35],"106":[13],"107":[108],"109":[108],"43":[29],"28":[2],"110":[2],"7":[2],"16":[111],"112":[29],"67":[13,29],"50":[29,30],"113":[29],"114":[30,29],"115":[13],"116":[30,29],"117":[29],"118":[119],"120":[29],"121":[29],"45":[43],"32":[30,29],"122":[29],"44":[43],"48":[29],"123":[29],"47":[29],"124":[29],"125":[29],"126":[29],"127":[29],"128":[29],"129":[29],"130":[30,29],"131":[29],"132":[29],"133":[29],"66":[29],"134":[30,29],"135":[29],"136":[57],"137":[57],"58":[57],"138":[57],"139":[35],"140":[35],"141":[119],"142":[119],"143":[29],"144":[35],"145":[35],"146":[147]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Rigidbody","UnityEngine.CharacterController","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.MonoBehaviour","PlayerController","Player","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.Shader","UnityEngine.Texture2D","DeathObstacleEffect","UnityEngine.BoxCollider","LocalRotationController","UnityEngine.MeshCollider","BasicPushObstacleEffect","RotaterPushObstacleEffect","UnityEngine.CapsuleCollider","ShiningObstacleEffect","UnityEngine.ParticleSystem","PatrolMovementController","UnityEngine.ParticleSystemRenderer","CoinCollectible","BotController","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","BombPrefab","UnityEngine.Camera","UnityEngine.AudioListener","CameraFollow","FOVCalculator","SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","RankManager","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Joystick","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.ContentSizeFitter","DeathCounter","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","CoinManager","UnityEngine.GameObject","UnityEngine.UI.Button","GameManager","PowerupManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","FinishLine","PowerUp","BackgroundMusic","NodeManager","AINode","UnityEngine.Cubemap","WallPainter","UnityEngine.UI.Slider","TMPro.TextMeshPro","UnityEngine.AnimationClip","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CharacterBaseController","ObstacleBase","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Light"]

Deserializers.unityVersion = "2021.3.45f1";

Deserializers.productName = "PanteonDemo";

Deserializers.lunaInitializationTime = "11/07/2024 13:58:49";

Deserializers.lunaDaysRunning = "3.3";

Deserializers.lunaVersion = "6.2.0";

Deserializers.lunaSHA = "7963e9fed253d218ae1c5298f104efd7e457ea14";

Deserializers.creativeName = "iki";

Deserializers.lunaAppID = "0";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4824";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.PanteonDemo";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "af75a83e-5cbc-4254-a793-b8629b0413f9";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Rendering","Universal","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

