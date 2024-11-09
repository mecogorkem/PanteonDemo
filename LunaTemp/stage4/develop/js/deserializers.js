var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2046 = root || request.c( 'UnityEngine.JointSpring' )
  var i2047 = data
  i2046.spring = i2047[0]
  i2046.damper = i2047[1]
  i2046.targetPosition = i2047[2]
  return i2046
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2048 = root || request.c( 'UnityEngine.JointMotor' )
  var i2049 = data
  i2048.m_TargetVelocity = i2049[0]
  i2048.m_Force = i2049[1]
  i2048.m_FreeSpin = i2049[2]
  return i2048
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2050 = root || request.c( 'UnityEngine.JointLimits' )
  var i2051 = data
  i2050.m_Min = i2051[0]
  i2050.m_Max = i2051[1]
  i2050.m_Bounciness = i2051[2]
  i2050.m_BounceMinVelocity = i2051[3]
  i2050.m_ContactDistance = i2051[4]
  i2050.minBounce = i2051[5]
  i2050.maxBounce = i2051[6]
  return i2050
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2052 = root || request.c( 'UnityEngine.JointDrive' )
  var i2053 = data
  i2052.m_PositionSpring = i2053[0]
  i2052.m_PositionDamper = i2053[1]
  i2052.m_MaximumForce = i2053[2]
  return i2052
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2054 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2055 = data
  i2054.m_Spring = i2055[0]
  i2054.m_Damper = i2055[1]
  return i2054
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2056 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2057 = data
  i2056.m_Limit = i2057[0]
  i2056.m_Bounciness = i2057[1]
  i2056.m_ContactDistance = i2057[2]
  return i2056
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2058 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2059 = data
  i2058.m_ExtremumSlip = i2059[0]
  i2058.m_ExtremumValue = i2059[1]
  i2058.m_AsymptoteSlip = i2059[2]
  i2058.m_AsymptoteValue = i2059[3]
  i2058.m_Stiffness = i2059[4]
  return i2058
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2060 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2061 = data
  i2060.m_LowerAngle = i2061[0]
  i2060.m_UpperAngle = i2061[1]
  return i2060
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2062 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2063 = data
  i2062.m_MotorSpeed = i2063[0]
  i2062.m_MaximumMotorTorque = i2063[1]
  return i2062
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2064 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2065 = data
  i2064.m_DampingRatio = i2065[0]
  i2064.m_Frequency = i2065[1]
  i2064.m_Angle = i2065[2]
  return i2064
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2066 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2067 = data
  i2066.m_LowerTranslation = i2067[0]
  i2066.m_UpperTranslation = i2067[1]
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2069 = data
  i2068.position = new pc.Vec3( i2069[0], i2069[1], i2069[2] )
  i2068.scale = new pc.Vec3( i2069[3], i2069[4], i2069[5] )
  i2068.rotation = new pc.Quat(i2069[6], i2069[7], i2069[8], i2069[9])
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2071 = data
  request.r(i2071[0], i2071[1], 0, i2070, 'sharedMesh')
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2073 = data
  request.r(i2073[0], i2073[1], 0, i2072, 'additionalVertexStreams')
  i2072.enabled = !!i2073[2]
  request.r(i2073[3], i2073[4], 0, i2072, 'sharedMaterial')
  var i2075 = i2073[5]
  var i2074 = []
  for(var i = 0; i < i2075.length; i += 2) {
  request.r(i2075[i + 0], i2075[i + 1], 2, i2074, '')
  }
  i2072.sharedMaterials = i2074
  i2072.receiveShadows = !!i2073[6]
  i2072.shadowCastingMode = i2073[7]
  i2072.sortingLayerID = i2073[8]
  i2072.sortingOrder = i2073[9]
  i2072.lightmapIndex = i2073[10]
  i2072.lightmapSceneIndex = i2073[11]
  i2072.lightmapScaleOffset = new pc.Vec4( i2073[12], i2073[13], i2073[14], i2073[15] )
  i2072.lightProbeUsage = i2073[16]
  i2072.reflectionProbeUsage = i2073[17]
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2079 = data
  i2078.name = i2079[0]
  i2078.tagId = i2079[1]
  i2078.enabled = !!i2079[2]
  i2078.isStatic = !!i2079[3]
  i2078.layer = i2079[4]
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2081 = data
  i2080.name = i2081[0]
  i2080.halfPrecision = !!i2081[1]
  i2080.useUInt32IndexFormat = !!i2081[2]
  i2080.vertexCount = i2081[3]
  i2080.aabb = i2081[4]
  var i2083 = i2081[5]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.push( !!i2083[i + 0] );
  }
  i2080.streams = i2082
  i2080.vertices = i2081[6]
  var i2085 = i2081[7]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 1) {
    i2084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2085[i + 0]) );
  }
  i2080.subMeshes = i2084
  var i2087 = i2081[8]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 16) {
    i2086.push( new pc.Mat4().setData(i2087[i + 0], i2087[i + 1], i2087[i + 2], i2087[i + 3],  i2087[i + 4], i2087[i + 5], i2087[i + 6], i2087[i + 7],  i2087[i + 8], i2087[i + 9], i2087[i + 10], i2087[i + 11],  i2087[i + 12], i2087[i + 13], i2087[i + 14], i2087[i + 15]) );
  }
  i2080.bindposes = i2086
  var i2089 = i2081[9]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 1) {
    i2088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2089[i + 0]) );
  }
  i2080.blendShapes = i2088
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2095 = data
  i2094.triangles = i2095[0]
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2101 = data
  i2100.name = i2101[0]
  var i2103 = i2101[1]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2103[i + 0]) );
  }
  i2100.frames = i2102
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2104 = root || new pc.UnityMaterial()
  var i2105 = data
  i2104.name = i2105[0]
  request.r(i2105[1], i2105[2], 0, i2104, 'shader')
  i2104.renderQueue = i2105[3]
  i2104.enableInstancing = !!i2105[4]
  var i2107 = i2105[5]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2107[i + 0]) );
  }
  i2104.floatParameters = i2106
  var i2109 = i2105[6]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2109[i + 0]) );
  }
  i2104.colorParameters = i2108
  var i2111 = i2105[7]
  var i2110 = []
  for(var i = 0; i < i2111.length; i += 1) {
    i2110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2111[i + 0]) );
  }
  i2104.vectorParameters = i2110
  var i2113 = i2105[8]
  var i2112 = []
  for(var i = 0; i < i2113.length; i += 1) {
    i2112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2113[i + 0]) );
  }
  i2104.textureParameters = i2112
  var i2115 = i2105[9]
  var i2114 = []
  for(var i = 0; i < i2115.length; i += 1) {
    i2114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2115[i + 0]) );
  }
  i2104.materialFlags = i2114
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2119 = data
  i2118.name = i2119[0]
  i2118.value = i2119[1]
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2123 = data
  i2122.name = i2123[0]
  i2122.value = new pc.Color(i2123[1], i2123[2], i2123[3], i2123[4])
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2127 = data
  i2126.name = i2127[0]
  i2126.value = new pc.Vec4( i2127[1], i2127[2], i2127[3], i2127[4] )
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2131 = data
  i2130.name = i2131[0]
  request.r(i2131[1], i2131[2], 0, i2130, 'value')
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2135 = data
  i2134.name = i2135[0]
  i2134.enabled = !!i2135[1]
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2137 = data
  i2136.name = i2137[0]
  i2136.width = i2137[1]
  i2136.height = i2137[2]
  i2136.mipmapCount = i2137[3]
  i2136.anisoLevel = i2137[4]
  i2136.filterMode = i2137[5]
  i2136.hdr = !!i2137[6]
  i2136.format = i2137[7]
  i2136.wrapMode = i2137[8]
  i2136.alphaIsTransparency = !!i2137[9]
  i2136.alphaSource = i2137[10]
  i2136.graphicsFormat = i2137[11]
  i2136.sRGBTexture = !!i2137[12]
  i2136.desiredColorSpace = i2137[13]
  i2136.wrapU = i2137[14]
  i2136.wrapV = i2137[15]
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2139 = data
  i2138.center = new pc.Vec3( i2139[0], i2139[1], i2139[2] )
  i2138.size = new pc.Vec3( i2139[3], i2139[4], i2139[5] )
  i2138.enabled = !!i2139[6]
  i2138.isTrigger = !!i2139[7]
  request.r(i2139[8], i2139[9], 0, i2138, 'material')
  return i2138
}

Deserializers["LocalRotationController"] = function (request, data, root) {
  var i2140 = root || request.c( 'LocalRotationController' )
  var i2141 = data
  i2140.rotationSpeed = new pc.Vec3( i2141[0], i2141[1], i2141[2] )
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2143 = data
  i2142.enabled = !!i2143[0]
  i2142.isTrigger = !!i2143[1]
  request.r(i2143[2], i2143[3], 0, i2142, 'material')
  request.r(i2143[4], i2143[5], 0, i2142, 'sharedMesh')
  i2142.convex = !!i2143[6]
  return i2142
}

Deserializers["DeathObstacleEffect"] = function (request, data, root) {
  var i2144 = root || request.c( 'DeathObstacleEffect' )
  var i2145 = data
  return i2144
}

Deserializers["BasicPushObstacleEffect"] = function (request, data, root) {
  var i2146 = root || request.c( 'BasicPushObstacleEffect' )
  var i2147 = data
  i2146.pushVector = new pc.Vec3( i2147[0], i2147[1], i2147[2] )
  return i2146
}

Deserializers["RotaterPushObstacleEffect"] = function (request, data, root) {
  var i2148 = root || request.c( 'RotaterPushObstacleEffect' )
  var i2149 = data
  i2148.pushForce = i2149[0]
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2151 = data
  i2150.center = new pc.Vec3( i2151[0], i2151[1], i2151[2] )
  i2150.radius = i2151[3]
  i2150.height = i2151[4]
  i2150.direction = i2151[5]
  i2150.enabled = !!i2151[6]
  i2150.isTrigger = !!i2151[7]
  request.r(i2151[8], i2151[9], 0, i2150, 'material')
  return i2150
}

Deserializers["ShiningObstacleEffect"] = function (request, data, root) {
  var i2152 = root || request.c( 'ShiningObstacleEffect' )
  var i2153 = data
  i2152.pushForce = i2153[0]
  request.r(i2153[1], i2153[2], 0, i2152, 'shineParticle')
  return i2152
}

Deserializers["PatrolMovementController"] = function (request, data, root) {
  var i2154 = root || request.c( 'PatrolMovementController' )
  var i2155 = data
  i2154.movementSpeed = new pc.Vec3( i2155[0], i2155[1], i2155[2] )
  i2154.minX = i2155[3]
  i2154.maxX = i2155[4]
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2157 = data
  i2156.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2157[0], i2156.main)
  i2156.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2157[1], i2156.colorBySpeed)
  i2156.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2157[2], i2156.colorOverLifetime)
  i2156.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2157[3], i2156.emission)
  i2156.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2157[4], i2156.rotationBySpeed)
  i2156.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2157[5], i2156.rotationOverLifetime)
  i2156.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2157[6], i2156.shape)
  i2156.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2157[7], i2156.sizeBySpeed)
  i2156.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2157[8], i2156.sizeOverLifetime)
  i2156.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2157[9], i2156.textureSheetAnimation)
  i2156.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2157[10], i2156.velocityOverLifetime)
  i2156.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2157[11], i2156.noise)
  i2156.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2157[12], i2156.inheritVelocity)
  i2156.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2157[13], i2156.forceOverLifetime)
  i2156.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2157[14], i2156.limitVelocityOverLifetime)
  i2156.useAutoRandomSeed = !!i2157[15]
  i2156.randomSeed = i2157[16]
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2158 = root || new pc.ParticleSystemMain()
  var i2159 = data
  i2158.duration = i2159[0]
  i2158.loop = !!i2159[1]
  i2158.prewarm = !!i2159[2]
  i2158.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2159[3], i2158.startDelay)
  i2158.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2159[4], i2158.startLifetime)
  i2158.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2159[5], i2158.startSpeed)
  i2158.startSize3D = !!i2159[6]
  i2158.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2159[7], i2158.startSizeX)
  i2158.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2159[8], i2158.startSizeY)
  i2158.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2159[9], i2158.startSizeZ)
  i2158.startRotation3D = !!i2159[10]
  i2158.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2159[11], i2158.startRotationX)
  i2158.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2159[12], i2158.startRotationY)
  i2158.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2159[13], i2158.startRotationZ)
  i2158.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2159[14], i2158.startColor)
  i2158.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2159[15], i2158.gravityModifier)
  i2158.simulationSpace = i2159[16]
  request.r(i2159[17], i2159[18], 0, i2158, 'customSimulationSpace')
  i2158.simulationSpeed = i2159[19]
  i2158.useUnscaledTime = !!i2159[20]
  i2158.scalingMode = i2159[21]
  i2158.playOnAwake = !!i2159[22]
  i2158.maxParticles = i2159[23]
  i2158.emitterVelocityMode = i2159[24]
  i2158.stopAction = i2159[25]
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2160 = root || new pc.MinMaxCurve()
  var i2161 = data
  i2160.mode = i2161[0]
  i2160.curveMin = new pc.AnimationCurve( { keys_flow: i2161[1] } )
  i2160.curveMax = new pc.AnimationCurve( { keys_flow: i2161[2] } )
  i2160.curveMultiplier = i2161[3]
  i2160.constantMin = i2161[4]
  i2160.constantMax = i2161[5]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2162 = root || new pc.MinMaxGradient()
  var i2163 = data
  i2162.mode = i2163[0]
  i2162.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2163[1], i2162.gradientMin)
  i2162.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2163[2], i2162.gradientMax)
  i2162.colorMin = new pc.Color(i2163[3], i2163[4], i2163[5], i2163[6])
  i2162.colorMax = new pc.Color(i2163[7], i2163[8], i2163[9], i2163[10])
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2165 = data
  i2164.mode = i2165[0]
  var i2167 = i2165[1]
  var i2166 = []
  for(var i = 0; i < i2167.length; i += 1) {
    i2166.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2167[i + 0]) );
  }
  i2164.colorKeys = i2166
  var i2169 = i2165[2]
  var i2168 = []
  for(var i = 0; i < i2169.length; i += 1) {
    i2168.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2169[i + 0]) );
  }
  i2164.alphaKeys = i2168
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2170 = root || new pc.ParticleSystemColorBySpeed()
  var i2171 = data
  i2170.enabled = !!i2171[0]
  i2170.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2171[1], i2170.color)
  i2170.range = new pc.Vec2( i2171[2], i2171[3] )
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2175 = data
  i2174.color = new pc.Color(i2175[0], i2175[1], i2175[2], i2175[3])
  i2174.time = i2175[4]
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2179 = data
  i2178.alpha = i2179[0]
  i2178.time = i2179[1]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2180 = root || new pc.ParticleSystemColorOverLifetime()
  var i2181 = data
  i2180.enabled = !!i2181[0]
  i2180.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2181[1], i2180.color)
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2182 = root || new pc.ParticleSystemEmitter()
  var i2183 = data
  i2182.enabled = !!i2183[0]
  i2182.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2183[1], i2182.rateOverTime)
  i2182.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2183[2], i2182.rateOverDistance)
  var i2185 = i2183[3]
  var i2184 = []
  for(var i = 0; i < i2185.length; i += 1) {
    i2184.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2185[i + 0]) );
  }
  i2182.bursts = i2184
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2188 = root || new pc.ParticleSystemBurst()
  var i2189 = data
  i2188.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[0], i2188.count)
  i2188.cycleCount = i2189[1]
  i2188.minCount = i2189[2]
  i2188.maxCount = i2189[3]
  i2188.repeatInterval = i2189[4]
  i2188.time = i2189[5]
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2190 = root || new pc.ParticleSystemRotationBySpeed()
  var i2191 = data
  i2190.enabled = !!i2191[0]
  i2190.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2191[1], i2190.x)
  i2190.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2191[2], i2190.y)
  i2190.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2191[3], i2190.z)
  i2190.separateAxes = !!i2191[4]
  i2190.range = new pc.Vec2( i2191[5], i2191[6] )
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2192 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2193 = data
  i2192.enabled = !!i2193[0]
  i2192.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2193[1], i2192.x)
  i2192.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2193[2], i2192.y)
  i2192.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2193[3], i2192.z)
  i2192.separateAxes = !!i2193[4]
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2194 = root || new pc.ParticleSystemShape()
  var i2195 = data
  i2194.enabled = !!i2195[0]
  i2194.shapeType = i2195[1]
  i2194.randomDirectionAmount = i2195[2]
  i2194.sphericalDirectionAmount = i2195[3]
  i2194.randomPositionAmount = i2195[4]
  i2194.alignToDirection = !!i2195[5]
  i2194.radius = i2195[6]
  i2194.radiusMode = i2195[7]
  i2194.radiusSpread = i2195[8]
  i2194.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[9], i2194.radiusSpeed)
  i2194.radiusThickness = i2195[10]
  i2194.angle = i2195[11]
  i2194.length = i2195[12]
  i2194.boxThickness = new pc.Vec3( i2195[13], i2195[14], i2195[15] )
  i2194.meshShapeType = i2195[16]
  request.r(i2195[17], i2195[18], 0, i2194, 'mesh')
  request.r(i2195[19], i2195[20], 0, i2194, 'meshRenderer')
  request.r(i2195[21], i2195[22], 0, i2194, 'skinnedMeshRenderer')
  i2194.useMeshMaterialIndex = !!i2195[23]
  i2194.meshMaterialIndex = i2195[24]
  i2194.useMeshColors = !!i2195[25]
  i2194.normalOffset = i2195[26]
  i2194.arc = i2195[27]
  i2194.arcMode = i2195[28]
  i2194.arcSpread = i2195[29]
  i2194.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[30], i2194.arcSpeed)
  i2194.donutRadius = i2195[31]
  i2194.position = new pc.Vec3( i2195[32], i2195[33], i2195[34] )
  i2194.rotation = new pc.Vec3( i2195[35], i2195[36], i2195[37] )
  i2194.scale = new pc.Vec3( i2195[38], i2195[39], i2195[40] )
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2196 = root || new pc.ParticleSystemSizeBySpeed()
  var i2197 = data
  i2196.enabled = !!i2197[0]
  i2196.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[1], i2196.x)
  i2196.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[2], i2196.y)
  i2196.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[3], i2196.z)
  i2196.separateAxes = !!i2197[4]
  i2196.range = new pc.Vec2( i2197[5], i2197[6] )
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2198 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2199 = data
  i2198.enabled = !!i2199[0]
  i2198.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[1], i2198.x)
  i2198.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[2], i2198.y)
  i2198.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[3], i2198.z)
  i2198.separateAxes = !!i2199[4]
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2200 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2201 = data
  i2200.enabled = !!i2201[0]
  i2200.mode = i2201[1]
  i2200.animation = i2201[2]
  i2200.numTilesX = i2201[3]
  i2200.numTilesY = i2201[4]
  i2200.useRandomRow = !!i2201[5]
  i2200.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[6], i2200.frameOverTime)
  i2200.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[7], i2200.startFrame)
  i2200.cycleCount = i2201[8]
  i2200.rowIndex = i2201[9]
  i2200.flipU = i2201[10]
  i2200.flipV = i2201[11]
  i2200.spriteCount = i2201[12]
  var i2203 = i2201[13]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 2) {
  request.r(i2203[i + 0], i2203[i + 1], 2, i2202, '')
  }
  i2200.sprites = i2202
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2206 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2207 = data
  i2206.enabled = !!i2207[0]
  i2206.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[1], i2206.x)
  i2206.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[2], i2206.y)
  i2206.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[3], i2206.z)
  i2206.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[4], i2206.radial)
  i2206.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[5], i2206.speedModifier)
  i2206.space = i2207[6]
  i2206.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[7], i2206.orbitalX)
  i2206.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[8], i2206.orbitalY)
  i2206.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[9], i2206.orbitalZ)
  i2206.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[10], i2206.orbitalOffsetX)
  i2206.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[11], i2206.orbitalOffsetY)
  i2206.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[12], i2206.orbitalOffsetZ)
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2208 = root || new pc.ParticleSystemNoise()
  var i2209 = data
  i2208.enabled = !!i2209[0]
  i2208.separateAxes = !!i2209[1]
  i2208.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[2], i2208.strengthX)
  i2208.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[3], i2208.strengthY)
  i2208.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[4], i2208.strengthZ)
  i2208.frequency = i2209[5]
  i2208.damping = !!i2209[6]
  i2208.octaveCount = i2209[7]
  i2208.octaveMultiplier = i2209[8]
  i2208.octaveScale = i2209[9]
  i2208.quality = i2209[10]
  i2208.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[11], i2208.scrollSpeed)
  i2208.scrollSpeedMultiplier = i2209[12]
  i2208.remapEnabled = !!i2209[13]
  i2208.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[14], i2208.remapX)
  i2208.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[15], i2208.remapY)
  i2208.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[16], i2208.remapZ)
  i2208.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[17], i2208.positionAmount)
  i2208.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[18], i2208.rotationAmount)
  i2208.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[19], i2208.sizeAmount)
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2210 = root || new pc.ParticleSystemInheritVelocity()
  var i2211 = data
  i2210.enabled = !!i2211[0]
  i2210.mode = i2211[1]
  i2210.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[2], i2210.curve)
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2212 = root || new pc.ParticleSystemForceOverLifetime()
  var i2213 = data
  i2212.enabled = !!i2213[0]
  i2212.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[1], i2212.x)
  i2212.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[2], i2212.y)
  i2212.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[3], i2212.z)
  i2212.space = i2213[4]
  i2212.randomized = !!i2213[5]
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2214 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2215 = data
  i2214.enabled = !!i2215[0]
  i2214.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[1], i2214.limit)
  i2214.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[2], i2214.limitX)
  i2214.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[3], i2214.limitY)
  i2214.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[4], i2214.limitZ)
  i2214.dampen = i2215[5]
  i2214.separateAxes = !!i2215[6]
  i2214.space = i2215[7]
  i2214.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[8], i2214.drag)
  i2214.multiplyDragByParticleSize = !!i2215[9]
  i2214.multiplyDragByParticleVelocity = !!i2215[10]
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2217 = data
  i2216.enabled = !!i2217[0]
  request.r(i2217[1], i2217[2], 0, i2216, 'sharedMaterial')
  var i2219 = i2217[3]
  var i2218 = []
  for(var i = 0; i < i2219.length; i += 2) {
  request.r(i2219[i + 0], i2219[i + 1], 2, i2218, '')
  }
  i2216.sharedMaterials = i2218
  i2216.receiveShadows = !!i2217[4]
  i2216.shadowCastingMode = i2217[5]
  i2216.sortingLayerID = i2217[6]
  i2216.sortingOrder = i2217[7]
  i2216.lightmapIndex = i2217[8]
  i2216.lightmapSceneIndex = i2217[9]
  i2216.lightmapScaleOffset = new pc.Vec4( i2217[10], i2217[11], i2217[12], i2217[13] )
  i2216.lightProbeUsage = i2217[14]
  i2216.reflectionProbeUsage = i2217[15]
  request.r(i2217[16], i2217[17], 0, i2216, 'mesh')
  i2216.meshCount = i2217[18]
  i2216.activeVertexStreamsCount = i2217[19]
  i2216.alignment = i2217[20]
  i2216.renderMode = i2217[21]
  i2216.sortMode = i2217[22]
  i2216.lengthScale = i2217[23]
  i2216.velocityScale = i2217[24]
  i2216.cameraVelocityScale = i2217[25]
  i2216.normalDirection = i2217[26]
  i2216.sortingFudge = i2217[27]
  i2216.minParticleSize = i2217[28]
  i2216.maxParticleSize = i2217[29]
  i2216.pivot = new pc.Vec3( i2217[30], i2217[31], i2217[32] )
  request.r(i2217[33], i2217[34], 0, i2216, 'trailMaterial')
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2221 = data
  i2220.mass = i2221[0]
  i2220.drag = i2221[1]
  i2220.angularDrag = i2221[2]
  i2220.useGravity = !!i2221[3]
  i2220.isKinematic = !!i2221[4]
  i2220.constraints = i2221[5]
  i2220.maxAngularVelocity = i2221[6]
  i2220.collisionDetectionMode = i2221[7]
  i2220.interpolation = i2221[8]
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i2223 = data
  i2222.enabled = !!i2223[0]
  i2222.center = new pc.Vec3( i2223[1], i2223[2], i2223[3] )
  i2222.radius = i2223[4]
  i2222.height = i2223[5]
  i2222.minMoveDistance = i2223[6]
  i2222.skinWidth = i2223[7]
  i2222.enableOverlapRecovery = !!i2223[8]
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2225 = data
  request.r(i2225[0], i2225[1], 0, i2224, 'animatorController')
  request.r(i2225[2], i2225[3], 0, i2224, 'avatar')
  i2224.updateMode = i2225[4]
  i2224.hasTransformHierarchy = !!i2225[5]
  i2224.applyRootMotion = !!i2225[6]
  var i2227 = i2225[7]
  var i2226 = []
  for(var i = 0; i < i2227.length; i += 2) {
  request.r(i2227[i + 0], i2227[i + 1], 2, i2226, '')
  }
  i2224.humanBones = i2226
  i2224.enabled = !!i2225[8]
  return i2224
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i2230 = root || request.c( 'PlayerController' )
  var i2231 = data
  request.r(i2231[0], i2231[1], 0, i2230, 'playerEndTransform')
  request.r(i2231[2], i2231[3], 0, i2230, 'playerGameCompleteTransform')
  i2230.MoveSpeed = i2231[4]
  i2230.SpeedChangeRate = i2231[5]
  i2230.RotationSmoothTime = i2231[6]
  i2230.gravity = i2231[7]
  i2230.fallThreshold = i2231[8]
  i2230.pushForceDecayRate = i2231[9]
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2233 = data
  i2232.enabled = !!i2233[0]
  request.r(i2233[1], i2233[2], 0, i2232, 'sharedMaterial')
  var i2235 = i2233[3]
  var i2234 = []
  for(var i = 0; i < i2235.length; i += 2) {
  request.r(i2235[i + 0], i2235[i + 1], 2, i2234, '')
  }
  i2232.sharedMaterials = i2234
  i2232.receiveShadows = !!i2233[4]
  i2232.shadowCastingMode = i2233[5]
  i2232.sortingLayerID = i2233[6]
  i2232.sortingOrder = i2233[7]
  i2232.lightmapIndex = i2233[8]
  i2232.lightmapSceneIndex = i2233[9]
  i2232.lightmapScaleOffset = new pc.Vec4( i2233[10], i2233[11], i2233[12], i2233[13] )
  i2232.lightProbeUsage = i2233[14]
  i2232.reflectionProbeUsage = i2233[15]
  request.r(i2233[16], i2233[17], 0, i2232, 'sharedMesh')
  var i2237 = i2233[18]
  var i2236 = []
  for(var i = 0; i < i2237.length; i += 2) {
  request.r(i2237[i + 0], i2237[i + 1], 2, i2236, '')
  }
  i2232.bones = i2236
  i2232.updateWhenOffscreen = !!i2233[19]
  i2232.localBounds = i2233[20]
  request.r(i2233[21], i2233[22], 0, i2232, 'rootBone')
  var i2239 = i2233[23]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2239[i + 0]) );
  }
  i2232.blendShapesWeights = i2238
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2243 = data
  i2242.weight = i2243[0]
  return i2242
}

Deserializers["BotController"] = function (request, data, root) {
  var i2244 = root || request.c( 'BotController' )
  var i2245 = data
  i2244.MoveSpeed = i2245[0]
  i2244.SpeedChangeRate = i2245[1]
  i2244.RotationSmoothTime = i2245[2]
  i2244.gravity = i2245[3]
  i2244.fallThreshold = i2245[4]
  i2244.pushForceDecayRate = i2245[5]
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2247 = data
  i2246.pivot = new pc.Vec2( i2247[0], i2247[1] )
  i2246.anchorMin = new pc.Vec2( i2247[2], i2247[3] )
  i2246.anchorMax = new pc.Vec2( i2247[4], i2247[5] )
  i2246.sizeDelta = new pc.Vec2( i2247[6], i2247[7] )
  i2246.anchoredPosition3D = new pc.Vec3( i2247[8], i2247[9], i2247[10] )
  i2246.rotation = new pc.Quat(i2247[11], i2247[12], i2247[13], i2247[14])
  i2246.scale = new pc.Vec3( i2247[15], i2247[16], i2247[17] )
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2249 = data
  i2248.cullTransparentMesh = !!i2249[0]
  return i2248
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2250 = root || request.c( 'UnityEngine.UI.Image' )
  var i2251 = data
  request.r(i2251[0], i2251[1], 0, i2250, 'm_Sprite')
  i2250.m_Type = i2251[2]
  i2250.m_PreserveAspect = !!i2251[3]
  i2250.m_FillCenter = !!i2251[4]
  i2250.m_FillMethod = i2251[5]
  i2250.m_FillAmount = i2251[6]
  i2250.m_FillClockwise = !!i2251[7]
  i2250.m_FillOrigin = i2251[8]
  i2250.m_UseSpriteMesh = !!i2251[9]
  i2250.m_PixelsPerUnitMultiplier = i2251[10]
  request.r(i2251[11], i2251[12], 0, i2250, 'm_Material')
  i2250.m_Maskable = !!i2251[13]
  i2250.m_Color = new pc.Color(i2251[14], i2251[15], i2251[16], i2251[17])
  i2250.m_RaycastTarget = !!i2251[18]
  i2250.m_RaycastPadding = new pc.Vec4( i2251[19], i2251[20], i2251[21], i2251[22] )
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2253 = data
  i2252.name = i2253[0]
  i2252.atlasId = i2253[1]
  i2252.mipmapCount = i2253[2]
  i2252.hdr = !!i2253[3]
  i2252.size = i2253[4]
  i2252.anisoLevel = i2253[5]
  i2252.filterMode = i2253[6]
  var i2255 = i2253[7]
  var i2254 = []
  for(var i = 0; i < i2255.length; i += 4) {
    i2254.push( UnityEngine.Rect.MinMaxRect(i2255[i + 0], i2255[i + 1], i2255[i + 2], i2255[i + 3]) );
  }
  i2252.rects = i2254
  i2252.wrapU = i2253[8]
  i2252.wrapV = i2253[9]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2259 = data
  i2258.name = i2259[0]
  i2258.index = i2259[1]
  i2258.startup = !!i2259[2]
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2261 = data
  i2260.enabled = !!i2261[0]
  i2260.aspect = i2261[1]
  i2260.orthographic = !!i2261[2]
  i2260.orthographicSize = i2261[3]
  i2260.backgroundColor = new pc.Color(i2261[4], i2261[5], i2261[6], i2261[7])
  i2260.nearClipPlane = i2261[8]
  i2260.farClipPlane = i2261[9]
  i2260.fieldOfView = i2261[10]
  i2260.depth = i2261[11]
  i2260.clearFlags = i2261[12]
  i2260.cullingMask = i2261[13]
  i2260.rect = i2261[14]
  request.r(i2261[15], i2261[16], 0, i2260, 'targetTexture')
  i2260.usePhysicalProperties = !!i2261[17]
  i2260.focalLength = i2261[18]
  i2260.sensorSize = new pc.Vec2( i2261[19], i2261[20] )
  i2260.lensShift = new pc.Vec2( i2261[21], i2261[22] )
  i2260.gateFit = i2261[23]
  i2260.commandBufferCount = i2261[24]
  i2260.cameraType = i2261[25]
  return i2260
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i2262 = root || request.c( 'CameraFollow' )
  var i2263 = data
  request.r(i2263[0], i2263[1], 0, i2262, 'target')
  request.r(i2263[2], i2263[3], 0, i2262, 'finishTarget')
  return i2262
}

Deserializers["FOVCalculator"] = function (request, data, root) {
  var i2264 = root || request.c( 'FOVCalculator' )
  var i2265 = data
  return i2264
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i2266 = root || request.c( 'SoundManager' )
  var i2267 = data
  request.r(i2267[0], i2267[1], 0, i2266, 'pushSound')
  request.r(i2267[2], i2267[3], 0, i2266, 'coinSound')
  request.r(i2267[4], i2267[5], 0, i2266, 'countdownSound')
  request.r(i2267[6], i2267[7], 0, i2266, 'botDeathSound')
  request.r(i2267[8], i2267[9], 0, i2266, 'coinFirstInteractionSound')
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2269 = data
  request.r(i2269[0], i2269[1], 0, i2268, 'clip')
  request.r(i2269[2], i2269[3], 0, i2268, 'outputAudioMixerGroup')
  i2268.playOnAwake = !!i2269[4]
  i2268.loop = !!i2269[5]
  i2268.time = i2269[6]
  i2268.volume = i2269[7]
  i2268.pitch = i2269[8]
  i2268.enabled = !!i2269[9]
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2271 = data
  i2270.enabled = !!i2271[0]
  i2270.planeDistance = i2271[1]
  i2270.referencePixelsPerUnit = i2271[2]
  i2270.isFallbackOverlay = !!i2271[3]
  i2270.renderMode = i2271[4]
  i2270.renderOrder = i2271[5]
  i2270.sortingLayerName = i2271[6]
  i2270.sortingOrder = i2271[7]
  i2270.scaleFactor = i2271[8]
  request.r(i2271[9], i2271[10], 0, i2270, 'worldCamera')
  i2270.overrideSorting = !!i2271[11]
  i2270.pixelPerfect = !!i2271[12]
  i2270.targetDisplay = i2271[13]
  i2270.overridePixelPerfect = !!i2271[14]
  return i2270
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2272 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2273 = data
  i2272.m_UiScaleMode = i2273[0]
  i2272.m_ReferencePixelsPerUnit = i2273[1]
  i2272.m_ScaleFactor = i2273[2]
  i2272.m_ReferenceResolution = new pc.Vec2( i2273[3], i2273[4] )
  i2272.m_ScreenMatchMode = i2273[5]
  i2272.m_MatchWidthOrHeight = i2273[6]
  i2272.m_PhysicalUnit = i2273[7]
  i2272.m_FallbackScreenDPI = i2273[8]
  i2272.m_DefaultSpriteDPI = i2273[9]
  i2272.m_DynamicPixelsPerUnit = i2273[10]
  i2272.m_PresetInfoIsWorld = !!i2273[11]
  return i2272
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2274 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2275 = data
  i2274.m_IgnoreReversedGraphics = !!i2275[0]
  i2274.m_BlockingObjects = i2275[1]
  i2274.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2275[2] )
  return i2274
}

Deserializers["Joystick"] = function (request, data, root) {
  var i2276 = root || request.c( 'Joystick' )
  var i2277 = data
  request.r(i2277[0], i2277[1], 0, i2276, 'joystickBackground')
  request.r(i2277[2], i2277[3], 0, i2276, 'joystickHandle')
  return i2276
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2278 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2279 = data
  i2278.m_Spacing = i2279[0]
  i2278.m_ChildForceExpandWidth = !!i2279[1]
  i2278.m_ChildForceExpandHeight = !!i2279[2]
  i2278.m_ChildControlWidth = !!i2279[3]
  i2278.m_ChildControlHeight = !!i2279[4]
  i2278.m_ChildScaleWidth = !!i2279[5]
  i2278.m_ChildScaleHeight = !!i2279[6]
  i2278.m_ReverseArrangement = !!i2279[7]
  i2278.m_Padding = UnityEngine.RectOffset.FromPaddings(i2279[8], i2279[9], i2279[10], i2279[11])
  i2278.m_ChildAlignment = i2279[12]
  return i2278
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i2280 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i2281 = data
  i2280.m_HorizontalFit = i2281[0]
  i2280.m_VerticalFit = i2281[1]
  return i2280
}

Deserializers["DeathCounter"] = function (request, data, root) {
  var i2282 = root || request.c( 'DeathCounter' )
  var i2283 = data
  request.r(i2283[0], i2283[1], 0, i2282, 'deathCounterText')
  return i2282
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2284 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2285 = data
  i2284.m_hasFontAssetChanged = !!i2285[0]
  request.r(i2285[1], i2285[2], 0, i2284, 'm_baseMaterial')
  i2284.m_maskOffset = new pc.Vec4( i2285[3], i2285[4], i2285[5], i2285[6] )
  i2284.m_text = i2285[7]
  i2284.m_isRightToLeft = !!i2285[8]
  request.r(i2285[9], i2285[10], 0, i2284, 'm_fontAsset')
  request.r(i2285[11], i2285[12], 0, i2284, 'm_sharedMaterial')
  var i2287 = i2285[13]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 2) {
  request.r(i2287[i + 0], i2287[i + 1], 2, i2286, '')
  }
  i2284.m_fontSharedMaterials = i2286
  request.r(i2285[14], i2285[15], 0, i2284, 'm_fontMaterial')
  var i2289 = i2285[16]
  var i2288 = []
  for(var i = 0; i < i2289.length; i += 2) {
  request.r(i2289[i + 0], i2289[i + 1], 2, i2288, '')
  }
  i2284.m_fontMaterials = i2288
  i2284.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2285[17], i2285[18], i2285[19], i2285[20])
  i2284.m_fontColor = new pc.Color(i2285[21], i2285[22], i2285[23], i2285[24])
  i2284.m_enableVertexGradient = !!i2285[25]
  i2284.m_colorMode = i2285[26]
  i2284.m_fontColorGradient = request.d('TMPro.VertexGradient', i2285[27], i2284.m_fontColorGradient)
  request.r(i2285[28], i2285[29], 0, i2284, 'm_fontColorGradientPreset')
  request.r(i2285[30], i2285[31], 0, i2284, 'm_spriteAsset')
  i2284.m_tintAllSprites = !!i2285[32]
  request.r(i2285[33], i2285[34], 0, i2284, 'm_StyleSheet')
  i2284.m_TextStyleHashCode = i2285[35]
  i2284.m_overrideHtmlColors = !!i2285[36]
  i2284.m_faceColor = UnityEngine.Color32.ConstructColor(i2285[37], i2285[38], i2285[39], i2285[40])
  i2284.m_fontSize = i2285[41]
  i2284.m_fontSizeBase = i2285[42]
  i2284.m_fontWeight = i2285[43]
  i2284.m_enableAutoSizing = !!i2285[44]
  i2284.m_fontSizeMin = i2285[45]
  i2284.m_fontSizeMax = i2285[46]
  i2284.m_fontStyle = i2285[47]
  i2284.m_HorizontalAlignment = i2285[48]
  i2284.m_VerticalAlignment = i2285[49]
  i2284.m_textAlignment = i2285[50]
  i2284.m_characterSpacing = i2285[51]
  i2284.m_wordSpacing = i2285[52]
  i2284.m_lineSpacing = i2285[53]
  i2284.m_lineSpacingMax = i2285[54]
  i2284.m_paragraphSpacing = i2285[55]
  i2284.m_charWidthMaxAdj = i2285[56]
  i2284.m_enableWordWrapping = !!i2285[57]
  i2284.m_wordWrappingRatios = i2285[58]
  i2284.m_overflowMode = i2285[59]
  request.r(i2285[60], i2285[61], 0, i2284, 'm_linkedTextComponent')
  request.r(i2285[62], i2285[63], 0, i2284, 'parentLinkedComponent')
  i2284.m_enableKerning = !!i2285[64]
  i2284.m_enableExtraPadding = !!i2285[65]
  i2284.checkPaddingRequired = !!i2285[66]
  i2284.m_isRichText = !!i2285[67]
  i2284.m_parseCtrlCharacters = !!i2285[68]
  i2284.m_isOrthographic = !!i2285[69]
  i2284.m_isCullingEnabled = !!i2285[70]
  i2284.m_horizontalMapping = i2285[71]
  i2284.m_verticalMapping = i2285[72]
  i2284.m_uvLineOffset = i2285[73]
  i2284.m_geometrySortingOrder = i2285[74]
  i2284.m_IsTextObjectScaleStatic = !!i2285[75]
  i2284.m_VertexBufferAutoSizeReduction = !!i2285[76]
  i2284.m_useMaxVisibleDescender = !!i2285[77]
  i2284.m_pageToDisplay = i2285[78]
  i2284.m_margin = new pc.Vec4( i2285[79], i2285[80], i2285[81], i2285[82] )
  i2284.m_isUsingLegacyAnimationComponent = !!i2285[83]
  i2284.m_isVolumetricText = !!i2285[84]
  request.r(i2285[85], i2285[86], 0, i2284, 'm_Material')
  i2284.m_Maskable = !!i2285[87]
  i2284.m_Color = new pc.Color(i2285[88], i2285[89], i2285[90], i2285[91])
  i2284.m_RaycastTarget = !!i2285[92]
  i2284.m_RaycastPadding = new pc.Vec4( i2285[93], i2285[94], i2285[95], i2285[96] )
  return i2284
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2290 = root || request.c( 'TMPro.VertexGradient' )
  var i2291 = data
  i2290.topLeft = new pc.Color(i2291[0], i2291[1], i2291[2], i2291[3])
  i2290.topRight = new pc.Color(i2291[4], i2291[5], i2291[6], i2291[7])
  i2290.bottomLeft = new pc.Color(i2291[8], i2291[9], i2291[10], i2291[11])
  i2290.bottomRight = new pc.Color(i2291[12], i2291[13], i2291[14], i2291[15])
  return i2290
}

Deserializers["RankManager"] = function (request, data, root) {
  var i2292 = root || request.c( 'RankManager' )
  var i2293 = data
  request.r(i2293[0], i2293[1], 0, i2292, 'rankImage')
  var i2295 = i2293[2]
  var i2294 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2295.length; i += 2) {
  request.r(i2295[i + 0], i2295[i + 1], 1, i2294, '')
  }
  i2292.rankSprites = i2294
  var i2297 = i2293[3]
  var i2296 = new (System.Collections.Generic.List$1(Bridge.ns('CharacterBaseController')))
  for(var i = 0; i < i2297.length; i += 2) {
  request.r(i2297[i + 0], i2297[i + 1], 1, i2296, '')
  }
  i2292.racers = i2296
  return i2292
}

Deserializers["CoinManager"] = function (request, data, root) {
  var i2302 = root || request.c( 'CoinManager' )
  var i2303 = data
  request.r(i2303[0], i2303[1], 0, i2302, 'coinCounterText')
  request.r(i2303[2], i2303[3], 0, i2302, 'flyingCoinPrefab')
  request.r(i2303[4], i2303[5], 0, i2302, 'uiTarget')
  return i2302
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2304 = root || request.c( 'UnityEngine.UI.Button' )
  var i2305 = data
  i2304.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2305[0], i2304.m_OnClick)
  i2304.m_Navigation = request.d('UnityEngine.UI.Navigation', i2305[1], i2304.m_Navigation)
  i2304.m_Transition = i2305[2]
  i2304.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2305[3], i2304.m_Colors)
  i2304.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2305[4], i2304.m_SpriteState)
  i2304.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2305[5], i2304.m_AnimationTriggers)
  i2304.m_Interactable = !!i2305[6]
  request.r(i2305[7], i2305[8], 0, i2304, 'm_TargetGraphic')
  return i2304
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2306 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2307 = data
  i2306.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2307[0], i2306.m_PersistentCalls)
  return i2306
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2308 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2309 = data
  var i2311 = i2309[0]
  var i2310 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.add(request.d('UnityEngine.Events.PersistentCall', i2311[i + 0]));
  }
  i2308.m_Calls = i2310
  return i2308
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2314 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2315 = data
  request.r(i2315[0], i2315[1], 0, i2314, 'm_Target')
  i2314.m_TargetAssemblyTypeName = i2315[2]
  i2314.m_MethodName = i2315[3]
  i2314.m_Mode = i2315[4]
  i2314.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2315[5], i2314.m_Arguments)
  i2314.m_CallState = i2315[6]
  return i2314
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2316 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2317 = data
  request.r(i2317[0], i2317[1], 0, i2316, 'm_ObjectArgument')
  i2316.m_ObjectArgumentAssemblyTypeName = i2317[2]
  i2316.m_IntArgument = i2317[3]
  i2316.m_FloatArgument = i2317[4]
  i2316.m_StringArgument = i2317[5]
  i2316.m_BoolArgument = !!i2317[6]
  return i2316
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2318 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2319 = data
  i2318.m_Mode = i2319[0]
  i2318.m_WrapAround = !!i2319[1]
  request.r(i2319[2], i2319[3], 0, i2318, 'm_SelectOnUp')
  request.r(i2319[4], i2319[5], 0, i2318, 'm_SelectOnDown')
  request.r(i2319[6], i2319[7], 0, i2318, 'm_SelectOnLeft')
  request.r(i2319[8], i2319[9], 0, i2318, 'm_SelectOnRight')
  return i2318
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2320 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2321 = data
  i2320.m_NormalColor = new pc.Color(i2321[0], i2321[1], i2321[2], i2321[3])
  i2320.m_HighlightedColor = new pc.Color(i2321[4], i2321[5], i2321[6], i2321[7])
  i2320.m_PressedColor = new pc.Color(i2321[8], i2321[9], i2321[10], i2321[11])
  i2320.m_SelectedColor = new pc.Color(i2321[12], i2321[13], i2321[14], i2321[15])
  i2320.m_DisabledColor = new pc.Color(i2321[16], i2321[17], i2321[18], i2321[19])
  i2320.m_ColorMultiplier = i2321[20]
  i2320.m_FadeDuration = i2321[21]
  return i2320
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2322 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2323 = data
  request.r(i2323[0], i2323[1], 0, i2322, 'm_HighlightedSprite')
  request.r(i2323[2], i2323[3], 0, i2322, 'm_PressedSprite')
  request.r(i2323[4], i2323[5], 0, i2322, 'm_SelectedSprite')
  request.r(i2323[6], i2323[7], 0, i2322, 'm_DisabledSprite')
  return i2322
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2324 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2325 = data
  i2324.m_NormalTrigger = i2325[0]
  i2324.m_HighlightedTrigger = i2325[1]
  i2324.m_PressedTrigger = i2325[2]
  i2324.m_SelectedTrigger = i2325[3]
  i2324.m_DisabledTrigger = i2325[4]
  return i2324
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2326 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2327 = data
  request.r(i2327[0], i2327[1], 0, i2326, 'm_FirstSelected')
  i2326.m_sendNavigationEvents = !!i2327[2]
  i2326.m_DragThreshold = i2327[3]
  return i2326
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2328 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2329 = data
  i2328.m_HorizontalAxis = i2329[0]
  i2328.m_VerticalAxis = i2329[1]
  i2328.m_SubmitButton = i2329[2]
  i2328.m_CancelButton = i2329[3]
  i2328.m_InputActionsPerSecond = i2329[4]
  i2328.m_RepeatDelay = i2329[5]
  i2328.m_ForceModuleActive = !!i2329[6]
  i2328.m_SendPointerHoverToParent = !!i2329[7]
  return i2328
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2330 = root || request.c( 'GameManager' )
  var i2331 = data
  i2330.isRunnerGameStarted = !!i2331[0]
  i2330.isGameCompleted = !!i2331[1]
  request.r(i2331[2], i2331[3], 0, i2330, 'completeGameUI')
  request.r(i2331[4], i2331[5], 0, i2330, 'startGameUI')
  request.r(i2331[6], i2331[7], 0, i2330, 'starterText')
  request.r(i2331[8], i2331[9], 0, i2330, 'starterImage')
  var i2333 = i2331[10]
  var i2332 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2333.length; i += 2) {
  request.r(i2333[i + 0], i2333[i + 1], 1, i2332, '')
  }
  i2330.starterImages = i2332
  request.r(i2331[11], i2331[12], 0, i2330, 'tapToStartText')
  return i2330
}

Deserializers["FinishLine"] = function (request, data, root) {
  var i2334 = root || request.c( 'FinishLine' )
  var i2335 = data
  return i2334
}

Deserializers["CoinCollectible"] = function (request, data, root) {
  var i2336 = root || request.c( 'CoinCollectible' )
  var i2337 = data
  return i2336
}

Deserializers["NextTarget"] = function (request, data, root) {
  var i2338 = root || request.c( 'NextTarget' )
  var i2339 = data
  request.r(i2339[0], i2339[1], 0, i2338, 'nextTarget')
  return i2338
}

Deserializers["BackgroundMusic"] = function (request, data, root) {
  var i2340 = root || request.c( 'BackgroundMusic' )
  var i2341 = data
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2343 = data
  i2342.ambientIntensity = i2343[0]
  i2342.reflectionIntensity = i2343[1]
  i2342.ambientMode = i2343[2]
  i2342.ambientLight = new pc.Color(i2343[3], i2343[4], i2343[5], i2343[6])
  i2342.ambientSkyColor = new pc.Color(i2343[7], i2343[8], i2343[9], i2343[10])
  i2342.ambientGroundColor = new pc.Color(i2343[11], i2343[12], i2343[13], i2343[14])
  i2342.ambientEquatorColor = new pc.Color(i2343[15], i2343[16], i2343[17], i2343[18])
  i2342.fogColor = new pc.Color(i2343[19], i2343[20], i2343[21], i2343[22])
  i2342.fogEndDistance = i2343[23]
  i2342.fogStartDistance = i2343[24]
  i2342.fogDensity = i2343[25]
  i2342.fog = !!i2343[26]
  request.r(i2343[27], i2343[28], 0, i2342, 'skybox')
  i2342.fogMode = i2343[29]
  var i2345 = i2343[30]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 1) {
    i2344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2345[i + 0]) );
  }
  i2342.lightmaps = i2344
  i2342.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2343[31], i2342.lightProbes)
  i2342.lightmapsMode = i2343[32]
  i2342.mixedBakeMode = i2343[33]
  i2342.environmentLightingMode = i2343[34]
  i2342.ambientProbe = new pc.SphericalHarmonicsL2(i2343[35])
  i2342.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2343[36])
  i2342.useReferenceAmbientProbe = !!i2343[37]
  request.r(i2343[38], i2343[39], 0, i2342, 'customReflection')
  request.r(i2343[40], i2343[41], 0, i2342, 'defaultReflection')
  i2342.defaultReflectionMode = i2343[42]
  i2342.defaultReflectionResolution = i2343[43]
  i2342.sunLightObjectId = i2343[44]
  i2342.pixelLightCount = i2343[45]
  i2342.defaultReflectionHDR = !!i2343[46]
  i2342.hasLightDataAsset = !!i2343[47]
  i2342.hasManualGenerate = !!i2343[48]
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2349 = data
  request.r(i2349[0], i2349[1], 0, i2348, 'lightmapColor')
  request.r(i2349[2], i2349[3], 0, i2348, 'lightmapDirection')
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2350 = root || new UnityEngine.LightProbes()
  var i2351 = data
  return i2350
}

Deserializers["WallPainter"] = function (request, data, root) {
  var i2358 = root || request.c( 'WallPainter' )
  var i2359 = data
  request.r(i2359[0], i2359[1], 0, i2358, 'texturePaint')
  request.r(i2359[2], i2359[3], 0, i2358, 'brushSizeSlider')
  request.r(i2359[4], i2359[5], 0, i2358, 'paintedPercentageText')
  request.r(i2359[6], i2359[7], 0, i2358, 'yellowButton')
  request.r(i2359[8], i2359[9], 0, i2358, 'redButton')
  request.r(i2359[10], i2359[11], 0, i2358, 'blueButton')
  request.r(i2359[12], i2359[13], 0, i2358, 'canvas')
  request.r(i2359[14], i2359[15], 0, i2358, 'mainMaterial')
  request.r(i2359[16], i2359[17], 0, i2358, '_meshRenderer')
  request.r(i2359[18], i2359[19], 0, i2358, 'wallTransform')
  request.r(i2359[20], i2359[21], 0, i2358, '_audioSource')
  i2358.maxVolume = i2359[22]
  i2358.volumeFadeSpeed = i2359[23]
  return i2358
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2360 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2361 = data
  request.r(i2361[0], i2361[1], 0, i2360, 'm_FillRect')
  request.r(i2361[2], i2361[3], 0, i2360, 'm_HandleRect')
  i2360.m_Direction = i2361[4]
  i2360.m_MinValue = i2361[5]
  i2360.m_MaxValue = i2361[6]
  i2360.m_WholeNumbers = !!i2361[7]
  i2360.m_Value = i2361[8]
  i2360.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2361[9], i2360.m_OnValueChanged)
  i2360.m_Navigation = request.d('UnityEngine.UI.Navigation', i2361[10], i2360.m_Navigation)
  i2360.m_Transition = i2361[11]
  i2360.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2361[12], i2360.m_Colors)
  i2360.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2361[13], i2360.m_SpriteState)
  i2360.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2361[14], i2360.m_AnimationTriggers)
  i2360.m_Interactable = !!i2361[15]
  request.r(i2361[16], i2361[17], 0, i2360, 'm_TargetGraphic')
  return i2360
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2362 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2363 = data
  i2362.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2363[0], i2362.m_PersistentCalls)
  return i2362
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i2364 = root || request.c( 'TMPro.TextMeshPro' )
  var i2365 = data
  i2364._SortingLayer = i2365[0]
  i2364._SortingLayerID = i2365[1]
  i2364._SortingOrder = i2365[2]
  i2364.m_hasFontAssetChanged = !!i2365[3]
  request.r(i2365[4], i2365[5], 0, i2364, 'm_renderer')
  i2364.m_maskType = i2365[6]
  i2364.m_text = i2365[7]
  i2364.m_isRightToLeft = !!i2365[8]
  request.r(i2365[9], i2365[10], 0, i2364, 'm_fontAsset')
  request.r(i2365[11], i2365[12], 0, i2364, 'm_sharedMaterial')
  var i2367 = i2365[13]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 2) {
  request.r(i2367[i + 0], i2367[i + 1], 2, i2366, '')
  }
  i2364.m_fontSharedMaterials = i2366
  request.r(i2365[14], i2365[15], 0, i2364, 'm_fontMaterial')
  var i2369 = i2365[16]
  var i2368 = []
  for(var i = 0; i < i2369.length; i += 2) {
  request.r(i2369[i + 0], i2369[i + 1], 2, i2368, '')
  }
  i2364.m_fontMaterials = i2368
  i2364.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2365[17], i2365[18], i2365[19], i2365[20])
  i2364.m_fontColor = new pc.Color(i2365[21], i2365[22], i2365[23], i2365[24])
  i2364.m_enableVertexGradient = !!i2365[25]
  i2364.m_colorMode = i2365[26]
  i2364.m_fontColorGradient = request.d('TMPro.VertexGradient', i2365[27], i2364.m_fontColorGradient)
  request.r(i2365[28], i2365[29], 0, i2364, 'm_fontColorGradientPreset')
  request.r(i2365[30], i2365[31], 0, i2364, 'm_spriteAsset')
  i2364.m_tintAllSprites = !!i2365[32]
  request.r(i2365[33], i2365[34], 0, i2364, 'm_StyleSheet')
  i2364.m_TextStyleHashCode = i2365[35]
  i2364.m_overrideHtmlColors = !!i2365[36]
  i2364.m_faceColor = UnityEngine.Color32.ConstructColor(i2365[37], i2365[38], i2365[39], i2365[40])
  i2364.m_fontSize = i2365[41]
  i2364.m_fontSizeBase = i2365[42]
  i2364.m_fontWeight = i2365[43]
  i2364.m_enableAutoSizing = !!i2365[44]
  i2364.m_fontSizeMin = i2365[45]
  i2364.m_fontSizeMax = i2365[46]
  i2364.m_fontStyle = i2365[47]
  i2364.m_HorizontalAlignment = i2365[48]
  i2364.m_VerticalAlignment = i2365[49]
  i2364.m_textAlignment = i2365[50]
  i2364.m_characterSpacing = i2365[51]
  i2364.m_wordSpacing = i2365[52]
  i2364.m_lineSpacing = i2365[53]
  i2364.m_lineSpacingMax = i2365[54]
  i2364.m_paragraphSpacing = i2365[55]
  i2364.m_charWidthMaxAdj = i2365[56]
  i2364.m_enableWordWrapping = !!i2365[57]
  i2364.m_wordWrappingRatios = i2365[58]
  i2364.m_overflowMode = i2365[59]
  request.r(i2365[60], i2365[61], 0, i2364, 'm_linkedTextComponent')
  request.r(i2365[62], i2365[63], 0, i2364, 'parentLinkedComponent')
  i2364.m_enableKerning = !!i2365[64]
  i2364.m_enableExtraPadding = !!i2365[65]
  i2364.checkPaddingRequired = !!i2365[66]
  i2364.m_isRichText = !!i2365[67]
  i2364.m_parseCtrlCharacters = !!i2365[68]
  i2364.m_isOrthographic = !!i2365[69]
  i2364.m_isCullingEnabled = !!i2365[70]
  i2364.m_horizontalMapping = i2365[71]
  i2364.m_verticalMapping = i2365[72]
  i2364.m_uvLineOffset = i2365[73]
  i2364.m_geometrySortingOrder = i2365[74]
  i2364.m_IsTextObjectScaleStatic = !!i2365[75]
  i2364.m_VertexBufferAutoSizeReduction = !!i2365[76]
  i2364.m_useMaxVisibleDescender = !!i2365[77]
  i2364.m_pageToDisplay = i2365[78]
  i2364.m_margin = new pc.Vec4( i2365[79], i2365[80], i2365[81], i2365[82] )
  i2364.m_isUsingLegacyAnimationComponent = !!i2365[83]
  i2364.m_isVolumetricText = !!i2365[84]
  request.r(i2365[85], i2365[86], 0, i2364, 'm_Material')
  i2364.m_Maskable = !!i2365[87]
  i2364.m_Color = new pc.Color(i2365[88], i2365[89], i2365[90], i2365[91])
  i2364.m_RaycastTarget = !!i2365[92]
  i2364.m_RaycastPadding = new pc.Vec4( i2365[93], i2365[94], i2365[95], i2365[96] )
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2371 = data
  var i2373 = i2371[0]
  var i2372 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2373.length; i += 1) {
    i2372.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2373[i + 0]));
  }
  i2370.ShaderCompilationErrors = i2372
  i2370.name = i2371[1]
  i2370.guid = i2371[2]
  var i2375 = i2371[3]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.push( i2375[i + 0] );
  }
  i2370.shaderDefinedKeywords = i2374
  var i2377 = i2371[4]
  var i2376 = []
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2377[i + 0]) );
  }
  i2370.passes = i2376
  var i2379 = i2371[5]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 1) {
    i2378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2379[i + 0]) );
  }
  i2370.usePasses = i2378
  var i2381 = i2371[6]
  var i2380 = []
  for(var i = 0; i < i2381.length; i += 1) {
    i2380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2381[i + 0]) );
  }
  i2370.defaultParameterValues = i2380
  request.r(i2371[7], i2371[8], 0, i2370, 'unityFallbackShader')
  i2370.readDepth = !!i2371[9]
  i2370.isCreatedByShaderGraph = !!i2371[10]
  i2370.compiled = !!i2371[11]
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2385 = data
  i2384.shaderName = i2385[0]
  i2384.errorMessage = i2385[1]
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2390 = root || new pc.UnityShaderPass()
  var i2391 = data
  i2390.id = i2391[0]
  i2390.subShaderIndex = i2391[1]
  i2390.name = i2391[2]
  i2390.passType = i2391[3]
  i2390.grabPassTextureName = i2391[4]
  i2390.usePass = !!i2391[5]
  i2390.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2391[6], i2390.zTest)
  i2390.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2391[7], i2390.zWrite)
  i2390.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2391[8], i2390.culling)
  i2390.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2391[9], i2390.blending)
  i2390.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2391[10], i2390.alphaBlending)
  i2390.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2391[11], i2390.colorWriteMask)
  i2390.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2391[12], i2390.offsetUnits)
  i2390.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2391[13], i2390.offsetFactor)
  i2390.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2391[14], i2390.stencilRef)
  i2390.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2391[15], i2390.stencilReadMask)
  i2390.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2391[16], i2390.stencilWriteMask)
  i2390.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2391[17], i2390.stencilOp)
  i2390.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2391[18], i2390.stencilOpFront)
  i2390.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2391[19], i2390.stencilOpBack)
  var i2393 = i2391[20]
  var i2392 = []
  for(var i = 0; i < i2393.length; i += 1) {
    i2392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2393[i + 0]) );
  }
  i2390.tags = i2392
  var i2395 = i2391[21]
  var i2394 = []
  for(var i = 0; i < i2395.length; i += 1) {
    i2394.push( i2395[i + 0] );
  }
  i2390.passDefinedKeywords = i2394
  var i2397 = i2391[22]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 1) {
    i2396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2397[i + 0]) );
  }
  i2390.passDefinedKeywordGroups = i2396
  var i2399 = i2391[23]
  var i2398 = []
  for(var i = 0; i < i2399.length; i += 1) {
    i2398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2399[i + 0]) );
  }
  i2390.variants = i2398
  var i2401 = i2391[24]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2401[i + 0]) );
  }
  i2390.excludedVariants = i2400
  i2390.hasDepthReader = !!i2391[25]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2403 = data
  i2402.val = i2403[0]
  i2402.name = i2403[1]
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2405 = data
  i2404.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2405[0], i2404.src)
  i2404.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2405[1], i2404.dst)
  i2404.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2405[2], i2404.op)
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2407 = data
  i2406.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2407[0], i2406.pass)
  i2406.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2407[1], i2406.fail)
  i2406.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2407[2], i2406.zFail)
  i2406.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2407[3], i2406.comp)
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2411 = data
  i2410.name = i2411[0]
  i2410.value = i2411[1]
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2415 = data
  var i2417 = i2415[0]
  var i2416 = []
  for(var i = 0; i < i2417.length; i += 1) {
    i2416.push( i2417[i + 0] );
  }
  i2414.keywords = i2416
  i2414.hasDiscard = !!i2415[1]
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2421 = data
  i2420.passId = i2421[0]
  i2420.subShaderIndex = i2421[1]
  var i2423 = i2421[2]
  var i2422 = []
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.push( i2423[i + 0] );
  }
  i2420.keywords = i2422
  i2420.vertexProgram = i2421[3]
  i2420.fragmentProgram = i2421[4]
  i2420.exportedForWebGl2 = !!i2421[5]
  i2420.readDepth = !!i2421[6]
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2427 = data
  request.r(i2427[0], i2427[1], 0, i2426, 'shader')
  i2426.pass = i2427[2]
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2431 = data
  i2430.name = i2431[0]
  i2430.type = i2431[1]
  i2430.value = new pc.Vec4( i2431[2], i2431[3], i2431[4], i2431[5] )
  i2430.textureValue = i2431[6]
  i2430.shaderPropertyFlag = i2431[7]
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2433 = data
  i2432.name = i2433[0]
  request.r(i2433[1], i2433[2], 0, i2432, 'texture')
  i2432.aabb = i2433[3]
  i2432.vertices = i2433[4]
  i2432.triangles = i2433[5]
  i2432.textureRect = UnityEngine.Rect.MinMaxRect(i2433[6], i2433[7], i2433[8], i2433[9])
  i2432.packedRect = UnityEngine.Rect.MinMaxRect(i2433[10], i2433[11], i2433[12], i2433[13])
  i2432.border = new pc.Vec4( i2433[14], i2433[15], i2433[16], i2433[17] )
  i2432.transparency = i2433[18]
  i2432.bounds = i2433[19]
  i2432.pixelsPerUnit = i2433[20]
  i2432.textureWidth = i2433[21]
  i2432.textureHeight = i2433[22]
  i2432.nativeSize = new pc.Vec2( i2433[23], i2433[24] )
  i2432.pivot = new pc.Vec2( i2433[25], i2433[26] )
  i2432.textureRectOffset = new pc.Vec2( i2433[27], i2433[28] )
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2435 = data
  i2434.name = i2435[0]
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2437 = data
  i2436.name = i2437[0]
  i2436.wrapMode = i2437[1]
  i2436.isLooping = !!i2437[2]
  i2436.length = i2437[3]
  var i2439 = i2437[4]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 1) {
    i2438.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2439[i + 0]) );
  }
  i2436.curves = i2438
  var i2441 = i2437[5]
  var i2440 = []
  for(var i = 0; i < i2441.length; i += 1) {
    i2440.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2441[i + 0]) );
  }
  i2436.events = i2440
  i2436.halfPrecision = !!i2437[6]
  i2436._frameRate = i2437[7]
  i2436.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2437[8], i2436.localBounds)
  i2436.hasMuscleCurves = !!i2437[9]
  var i2443 = i2437[10]
  var i2442 = []
  for(var i = 0; i < i2443.length; i += 1) {
    i2442.push( i2443[i + 0] );
  }
  i2436.clipMuscleConstant = i2442
  i2436.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2437[11], i2436.clipBindingConstant)
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2447 = data
  i2446.path = i2447[0]
  i2446.hash = i2447[1]
  i2446.componentType = i2447[2]
  i2446.property = i2447[3]
  i2446.keys = i2447[4]
  var i2449 = i2447[5]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2449[i + 0]) );
  }
  i2446.objectReferenceKeys = i2448
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2453 = data
  i2452.time = i2453[0]
  request.r(i2453[1], i2453[2], 0, i2452, 'value')
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2457 = data
  i2456.functionName = i2457[0]
  i2456.floatParameter = i2457[1]
  i2456.intParameter = i2457[2]
  i2456.stringParameter = i2457[3]
  request.r(i2457[4], i2457[5], 0, i2456, 'objectReferenceParameter')
  i2456.time = i2457[6]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2459 = data
  i2458.center = new pc.Vec3( i2459[0], i2459[1], i2459[2] )
  i2458.extends = new pc.Vec3( i2459[3], i2459[4], i2459[5] )
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2463 = data
  var i2465 = i2463[0]
  var i2464 = []
  for(var i = 0; i < i2465.length; i += 1) {
    i2464.push( i2465[i + 0] );
  }
  i2462.genericBindings = i2464
  var i2467 = i2463[1]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.push( i2467[i + 0] );
  }
  i2462.pptrCurveMapping = i2466
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i2468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i2469 = data
  i2468.name = i2469[0]
  i2468.blendParameter = i2469[1]
  i2468.blendParameterY = i2469[2]
  i2468.blendType = i2469[3]
  var i2471 = i2469[4]
  var i2470 = []
  for(var i = 0; i < i2471.length; i += 1) {
    i2470.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i2471[i + 0]) );
  }
  i2468.children = i2470
  i2468.useAutomaticThresholds = !!i2469[5]
  i2468.minThreshold = i2469[6]
  i2468.maxThreshold = i2469[7]
  return i2468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i2475 = data
  request.r(i2475[0], i2475[1], 0, i2474, 'motion')
  i2474.threshold = i2475[2]
  i2474.position = new pc.Vec2( i2475[3], i2475[4] )
  i2474.timeScale = i2475[5]
  i2474.cycleOffset = i2475[6]
  i2474.directBlendParameter = i2475[7]
  i2474.mirror = !!i2475[8]
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2477 = data
  i2476.name = i2477[0]
  i2476.ascent = i2477[1]
  i2476.originalLineHeight = i2477[2]
  i2476.fontSize = i2477[3]
  var i2479 = i2477[4]
  var i2478 = []
  for(var i = 0; i < i2479.length; i += 1) {
    i2478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2479[i + 0]) );
  }
  i2476.characterInfo = i2478
  request.r(i2477[5], i2477[6], 0, i2476, 'texture')
  i2476.originalFontSize = i2477[7]
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2483 = data
  i2482.index = i2483[0]
  i2482.advance = i2483[1]
  i2482.bearing = i2483[2]
  i2482.glyphWidth = i2483[3]
  i2482.glyphHeight = i2483[4]
  i2482.minX = i2483[5]
  i2482.maxX = i2483[6]
  i2482.minY = i2483[7]
  i2482.maxY = i2483[8]
  i2482.uvBottomLeftX = i2483[9]
  i2482.uvBottomLeftY = i2483[10]
  i2482.uvBottomRightX = i2483[11]
  i2482.uvBottomRightY = i2483[12]
  i2482.uvTopLeftX = i2483[13]
  i2482.uvTopLeftY = i2483[14]
  i2482.uvTopRightX = i2483[15]
  i2482.uvTopRightY = i2483[16]
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2485 = data
  i2484.name = i2485[0]
  var i2487 = i2485[1]
  var i2486 = []
  for(var i = 0; i < i2487.length; i += 1) {
    i2486.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2487[i + 0]) );
  }
  i2484.layers = i2486
  var i2489 = i2485[2]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2489[i + 0]) );
  }
  i2484.parameters = i2488
  i2484.animationClips = i2485[3]
  i2484.avatarUnsupported = i2485[4]
  return i2484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2493 = data
  i2492.name = i2493[0]
  i2492.defaultWeight = i2493[1]
  i2492.blendingMode = i2493[2]
  i2492.avatarMask = i2493[3]
  i2492.syncedLayerIndex = i2493[4]
  i2492.syncedLayerAffectsTiming = !!i2493[5]
  i2492.syncedLayers = i2493[6]
  i2492.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2493[7], i2492.stateMachine)
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2495 = data
  i2494.id = i2495[0]
  i2494.name = i2495[1]
  i2494.path = i2495[2]
  var i2497 = i2495[3]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 1) {
    i2496.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2497[i + 0]) );
  }
  i2494.states = i2496
  var i2499 = i2495[4]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 1) {
    i2498.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2499[i + 0]) );
  }
  i2494.machines = i2498
  var i2501 = i2495[5]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2501[i + 0]) );
  }
  i2494.entryStateTransitions = i2500
  var i2503 = i2495[6]
  var i2502 = []
  for(var i = 0; i < i2503.length; i += 1) {
    i2502.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2503[i + 0]) );
  }
  i2494.exitStateTransitions = i2502
  var i2505 = i2495[7]
  var i2504 = []
  for(var i = 0; i < i2505.length; i += 1) {
    i2504.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2505[i + 0]) );
  }
  i2494.anyStateTransitions = i2504
  i2494.defaultStateId = i2495[8]
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2509 = data
  i2508.id = i2509[0]
  i2508.name = i2509[1]
  i2508.cycleOffset = i2509[2]
  i2508.cycleOffsetParameter = i2509[3]
  i2508.cycleOffsetParameterActive = !!i2509[4]
  i2508.mirror = !!i2509[5]
  i2508.mirrorParameter = i2509[6]
  i2508.mirrorParameterActive = !!i2509[7]
  i2508.motionId = i2509[8]
  i2508.nameHash = i2509[9]
  i2508.fullPathHash = i2509[10]
  i2508.speed = i2509[11]
  i2508.speedParameter = i2509[12]
  i2508.speedParameterActive = !!i2509[13]
  i2508.tag = i2509[14]
  i2508.tagHash = i2509[15]
  i2508.writeDefaultValues = !!i2509[16]
  var i2511 = i2509[17]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 2) {
  request.r(i2511[i + 0], i2511[i + 1], 2, i2510, '')
  }
  i2508.behaviours = i2510
  var i2513 = i2509[18]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2513[i + 0]) );
  }
  i2508.transitions = i2512
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2519 = data
  i2518.fullPath = i2519[0]
  i2518.canTransitionToSelf = !!i2519[1]
  i2518.duration = i2519[2]
  i2518.exitTime = i2519[3]
  i2518.hasExitTime = !!i2519[4]
  i2518.hasFixedDuration = !!i2519[5]
  i2518.interruptionSource = i2519[6]
  i2518.offset = i2519[7]
  i2518.orderedInterruption = !!i2519[8]
  i2518.destinationStateId = i2519[9]
  i2518.isExit = !!i2519[10]
  i2518.mute = !!i2519[11]
  i2518.solo = !!i2519[12]
  var i2521 = i2519[13]
  var i2520 = []
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2521[i + 0]) );
  }
  i2518.conditions = i2520
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2527 = data
  i2526.destinationStateId = i2527[0]
  i2526.isExit = !!i2527[1]
  i2526.mute = !!i2527[2]
  i2526.solo = !!i2527[3]
  var i2529 = i2527[4]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2529[i + 0]) );
  }
  i2526.conditions = i2528
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2533 = data
  i2532.defaultBool = !!i2533[0]
  i2532.defaultFloat = i2533[1]
  i2532.defaultInt = i2533[2]
  i2532.name = i2533[3]
  i2532.nameHash = i2533[4]
  i2532.type = i2533[5]
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2535 = data
  i2534.name = i2535[0]
  i2534.bytes64 = i2535[1]
  i2534.data = i2535[2]
  return i2534
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2536 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2537 = data
  i2536.hashCode = i2537[0]
  request.r(i2537[1], i2537[2], 0, i2536, 'material')
  i2536.materialHashCode = i2537[3]
  request.r(i2537[4], i2537[5], 0, i2536, 'atlas')
  i2536.normalStyle = i2537[6]
  i2536.normalSpacingOffset = i2537[7]
  i2536.boldStyle = i2537[8]
  i2536.boldSpacing = i2537[9]
  i2536.italicStyle = i2537[10]
  i2536.tabSize = i2537[11]
  i2536.m_Version = i2537[12]
  i2536.m_SourceFontFileGUID = i2537[13]
  request.r(i2537[14], i2537[15], 0, i2536, 'm_SourceFontFile_EditorRef')
  request.r(i2537[16], i2537[17], 0, i2536, 'm_SourceFontFile')
  i2536.m_AtlasPopulationMode = i2537[18]
  i2536.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2537[19], i2536.m_FaceInfo)
  var i2539 = i2537[20]
  var i2538 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2539.length; i += 1) {
    i2538.add(request.d('UnityEngine.TextCore.Glyph', i2539[i + 0]));
  }
  i2536.m_GlyphTable = i2538
  var i2541 = i2537[21]
  var i2540 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.add(request.d('TMPro.TMP_Character', i2541[i + 0]));
  }
  i2536.m_CharacterTable = i2540
  var i2543 = i2537[22]
  var i2542 = []
  for(var i = 0; i < i2543.length; i += 2) {
  request.r(i2543[i + 0], i2543[i + 1], 2, i2542, '')
  }
  i2536.m_AtlasTextures = i2542
  i2536.m_AtlasTextureIndex = i2537[23]
  i2536.m_IsMultiAtlasTexturesEnabled = !!i2537[24]
  i2536.m_ClearDynamicDataOnBuild = !!i2537[25]
  var i2545 = i2537[26]
  var i2544 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.add(request.d('UnityEngine.TextCore.GlyphRect', i2545[i + 0]));
  }
  i2536.m_UsedGlyphRects = i2544
  var i2547 = i2537[27]
  var i2546 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2547.length; i += 1) {
    i2546.add(request.d('UnityEngine.TextCore.GlyphRect', i2547[i + 0]));
  }
  i2536.m_FreeGlyphRects = i2546
  i2536.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2537[28], i2536.m_fontInfo)
  i2536.m_AtlasWidth = i2537[29]
  i2536.m_AtlasHeight = i2537[30]
  i2536.m_AtlasPadding = i2537[31]
  i2536.m_AtlasRenderMode = i2537[32]
  var i2549 = i2537[33]
  var i2548 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.add(request.d('TMPro.TMP_Glyph', i2549[i + 0]));
  }
  i2536.m_glyphInfoList = i2548
  i2536.m_KerningTable = request.d('TMPro.KerningTable', i2537[34], i2536.m_KerningTable)
  i2536.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2537[35], i2536.m_FontFeatureTable)
  var i2551 = i2537[36]
  var i2550 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2551.length; i += 2) {
  request.r(i2551[i + 0], i2551[i + 1], 1, i2550, '')
  }
  i2536.fallbackFontAssets = i2550
  var i2553 = i2537[37]
  var i2552 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2553.length; i += 2) {
  request.r(i2553[i + 0], i2553[i + 1], 1, i2552, '')
  }
  i2536.m_FallbackFontAssetTable = i2552
  i2536.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2537[38], i2536.m_CreationSettings)
  var i2555 = i2537[39]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 1) {
    i2554.push( request.d('TMPro.TMP_FontWeightPair', i2555[i + 0]) );
  }
  i2536.m_FontWeightTable = i2554
  var i2557 = i2537[40]
  var i2556 = []
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.push( request.d('TMPro.TMP_FontWeightPair', i2557[i + 0]) );
  }
  i2536.fontWeights = i2556
  return i2536
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2558 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2559 = data
  i2558.m_FaceIndex = i2559[0]
  i2558.m_FamilyName = i2559[1]
  i2558.m_StyleName = i2559[2]
  i2558.m_PointSize = i2559[3]
  i2558.m_Scale = i2559[4]
  i2558.m_UnitsPerEM = i2559[5]
  i2558.m_LineHeight = i2559[6]
  i2558.m_AscentLine = i2559[7]
  i2558.m_CapLine = i2559[8]
  i2558.m_MeanLine = i2559[9]
  i2558.m_Baseline = i2559[10]
  i2558.m_DescentLine = i2559[11]
  i2558.m_SuperscriptOffset = i2559[12]
  i2558.m_SuperscriptSize = i2559[13]
  i2558.m_SubscriptOffset = i2559[14]
  i2558.m_SubscriptSize = i2559[15]
  i2558.m_UnderlineOffset = i2559[16]
  i2558.m_UnderlineThickness = i2559[17]
  i2558.m_StrikethroughOffset = i2559[18]
  i2558.m_StrikethroughThickness = i2559[19]
  i2558.m_TabWidth = i2559[20]
  return i2558
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2562 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2563 = data
  i2562.m_Index = i2563[0]
  i2562.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2563[1], i2562.m_Metrics)
  i2562.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2563[2], i2562.m_GlyphRect)
  i2562.m_Scale = i2563[3]
  i2562.m_AtlasIndex = i2563[4]
  i2562.m_ClassDefinitionType = i2563[5]
  return i2562
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2564 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2565 = data
  i2564.m_Width = i2565[0]
  i2564.m_Height = i2565[1]
  i2564.m_HorizontalBearingX = i2565[2]
  i2564.m_HorizontalBearingY = i2565[3]
  i2564.m_HorizontalAdvance = i2565[4]
  return i2564
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2566 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2567 = data
  i2566.m_X = i2567[0]
  i2566.m_Y = i2567[1]
  i2566.m_Width = i2567[2]
  i2566.m_Height = i2567[3]
  return i2566
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2570 = root || request.c( 'TMPro.TMP_Character' )
  var i2571 = data
  i2570.m_ElementType = i2571[0]
  i2570.m_Unicode = i2571[1]
  i2570.m_GlyphIndex = i2571[2]
  i2570.m_Scale = i2571[3]
  return i2570
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2576 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2577 = data
  i2576.Name = i2577[0]
  i2576.PointSize = i2577[1]
  i2576.Scale = i2577[2]
  i2576.CharacterCount = i2577[3]
  i2576.LineHeight = i2577[4]
  i2576.Baseline = i2577[5]
  i2576.Ascender = i2577[6]
  i2576.CapHeight = i2577[7]
  i2576.Descender = i2577[8]
  i2576.CenterLine = i2577[9]
  i2576.SuperscriptOffset = i2577[10]
  i2576.SubscriptOffset = i2577[11]
  i2576.SubSize = i2577[12]
  i2576.Underline = i2577[13]
  i2576.UnderlineThickness = i2577[14]
  i2576.strikethrough = i2577[15]
  i2576.strikethroughThickness = i2577[16]
  i2576.TabWidth = i2577[17]
  i2576.Padding = i2577[18]
  i2576.AtlasWidth = i2577[19]
  i2576.AtlasHeight = i2577[20]
  return i2576
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2580 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2581 = data
  i2580.id = i2581[0]
  i2580.x = i2581[1]
  i2580.y = i2581[2]
  i2580.width = i2581[3]
  i2580.height = i2581[4]
  i2580.xOffset = i2581[5]
  i2580.yOffset = i2581[6]
  i2580.xAdvance = i2581[7]
  i2580.scale = i2581[8]
  return i2580
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2582 = root || request.c( 'TMPro.KerningTable' )
  var i2583 = data
  var i2585 = i2583[0]
  var i2584 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2585.length; i += 1) {
    i2584.add(request.d('TMPro.KerningPair', i2585[i + 0]));
  }
  i2582.kerningPairs = i2584
  return i2582
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2588 = root || request.c( 'TMPro.KerningPair' )
  var i2589 = data
  i2588.xOffset = i2589[0]
  i2588.m_FirstGlyph = i2589[1]
  i2588.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2589[2], i2588.m_FirstGlyphAdjustments)
  i2588.m_SecondGlyph = i2589[3]
  i2588.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2589[4], i2588.m_SecondGlyphAdjustments)
  i2588.m_IgnoreSpacingAdjustments = !!i2589[5]
  return i2588
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2590 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2591 = data
  var i2593 = i2591[0]
  var i2592 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2593.length; i += 1) {
    i2592.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2593[i + 0]));
  }
  i2590.m_GlyphPairAdjustmentRecords = i2592
  return i2590
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2596 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2597 = data
  i2596.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2597[0], i2596.m_FirstAdjustmentRecord)
  i2596.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2597[1], i2596.m_SecondAdjustmentRecord)
  i2596.m_FeatureLookupFlags = i2597[2]
  return i2596
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2598 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2599 = data
  i2598.m_GlyphIndex = i2599[0]
  i2598.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2599[1], i2598.m_GlyphValueRecord)
  return i2598
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2600 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2601 = data
  i2600.m_XPlacement = i2601[0]
  i2600.m_YPlacement = i2601[1]
  i2600.m_XAdvance = i2601[2]
  i2600.m_YAdvance = i2601[3]
  return i2600
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2604 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2605 = data
  i2604.sourceFontFileName = i2605[0]
  i2604.sourceFontFileGUID = i2605[1]
  i2604.pointSizeSamplingMode = i2605[2]
  i2604.pointSize = i2605[3]
  i2604.padding = i2605[4]
  i2604.packingMode = i2605[5]
  i2604.atlasWidth = i2605[6]
  i2604.atlasHeight = i2605[7]
  i2604.characterSetSelectionMode = i2605[8]
  i2604.characterSequence = i2605[9]
  i2604.referencedFontAssetGUID = i2605[10]
  i2604.referencedTextAssetGUID = i2605[11]
  i2604.fontStyle = i2605[12]
  i2604.fontStyleModifier = i2605[13]
  i2604.renderMode = i2605[14]
  i2604.includeFontFeatures = !!i2605[15]
  return i2604
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2608 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2609 = data
  request.r(i2609[0], i2609[1], 0, i2608, 'regularTypeface')
  request.r(i2609[2], i2609[3], 0, i2608, 'italicTypeface')
  return i2608
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2610 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2611 = data
  i2610.useSafeMode = !!i2611[0]
  i2610.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2611[1], i2610.safeModeOptions)
  i2610.timeScale = i2611[2]
  i2610.unscaledTimeScale = i2611[3]
  i2610.useSmoothDeltaTime = !!i2611[4]
  i2610.maxSmoothUnscaledTime = i2611[5]
  i2610.rewindCallbackMode = i2611[6]
  i2610.showUnityEditorReport = !!i2611[7]
  i2610.logBehaviour = i2611[8]
  i2610.drawGizmos = !!i2611[9]
  i2610.defaultRecyclable = !!i2611[10]
  i2610.defaultAutoPlay = i2611[11]
  i2610.defaultUpdateType = i2611[12]
  i2610.defaultTimeScaleIndependent = !!i2611[13]
  i2610.defaultEaseType = i2611[14]
  i2610.defaultEaseOvershootOrAmplitude = i2611[15]
  i2610.defaultEasePeriod = i2611[16]
  i2610.defaultAutoKill = !!i2611[17]
  i2610.defaultLoopType = i2611[18]
  i2610.debugMode = !!i2611[19]
  i2610.debugStoreTargetId = !!i2611[20]
  i2610.showPreviewPanel = !!i2611[21]
  i2610.storeSettingsLocation = i2611[22]
  i2610.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2611[23], i2610.modules)
  i2610.createASMDEF = !!i2611[24]
  i2610.showPlayingTweens = !!i2611[25]
  i2610.showPausedTweens = !!i2611[26]
  return i2610
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2612 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2613 = data
  i2612.logBehaviour = i2613[0]
  i2612.nestedTweenFailureBehaviour = i2613[1]
  return i2612
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2614 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2615 = data
  i2614.showPanel = !!i2615[0]
  i2614.audioEnabled = !!i2615[1]
  i2614.physicsEnabled = !!i2615[2]
  i2614.physics2DEnabled = !!i2615[3]
  i2614.spriteEnabled = !!i2615[4]
  i2614.uiEnabled = !!i2615[5]
  i2614.textMeshProEnabled = !!i2615[6]
  i2614.tk2DEnabled = !!i2615[7]
  i2614.deAudioEnabled = !!i2615[8]
  i2614.deUnityExtendedEnabled = !!i2615[9]
  i2614.epoOutlineEnabled = !!i2615[10]
  return i2614
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2616 = root || request.c( 'TMPro.TMP_Settings' )
  var i2617 = data
  i2616.m_enableWordWrapping = !!i2617[0]
  i2616.m_enableKerning = !!i2617[1]
  i2616.m_enableExtraPadding = !!i2617[2]
  i2616.m_enableTintAllSprites = !!i2617[3]
  i2616.m_enableParseEscapeCharacters = !!i2617[4]
  i2616.m_EnableRaycastTarget = !!i2617[5]
  i2616.m_GetFontFeaturesAtRuntime = !!i2617[6]
  i2616.m_missingGlyphCharacter = i2617[7]
  i2616.m_warningsDisabled = !!i2617[8]
  request.r(i2617[9], i2617[10], 0, i2616, 'm_defaultFontAsset')
  i2616.m_defaultFontAssetPath = i2617[11]
  i2616.m_defaultFontSize = i2617[12]
  i2616.m_defaultAutoSizeMinRatio = i2617[13]
  i2616.m_defaultAutoSizeMaxRatio = i2617[14]
  i2616.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2617[15], i2617[16] )
  i2616.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2617[17], i2617[18] )
  i2616.m_autoSizeTextContainer = !!i2617[19]
  i2616.m_IsTextObjectScaleStatic = !!i2617[20]
  var i2619 = i2617[21]
  var i2618 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2619.length; i += 2) {
  request.r(i2619[i + 0], i2619[i + 1], 1, i2618, '')
  }
  i2616.m_fallbackFontAssets = i2618
  i2616.m_matchMaterialPreset = !!i2617[22]
  request.r(i2617[23], i2617[24], 0, i2616, 'm_defaultSpriteAsset')
  i2616.m_defaultSpriteAssetPath = i2617[25]
  i2616.m_enableEmojiSupport = !!i2617[26]
  i2616.m_MissingCharacterSpriteUnicode = i2617[27]
  i2616.m_defaultColorGradientPresetsPath = i2617[28]
  request.r(i2617[29], i2617[30], 0, i2616, 'm_defaultStyleSheet')
  i2616.m_StyleSheetsResourcePath = i2617[31]
  request.r(i2617[32], i2617[33], 0, i2616, 'm_leadingCharacters')
  request.r(i2617[34], i2617[35], 0, i2616, 'm_followingCharacters')
  i2616.m_UseModernHangulLineBreakingRules = !!i2617[36]
  return i2616
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2620 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2621 = data
  i2620.hashCode = i2621[0]
  request.r(i2621[1], i2621[2], 0, i2620, 'material')
  i2620.materialHashCode = i2621[3]
  request.r(i2621[4], i2621[5], 0, i2620, 'spriteSheet')
  var i2623 = i2621[6]
  var i2622 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2623.length; i += 1) {
    i2622.add(request.d('TMPro.TMP_Sprite', i2623[i + 0]));
  }
  i2620.spriteInfoList = i2622
  var i2625 = i2621[7]
  var i2624 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2625.length; i += 2) {
  request.r(i2625[i + 0], i2625[i + 1], 1, i2624, '')
  }
  i2620.fallbackSpriteAssets = i2624
  i2620.m_Version = i2621[8]
  i2620.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2621[9], i2620.m_FaceInfo)
  var i2627 = i2621[10]
  var i2626 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2627.length; i += 1) {
    i2626.add(request.d('TMPro.TMP_SpriteCharacter', i2627[i + 0]));
  }
  i2620.m_SpriteCharacterTable = i2626
  var i2629 = i2621[11]
  var i2628 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.add(request.d('TMPro.TMP_SpriteGlyph', i2629[i + 0]));
  }
  i2620.m_SpriteGlyphTable = i2628
  return i2620
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2632 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2633 = data
  i2632.name = i2633[0]
  i2632.hashCode = i2633[1]
  i2632.unicode = i2633[2]
  i2632.pivot = new pc.Vec2( i2633[3], i2633[4] )
  request.r(i2633[5], i2633[6], 0, i2632, 'sprite')
  i2632.id = i2633[7]
  i2632.x = i2633[8]
  i2632.y = i2633[9]
  i2632.width = i2633[10]
  i2632.height = i2633[11]
  i2632.xOffset = i2633[12]
  i2632.yOffset = i2633[13]
  i2632.xAdvance = i2633[14]
  i2632.scale = i2633[15]
  return i2632
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2638 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2639 = data
  i2638.m_Name = i2639[0]
  i2638.m_HashCode = i2639[1]
  i2638.m_ElementType = i2639[2]
  i2638.m_Unicode = i2639[3]
  i2638.m_GlyphIndex = i2639[4]
  i2638.m_Scale = i2639[5]
  return i2638
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2642 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2643 = data
  request.r(i2643[0], i2643[1], 0, i2642, 'sprite')
  i2642.m_Index = i2643[2]
  i2642.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2643[3], i2642.m_Metrics)
  i2642.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2643[4], i2642.m_GlyphRect)
  i2642.m_Scale = i2643[5]
  i2642.m_AtlasIndex = i2643[6]
  i2642.m_ClassDefinitionType = i2643[7]
  return i2642
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2644 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2645 = data
  var i2647 = i2645[0]
  var i2646 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2647.length; i += 1) {
    i2646.add(request.d('TMPro.TMP_Style', i2647[i + 0]));
  }
  i2644.m_StyleList = i2646
  return i2644
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2650 = root || request.c( 'TMPro.TMP_Style' )
  var i2651 = data
  i2650.m_Name = i2651[0]
  i2650.m_HashCode = i2651[1]
  i2650.m_OpeningDefinition = i2651[2]
  i2650.m_ClosingDefinition = i2651[3]
  i2650.m_OpeningTagArray = i2651[4]
  i2650.m_ClosingTagArray = i2651[5]
  i2650.m_OpeningTagUnicodeArray = i2651[6]
  i2650.m_ClosingTagUnicodeArray = i2651[7]
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2653 = data
  var i2655 = i2653[0]
  var i2654 = []
  for(var i = 0; i < i2655.length; i += 1) {
    i2654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2655[i + 0]) );
  }
  i2652.files = i2654
  i2652.componentToPrefabIds = i2653[1]
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2659 = data
  i2658.path = i2659[0]
  request.r(i2659[1], i2659[2], 0, i2658, 'unityObject')
  return i2658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2661 = data
  var i2663 = i2661[0]
  var i2662 = []
  for(var i = 0; i < i2663.length; i += 1) {
    i2662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2663[i + 0]) );
  }
  i2660.scriptsExecutionOrder = i2662
  var i2665 = i2661[1]
  var i2664 = []
  for(var i = 0; i < i2665.length; i += 1) {
    i2664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2665[i + 0]) );
  }
  i2660.sortingLayers = i2664
  var i2667 = i2661[2]
  var i2666 = []
  for(var i = 0; i < i2667.length; i += 1) {
    i2666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2667[i + 0]) );
  }
  i2660.cullingLayers = i2666
  i2660.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2661[3], i2660.timeSettings)
  i2660.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2661[4], i2660.physicsSettings)
  i2660.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2661[5], i2660.physics2DSettings)
  i2660.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2661[6], i2660.qualitySettings)
  i2660.enableRealtimeShadows = !!i2661[7]
  i2660.enableAutoInstancing = !!i2661[8]
  i2660.enableDynamicBatching = !!i2661[9]
  i2660.lightmapEncodingQuality = i2661[10]
  i2660.desiredColorSpace = i2661[11]
  var i2669 = i2661[12]
  var i2668 = []
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.push( i2669[i + 0] );
  }
  i2660.allTags = i2668
  return i2660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2673 = data
  i2672.name = i2673[0]
  i2672.value = i2673[1]
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2677 = data
  i2676.id = i2677[0]
  i2676.name = i2677[1]
  i2676.value = i2677[2]
  return i2676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2681 = data
  i2680.id = i2681[0]
  i2680.name = i2681[1]
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2683 = data
  i2682.fixedDeltaTime = i2683[0]
  i2682.maximumDeltaTime = i2683[1]
  i2682.timeScale = i2683[2]
  i2682.maximumParticleTimestep = i2683[3]
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2685 = data
  i2684.gravity = new pc.Vec3( i2685[0], i2685[1], i2685[2] )
  i2684.defaultSolverIterations = i2685[3]
  i2684.bounceThreshold = i2685[4]
  i2684.autoSyncTransforms = !!i2685[5]
  i2684.autoSimulation = !!i2685[6]
  var i2687 = i2685[7]
  var i2686 = []
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2687[i + 0]) );
  }
  i2684.collisionMatrix = i2686
  return i2684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2691 = data
  i2690.enabled = !!i2691[0]
  i2690.layerId = i2691[1]
  i2690.otherLayerId = i2691[2]
  return i2690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2693 = data
  request.r(i2693[0], i2693[1], 0, i2692, 'material')
  i2692.gravity = new pc.Vec2( i2693[2], i2693[3] )
  i2692.positionIterations = i2693[4]
  i2692.velocityIterations = i2693[5]
  i2692.velocityThreshold = i2693[6]
  i2692.maxLinearCorrection = i2693[7]
  i2692.maxAngularCorrection = i2693[8]
  i2692.maxTranslationSpeed = i2693[9]
  i2692.maxRotationSpeed = i2693[10]
  i2692.baumgarteScale = i2693[11]
  i2692.baumgarteTOIScale = i2693[12]
  i2692.timeToSleep = i2693[13]
  i2692.linearSleepTolerance = i2693[14]
  i2692.angularSleepTolerance = i2693[15]
  i2692.defaultContactOffset = i2693[16]
  i2692.autoSimulation = !!i2693[17]
  i2692.queriesHitTriggers = !!i2693[18]
  i2692.queriesStartInColliders = !!i2693[19]
  i2692.callbacksOnDisable = !!i2693[20]
  i2692.reuseCollisionCallbacks = !!i2693[21]
  i2692.autoSyncTransforms = !!i2693[22]
  var i2695 = i2693[23]
  var i2694 = []
  for(var i = 0; i < i2695.length; i += 1) {
    i2694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2695[i + 0]) );
  }
  i2692.collisionMatrix = i2694
  return i2692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2699 = data
  i2698.enabled = !!i2699[0]
  i2698.layerId = i2699[1]
  i2698.otherLayerId = i2699[2]
  return i2698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2701 = data
  var i2703 = i2701[0]
  var i2702 = []
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2703[i + 0]) );
  }
  i2700.qualityLevels = i2702
  var i2705 = i2701[1]
  var i2704 = []
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.push( i2705[i + 0] );
  }
  i2700.names = i2704
  i2700.shadows = i2701[2]
  i2700.anisotropicFiltering = i2701[3]
  i2700.antiAliasing = i2701[4]
  i2700.lodBias = i2701[5]
  i2700.shadowCascades = i2701[6]
  i2700.shadowDistance = i2701[7]
  i2700.shadowmaskMode = i2701[8]
  i2700.shadowProjection = i2701[9]
  i2700.shadowResolution = i2701[10]
  i2700.softParticles = !!i2701[11]
  i2700.softVegetation = !!i2701[12]
  i2700.activeColorSpace = i2701[13]
  i2700.desiredColorSpace = i2701[14]
  i2700.masterTextureLimit = i2701[15]
  i2700.maxQueuedFrames = i2701[16]
  i2700.particleRaycastBudget = i2701[17]
  i2700.pixelLightCount = i2701[18]
  i2700.realtimeReflectionProbes = !!i2701[19]
  i2700.shadowCascade2Split = i2701[20]
  i2700.shadowCascade4Split = new pc.Vec3( i2701[21], i2701[22], i2701[23] )
  i2700.streamingMipmapsActive = !!i2701[24]
  i2700.vSyncCount = i2701[25]
  i2700.asyncUploadBufferSize = i2701[26]
  i2700.asyncUploadTimeSlice = i2701[27]
  i2700.billboardsFaceCameraPosition = !!i2701[28]
  i2700.shadowNearPlaneOffset = i2701[29]
  i2700.streamingMipmapsMemoryBudget = i2701[30]
  i2700.maximumLODLevel = i2701[31]
  i2700.streamingMipmapsAddAllCameras = !!i2701[32]
  i2700.streamingMipmapsMaxLevelReduction = i2701[33]
  i2700.streamingMipmapsRenderersPerFrame = i2701[34]
  i2700.resolutionScalingFixedDPIFactor = i2701[35]
  i2700.streamingMipmapsMaxFileIORequests = i2701[36]
  i2700.currentQualityLevel = i2701[37]
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2709 = data
  i2708.name = i2709[0]
  var i2711 = i2709[1]
  var i2710 = []
  for(var i = 0; i < i2711.length; i += 1) {
    i2710.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2711[i + 0]) );
  }
  i2708.tos = i2710
  var i2713 = i2709[2]
  var i2712 = []
  for(var i = 0; i < i2713.length; i += 1) {
    i2712.push( i2713[i + 0] );
  }
  i2708.constant = i2712
  i2708.isValid = !!i2709[3]
  i2708.isHuman = !!i2709[4]
  i2708.hasRootMotion = !!i2709[5]
  return i2708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2717 = data
  i2716.hash = i2717[0]
  i2716.path = i2717[1]
  return i2716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2721 = data
  i2720.weight = i2721[0]
  i2720.vertices = i2721[1]
  i2720.normals = i2721[2]
  i2720.tangents = i2721[3]
  return i2720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2725 = data
  i2724.mode = i2725[0]
  i2724.parameter = i2725[1]
  i2724.threshold = i2725[2]
  return i2724
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2726 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2727 = data
  i2726.xPlacement = i2727[0]
  i2726.yPlacement = i2727[1]
  i2726.xAdvance = i2727[2]
  i2726.yAdvance = i2727[3]
  return i2726
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[25],"79":[33],"80":[19],"81":[19],"82":[19],"83":[19],"84":[19],"85":[19],"86":[19],"87":[88],"89":[88],"90":[88],"91":[88],"92":[88],"93":[88],"94":[88],"95":[88],"96":[88],"97":[88],"98":[88],"99":[88],"100":[88],"101":[33],"102":[3],"103":[104],"105":[104],"40":[27],"26":[20],"106":[20],"11":[107],"24":[20],"108":[27],"63":[3,27],"47":[27,28],"109":[27],"110":[28,27],"111":[3],"112":[28,27],"113":[27],"114":[115],"116":[27],"117":[27],"42":[40],"30":[28,27],"118":[27],"41":[40],"45":[27],"119":[27],"44":[27],"120":[27],"121":[27],"122":[27],"123":[27],"124":[27],"125":[27],"126":[28,27],"127":[27],"128":[27],"129":[27],"62":[27],"130":[28,27],"131":[27],"132":[54],"133":[54],"55":[54],"134":[54],"135":[33],"136":[33],"137":[115],"138":[115]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","LocalRotationController","UnityEngine.MeshCollider","DeathObstacleEffect","BasicPushObstacleEffect","RotaterPushObstacleEffect","UnityEngine.CapsuleCollider","ShiningObstacleEffect","UnityEngine.ParticleSystem","PatrolMovementController","UnityEngine.ParticleSystemRenderer","UnityEngine.Rigidbody","UnityEngine.CharacterController","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","PlayerController","UnityEngine.SkinnedMeshRenderer","BotController","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.AI.NavMeshObstacle","UnityEngine.Camera","UnityEngine.AudioListener","CameraFollow","FOVCalculator","SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Joystick","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.ContentSizeFitter","DeathCounter","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","RankManager","CoinManager","UnityEngine.GameObject","UnityEngine.UI.Button","GameManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","FinishLine","CoinCollectible","NextTarget","BackgroundMusic","UnityEngine.Cubemap","WallPainter","UnityEngine.UI.Slider","TMPro.TextMeshPro","UnityEngine.AnimationClip","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CharacterBaseController","ObstacleBase","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.45f1";

Deserializers.productName = "PanteonDemo";

Deserializers.lunaInitializationTime = "11/07/2024 13:58:49";

Deserializers.lunaDaysRunning = "1.9";

Deserializers.lunaVersion = "6.2.0";

Deserializers.lunaSHA = "7963e9fed253d218ae1c5298f104efd7e457ea14";

Deserializers.creativeName = "Deneme";

Deserializers.lunaAppID = "25545";

Deserializers.projectId = "183a878df3c572c46b908bc772bb8712";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1568";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4852";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.PanteonDemo";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "1844aca8-f177-46b4-8cc2-2a68d0f7a6e5";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

