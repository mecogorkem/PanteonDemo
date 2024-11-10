var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2052 = root || request.c( 'UnityEngine.JointSpring' )
  var i2053 = data
  i2052.spring = i2053[0]
  i2052.damper = i2053[1]
  i2052.targetPosition = i2053[2]
  return i2052
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2054 = root || request.c( 'UnityEngine.JointMotor' )
  var i2055 = data
  i2054.m_TargetVelocity = i2055[0]
  i2054.m_Force = i2055[1]
  i2054.m_FreeSpin = i2055[2]
  return i2054
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2056 = root || request.c( 'UnityEngine.JointLimits' )
  var i2057 = data
  i2056.m_Min = i2057[0]
  i2056.m_Max = i2057[1]
  i2056.m_Bounciness = i2057[2]
  i2056.m_BounceMinVelocity = i2057[3]
  i2056.m_ContactDistance = i2057[4]
  i2056.minBounce = i2057[5]
  i2056.maxBounce = i2057[6]
  return i2056
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2058 = root || request.c( 'UnityEngine.JointDrive' )
  var i2059 = data
  i2058.m_PositionSpring = i2059[0]
  i2058.m_PositionDamper = i2059[1]
  i2058.m_MaximumForce = i2059[2]
  return i2058
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2060 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2061 = data
  i2060.m_Spring = i2061[0]
  i2060.m_Damper = i2061[1]
  return i2060
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2062 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2063 = data
  i2062.m_Limit = i2063[0]
  i2062.m_Bounciness = i2063[1]
  i2062.m_ContactDistance = i2063[2]
  return i2062
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2064 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2065 = data
  i2064.m_ExtremumSlip = i2065[0]
  i2064.m_ExtremumValue = i2065[1]
  i2064.m_AsymptoteSlip = i2065[2]
  i2064.m_AsymptoteValue = i2065[3]
  i2064.m_Stiffness = i2065[4]
  return i2064
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2066 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2067 = data
  i2066.m_LowerAngle = i2067[0]
  i2066.m_UpperAngle = i2067[1]
  return i2066
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2068 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2069 = data
  i2068.m_MotorSpeed = i2069[0]
  i2068.m_MaximumMotorTorque = i2069[1]
  return i2068
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2070 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2071 = data
  i2070.m_DampingRatio = i2071[0]
  i2070.m_Frequency = i2071[1]
  i2070.m_Angle = i2071[2]
  return i2070
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2072 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2073 = data
  i2072.m_LowerTranslation = i2073[0]
  i2072.m_UpperTranslation = i2073[1]
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2075 = data
  i2074.position = new pc.Vec3( i2075[0], i2075[1], i2075[2] )
  i2074.scale = new pc.Vec3( i2075[3], i2075[4], i2075[5] )
  i2074.rotation = new pc.Quat(i2075[6], i2075[7], i2075[8], i2075[9])
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2077 = data
  request.r(i2077[0], i2077[1], 0, i2076, 'sharedMesh')
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2079 = data
  request.r(i2079[0], i2079[1], 0, i2078, 'additionalVertexStreams')
  i2078.enabled = !!i2079[2]
  request.r(i2079[3], i2079[4], 0, i2078, 'sharedMaterial')
  var i2081 = i2079[5]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 2) {
  request.r(i2081[i + 0], i2081[i + 1], 2, i2080, '')
  }
  i2078.sharedMaterials = i2080
  i2078.receiveShadows = !!i2079[6]
  i2078.shadowCastingMode = i2079[7]
  i2078.sortingLayerID = i2079[8]
  i2078.sortingOrder = i2079[9]
  i2078.lightmapIndex = i2079[10]
  i2078.lightmapSceneIndex = i2079[11]
  i2078.lightmapScaleOffset = new pc.Vec4( i2079[12], i2079[13], i2079[14], i2079[15] )
  i2078.lightProbeUsage = i2079[16]
  i2078.reflectionProbeUsage = i2079[17]
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2085 = data
  i2084.name = i2085[0]
  i2084.tagId = i2085[1]
  i2084.enabled = !!i2085[2]
  i2084.isStatic = !!i2085[3]
  i2084.layer = i2085[4]
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2087 = data
  i2086.name = i2087[0]
  i2086.halfPrecision = !!i2087[1]
  i2086.useUInt32IndexFormat = !!i2087[2]
  i2086.vertexCount = i2087[3]
  i2086.aabb = i2087[4]
  var i2089 = i2087[5]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 1) {
    i2088.push( !!i2089[i + 0] );
  }
  i2086.streams = i2088
  i2086.vertices = i2087[6]
  var i2091 = i2087[7]
  var i2090 = []
  for(var i = 0; i < i2091.length; i += 1) {
    i2090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2091[i + 0]) );
  }
  i2086.subMeshes = i2090
  var i2093 = i2087[8]
  var i2092 = []
  for(var i = 0; i < i2093.length; i += 16) {
    i2092.push( new pc.Mat4().setData(i2093[i + 0], i2093[i + 1], i2093[i + 2], i2093[i + 3],  i2093[i + 4], i2093[i + 5], i2093[i + 6], i2093[i + 7],  i2093[i + 8], i2093[i + 9], i2093[i + 10], i2093[i + 11],  i2093[i + 12], i2093[i + 13], i2093[i + 14], i2093[i + 15]) );
  }
  i2086.bindposes = i2092
  var i2095 = i2087[9]
  var i2094 = []
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2095[i + 0]) );
  }
  i2086.blendShapes = i2094
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2101 = data
  i2100.triangles = i2101[0]
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2107 = data
  i2106.name = i2107[0]
  var i2109 = i2107[1]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2109[i + 0]) );
  }
  i2106.frames = i2108
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2110 = root || new pc.UnityMaterial()
  var i2111 = data
  i2110.name = i2111[0]
  request.r(i2111[1], i2111[2], 0, i2110, 'shader')
  i2110.renderQueue = i2111[3]
  i2110.enableInstancing = !!i2111[4]
  var i2113 = i2111[5]
  var i2112 = []
  for(var i = 0; i < i2113.length; i += 1) {
    i2112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2113[i + 0]) );
  }
  i2110.floatParameters = i2112
  var i2115 = i2111[6]
  var i2114 = []
  for(var i = 0; i < i2115.length; i += 1) {
    i2114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2115[i + 0]) );
  }
  i2110.colorParameters = i2114
  var i2117 = i2111[7]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2117[i + 0]) );
  }
  i2110.vectorParameters = i2116
  var i2119 = i2111[8]
  var i2118 = []
  for(var i = 0; i < i2119.length; i += 1) {
    i2118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2119[i + 0]) );
  }
  i2110.textureParameters = i2118
  var i2121 = i2111[9]
  var i2120 = []
  for(var i = 0; i < i2121.length; i += 1) {
    i2120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2121[i + 0]) );
  }
  i2110.materialFlags = i2120
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2125 = data
  i2124.name = i2125[0]
  i2124.value = i2125[1]
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2129 = data
  i2128.name = i2129[0]
  i2128.value = new pc.Color(i2129[1], i2129[2], i2129[3], i2129[4])
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2133 = data
  i2132.name = i2133[0]
  i2132.value = new pc.Vec4( i2133[1], i2133[2], i2133[3], i2133[4] )
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2137 = data
  i2136.name = i2137[0]
  request.r(i2137[1], i2137[2], 0, i2136, 'value')
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2141 = data
  i2140.name = i2141[0]
  i2140.enabled = !!i2141[1]
  return i2140
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2145 = data
  i2144.center = new pc.Vec3( i2145[0], i2145[1], i2145[2] )
  i2144.size = new pc.Vec3( i2145[3], i2145[4], i2145[5] )
  i2144.enabled = !!i2145[6]
  i2144.isTrigger = !!i2145[7]
  request.r(i2145[8], i2145[9], 0, i2144, 'material')
  return i2144
}

Deserializers["LocalRotationController"] = function (request, data, root) {
  var i2146 = root || request.c( 'LocalRotationController' )
  var i2147 = data
  i2146.rotationSpeed = new pc.Vec3( i2147[0], i2147[1], i2147[2] )
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

Deserializers["DeathObstacleEffect"] = function (request, data, root) {
  var i2150 = root || request.c( 'DeathObstacleEffect' )
  var i2151 = data
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2227 = data
  i2226.mass = i2227[0]
  i2226.drag = i2227[1]
  i2226.angularDrag = i2227[2]
  i2226.useGravity = !!i2227[3]
  i2226.isKinematic = !!i2227[4]
  i2226.constraints = i2227[5]
  i2226.maxAngularVelocity = i2227[6]
  i2226.collisionDetectionMode = i2227[7]
  i2226.interpolation = i2227[8]
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i2229 = data
  i2228.enabled = !!i2229[0]
  i2228.center = new pc.Vec3( i2229[1], i2229[2], i2229[3] )
  i2228.radius = i2229[4]
  i2228.height = i2229[5]
  i2228.minMoveDistance = i2229[6]
  i2228.skinWidth = i2229[7]
  i2228.enableOverlapRecovery = !!i2229[8]
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2231 = data
  request.r(i2231[0], i2231[1], 0, i2230, 'animatorController')
  request.r(i2231[2], i2231[3], 0, i2230, 'avatar')
  i2230.updateMode = i2231[4]
  i2230.hasTransformHierarchy = !!i2231[5]
  i2230.applyRootMotion = !!i2231[6]
  var i2233 = i2231[7]
  var i2232 = []
  for(var i = 0; i < i2233.length; i += 2) {
  request.r(i2233[i + 0], i2233[i + 1], 2, i2232, '')
  }
  i2230.humanBones = i2232
  i2230.enabled = !!i2231[8]
  return i2230
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i2236 = root || request.c( 'PlayerController' )
  var i2237 = data
  request.r(i2237[0], i2237[1], 0, i2236, 'playerEndTransform')
  request.r(i2237[2], i2237[3], 0, i2236, 'playerGameCompleteTransform')
  i2236.MoveSpeed = i2237[4]
  i2236.SpeedChangeRate = i2237[5]
  i2236.RotationSmoothTime = i2237[6]
  i2236.gravity = i2237[7]
  i2236.fallThreshold = i2237[8]
  i2236.pushForceDecayRate = i2237[9]
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2239 = data
  i2238.enabled = !!i2239[0]
  request.r(i2239[1], i2239[2], 0, i2238, 'sharedMaterial')
  var i2241 = i2239[3]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 2) {
  request.r(i2241[i + 0], i2241[i + 1], 2, i2240, '')
  }
  i2238.sharedMaterials = i2240
  i2238.receiveShadows = !!i2239[4]
  i2238.shadowCastingMode = i2239[5]
  i2238.sortingLayerID = i2239[6]
  i2238.sortingOrder = i2239[7]
  i2238.lightmapIndex = i2239[8]
  i2238.lightmapSceneIndex = i2239[9]
  i2238.lightmapScaleOffset = new pc.Vec4( i2239[10], i2239[11], i2239[12], i2239[13] )
  i2238.lightProbeUsage = i2239[14]
  i2238.reflectionProbeUsage = i2239[15]
  request.r(i2239[16], i2239[17], 0, i2238, 'sharedMesh')
  var i2243 = i2239[18]
  var i2242 = []
  for(var i = 0; i < i2243.length; i += 2) {
  request.r(i2243[i + 0], i2243[i + 1], 2, i2242, '')
  }
  i2238.bones = i2242
  i2238.updateWhenOffscreen = !!i2239[19]
  i2238.localBounds = i2239[20]
  request.r(i2239[21], i2239[22], 0, i2238, 'rootBone')
  var i2245 = i2239[23]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 1) {
    i2244.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2245[i + 0]) );
  }
  i2238.blendShapesWeights = i2244
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2249 = data
  i2248.weight = i2249[0]
  return i2248
}

Deserializers["BotController"] = function (request, data, root) {
  var i2250 = root || request.c( 'BotController' )
  var i2251 = data
  i2250.MoveSpeed = i2251[0]
  i2250.SpeedChangeRate = i2251[1]
  i2250.RotationSmoothTime = i2251[2]
  i2250.gravity = i2251[3]
  i2250.fallThreshold = i2251[4]
  i2250.pushForceDecayRate = i2251[5]
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2253 = data
  i2252.pivot = new pc.Vec2( i2253[0], i2253[1] )
  i2252.anchorMin = new pc.Vec2( i2253[2], i2253[3] )
  i2252.anchorMax = new pc.Vec2( i2253[4], i2253[5] )
  i2252.sizeDelta = new pc.Vec2( i2253[6], i2253[7] )
  i2252.anchoredPosition3D = new pc.Vec3( i2253[8], i2253[9], i2253[10] )
  i2252.rotation = new pc.Quat(i2253[11], i2253[12], i2253[13], i2253[14])
  i2252.scale = new pc.Vec3( i2253[15], i2253[16], i2253[17] )
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2255 = data
  i2254.cullTransparentMesh = !!i2255[0]
  return i2254
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2256 = root || request.c( 'UnityEngine.UI.Image' )
  var i2257 = data
  request.r(i2257[0], i2257[1], 0, i2256, 'm_Sprite')
  i2256.m_Type = i2257[2]
  i2256.m_PreserveAspect = !!i2257[3]
  i2256.m_FillCenter = !!i2257[4]
  i2256.m_FillMethod = i2257[5]
  i2256.m_FillAmount = i2257[6]
  i2256.m_FillClockwise = !!i2257[7]
  i2256.m_FillOrigin = i2257[8]
  i2256.m_UseSpriteMesh = !!i2257[9]
  i2256.m_PixelsPerUnitMultiplier = i2257[10]
  request.r(i2257[11], i2257[12], 0, i2256, 'm_Material')
  i2256.m_Maskable = !!i2257[13]
  i2256.m_Color = new pc.Color(i2257[14], i2257[15], i2257[16], i2257[17])
  i2256.m_RaycastTarget = !!i2257[18]
  i2256.m_RaycastPadding = new pc.Vec4( i2257[19], i2257[20], i2257[21], i2257[22] )
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2259 = data
  i2258.name = i2259[0]
  i2258.atlasId = i2259[1]
  i2258.mipmapCount = i2259[2]
  i2258.hdr = !!i2259[3]
  i2258.size = i2259[4]
  i2258.anisoLevel = i2259[5]
  i2258.filterMode = i2259[6]
  var i2261 = i2259[7]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 4) {
    i2260.push( UnityEngine.Rect.MinMaxRect(i2261[i + 0], i2261[i + 1], i2261[i + 2], i2261[i + 3]) );
  }
  i2258.rects = i2260
  i2258.wrapU = i2259[8]
  i2258.wrapV = i2259[9]
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2265 = data
  i2264.name = i2265[0]
  i2264.index = i2265[1]
  i2264.startup = !!i2265[2]
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2267 = data
  i2266.enabled = !!i2267[0]
  i2266.aspect = i2267[1]
  i2266.orthographic = !!i2267[2]
  i2266.orthographicSize = i2267[3]
  i2266.backgroundColor = new pc.Color(i2267[4], i2267[5], i2267[6], i2267[7])
  i2266.nearClipPlane = i2267[8]
  i2266.farClipPlane = i2267[9]
  i2266.fieldOfView = i2267[10]
  i2266.depth = i2267[11]
  i2266.clearFlags = i2267[12]
  i2266.cullingMask = i2267[13]
  i2266.rect = i2267[14]
  request.r(i2267[15], i2267[16], 0, i2266, 'targetTexture')
  i2266.usePhysicalProperties = !!i2267[17]
  i2266.focalLength = i2267[18]
  i2266.sensorSize = new pc.Vec2( i2267[19], i2267[20] )
  i2266.lensShift = new pc.Vec2( i2267[21], i2267[22] )
  i2266.gateFit = i2267[23]
  i2266.commandBufferCount = i2267[24]
  i2266.cameraType = i2267[25]
  return i2266
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i2268 = root || request.c( 'CameraFollow' )
  var i2269 = data
  request.r(i2269[0], i2269[1], 0, i2268, 'target')
  request.r(i2269[2], i2269[3], 0, i2268, 'finishTarget')
  return i2268
}

Deserializers["FOVCalculator"] = function (request, data, root) {
  var i2270 = root || request.c( 'FOVCalculator' )
  var i2271 = data
  return i2270
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i2272 = root || request.c( 'SoundManager' )
  var i2273 = data
  request.r(i2273[0], i2273[1], 0, i2272, 'pushSound')
  request.r(i2273[2], i2273[3], 0, i2272, 'coinSound')
  request.r(i2273[4], i2273[5], 0, i2272, 'countdownSound')
  request.r(i2273[6], i2273[7], 0, i2272, 'botDeathSound')
  request.r(i2273[8], i2273[9], 0, i2272, 'coinFirstInteractionSound')
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2275 = data
  request.r(i2275[0], i2275[1], 0, i2274, 'clip')
  request.r(i2275[2], i2275[3], 0, i2274, 'outputAudioMixerGroup')
  i2274.playOnAwake = !!i2275[4]
  i2274.loop = !!i2275[5]
  i2274.time = i2275[6]
  i2274.volume = i2275[7]
  i2274.pitch = i2275[8]
  i2274.enabled = !!i2275[9]
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2277 = data
  i2276.enabled = !!i2277[0]
  i2276.planeDistance = i2277[1]
  i2276.referencePixelsPerUnit = i2277[2]
  i2276.isFallbackOverlay = !!i2277[3]
  i2276.renderMode = i2277[4]
  i2276.renderOrder = i2277[5]
  i2276.sortingLayerName = i2277[6]
  i2276.sortingOrder = i2277[7]
  i2276.scaleFactor = i2277[8]
  request.r(i2277[9], i2277[10], 0, i2276, 'worldCamera')
  i2276.overrideSorting = !!i2277[11]
  i2276.pixelPerfect = !!i2277[12]
  i2276.targetDisplay = i2277[13]
  i2276.overridePixelPerfect = !!i2277[14]
  return i2276
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2278 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2279 = data
  i2278.m_UiScaleMode = i2279[0]
  i2278.m_ReferencePixelsPerUnit = i2279[1]
  i2278.m_ScaleFactor = i2279[2]
  i2278.m_ReferenceResolution = new pc.Vec2( i2279[3], i2279[4] )
  i2278.m_ScreenMatchMode = i2279[5]
  i2278.m_MatchWidthOrHeight = i2279[6]
  i2278.m_PhysicalUnit = i2279[7]
  i2278.m_FallbackScreenDPI = i2279[8]
  i2278.m_DefaultSpriteDPI = i2279[9]
  i2278.m_DynamicPixelsPerUnit = i2279[10]
  i2278.m_PresetInfoIsWorld = !!i2279[11]
  return i2278
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2280 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2281 = data
  i2280.m_IgnoreReversedGraphics = !!i2281[0]
  i2280.m_BlockingObjects = i2281[1]
  i2280.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2281[2] )
  return i2280
}

Deserializers["Joystick"] = function (request, data, root) {
  var i2282 = root || request.c( 'Joystick' )
  var i2283 = data
  request.r(i2283[0], i2283[1], 0, i2282, 'joystickBackground')
  request.r(i2283[2], i2283[3], 0, i2282, 'joystickHandle')
  return i2282
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2285 = data
  i2284.m_Spacing = i2285[0]
  i2284.m_ChildForceExpandWidth = !!i2285[1]
  i2284.m_ChildForceExpandHeight = !!i2285[2]
  i2284.m_ChildControlWidth = !!i2285[3]
  i2284.m_ChildControlHeight = !!i2285[4]
  i2284.m_ChildScaleWidth = !!i2285[5]
  i2284.m_ChildScaleHeight = !!i2285[6]
  i2284.m_ReverseArrangement = !!i2285[7]
  i2284.m_Padding = UnityEngine.RectOffset.FromPaddings(i2285[8], i2285[9], i2285[10], i2285[11])
  i2284.m_ChildAlignment = i2285[12]
  return i2284
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i2286 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i2287 = data
  i2286.m_HorizontalFit = i2287[0]
  i2286.m_VerticalFit = i2287[1]
  return i2286
}

Deserializers["DeathCounter"] = function (request, data, root) {
  var i2288 = root || request.c( 'DeathCounter' )
  var i2289 = data
  request.r(i2289[0], i2289[1], 0, i2288, 'deathCounterText')
  return i2288
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2290 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2291 = data
  i2290.m_hasFontAssetChanged = !!i2291[0]
  request.r(i2291[1], i2291[2], 0, i2290, 'm_baseMaterial')
  i2290.m_maskOffset = new pc.Vec4( i2291[3], i2291[4], i2291[5], i2291[6] )
  i2290.m_text = i2291[7]
  i2290.m_isRightToLeft = !!i2291[8]
  request.r(i2291[9], i2291[10], 0, i2290, 'm_fontAsset')
  request.r(i2291[11], i2291[12], 0, i2290, 'm_sharedMaterial')
  var i2293 = i2291[13]
  var i2292 = []
  for(var i = 0; i < i2293.length; i += 2) {
  request.r(i2293[i + 0], i2293[i + 1], 2, i2292, '')
  }
  i2290.m_fontSharedMaterials = i2292
  request.r(i2291[14], i2291[15], 0, i2290, 'm_fontMaterial')
  var i2295 = i2291[16]
  var i2294 = []
  for(var i = 0; i < i2295.length; i += 2) {
  request.r(i2295[i + 0], i2295[i + 1], 2, i2294, '')
  }
  i2290.m_fontMaterials = i2294
  i2290.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2291[17], i2291[18], i2291[19], i2291[20])
  i2290.m_fontColor = new pc.Color(i2291[21], i2291[22], i2291[23], i2291[24])
  i2290.m_enableVertexGradient = !!i2291[25]
  i2290.m_colorMode = i2291[26]
  i2290.m_fontColorGradient = request.d('TMPro.VertexGradient', i2291[27], i2290.m_fontColorGradient)
  request.r(i2291[28], i2291[29], 0, i2290, 'm_fontColorGradientPreset')
  request.r(i2291[30], i2291[31], 0, i2290, 'm_spriteAsset')
  i2290.m_tintAllSprites = !!i2291[32]
  request.r(i2291[33], i2291[34], 0, i2290, 'm_StyleSheet')
  i2290.m_TextStyleHashCode = i2291[35]
  i2290.m_overrideHtmlColors = !!i2291[36]
  i2290.m_faceColor = UnityEngine.Color32.ConstructColor(i2291[37], i2291[38], i2291[39], i2291[40])
  i2290.m_fontSize = i2291[41]
  i2290.m_fontSizeBase = i2291[42]
  i2290.m_fontWeight = i2291[43]
  i2290.m_enableAutoSizing = !!i2291[44]
  i2290.m_fontSizeMin = i2291[45]
  i2290.m_fontSizeMax = i2291[46]
  i2290.m_fontStyle = i2291[47]
  i2290.m_HorizontalAlignment = i2291[48]
  i2290.m_VerticalAlignment = i2291[49]
  i2290.m_textAlignment = i2291[50]
  i2290.m_characterSpacing = i2291[51]
  i2290.m_wordSpacing = i2291[52]
  i2290.m_lineSpacing = i2291[53]
  i2290.m_lineSpacingMax = i2291[54]
  i2290.m_paragraphSpacing = i2291[55]
  i2290.m_charWidthMaxAdj = i2291[56]
  i2290.m_enableWordWrapping = !!i2291[57]
  i2290.m_wordWrappingRatios = i2291[58]
  i2290.m_overflowMode = i2291[59]
  request.r(i2291[60], i2291[61], 0, i2290, 'm_linkedTextComponent')
  request.r(i2291[62], i2291[63], 0, i2290, 'parentLinkedComponent')
  i2290.m_enableKerning = !!i2291[64]
  i2290.m_enableExtraPadding = !!i2291[65]
  i2290.checkPaddingRequired = !!i2291[66]
  i2290.m_isRichText = !!i2291[67]
  i2290.m_parseCtrlCharacters = !!i2291[68]
  i2290.m_isOrthographic = !!i2291[69]
  i2290.m_isCullingEnabled = !!i2291[70]
  i2290.m_horizontalMapping = i2291[71]
  i2290.m_verticalMapping = i2291[72]
  i2290.m_uvLineOffset = i2291[73]
  i2290.m_geometrySortingOrder = i2291[74]
  i2290.m_IsTextObjectScaleStatic = !!i2291[75]
  i2290.m_VertexBufferAutoSizeReduction = !!i2291[76]
  i2290.m_useMaxVisibleDescender = !!i2291[77]
  i2290.m_pageToDisplay = i2291[78]
  i2290.m_margin = new pc.Vec4( i2291[79], i2291[80], i2291[81], i2291[82] )
  i2290.m_isUsingLegacyAnimationComponent = !!i2291[83]
  i2290.m_isVolumetricText = !!i2291[84]
  request.r(i2291[85], i2291[86], 0, i2290, 'm_Material')
  i2290.m_Maskable = !!i2291[87]
  i2290.m_Color = new pc.Color(i2291[88], i2291[89], i2291[90], i2291[91])
  i2290.m_RaycastTarget = !!i2291[92]
  i2290.m_RaycastPadding = new pc.Vec4( i2291[93], i2291[94], i2291[95], i2291[96] )
  return i2290
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2296 = root || request.c( 'TMPro.VertexGradient' )
  var i2297 = data
  i2296.topLeft = new pc.Color(i2297[0], i2297[1], i2297[2], i2297[3])
  i2296.topRight = new pc.Color(i2297[4], i2297[5], i2297[6], i2297[7])
  i2296.bottomLeft = new pc.Color(i2297[8], i2297[9], i2297[10], i2297[11])
  i2296.bottomRight = new pc.Color(i2297[12], i2297[13], i2297[14], i2297[15])
  return i2296
}

Deserializers["RankManager"] = function (request, data, root) {
  var i2298 = root || request.c( 'RankManager' )
  var i2299 = data
  request.r(i2299[0], i2299[1], 0, i2298, 'rankImage')
  var i2301 = i2299[2]
  var i2300 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2301.length; i += 2) {
  request.r(i2301[i + 0], i2301[i + 1], 1, i2300, '')
  }
  i2298.rankSprites = i2300
  var i2303 = i2299[3]
  var i2302 = new (System.Collections.Generic.List$1(Bridge.ns('CharacterBaseController')))
  for(var i = 0; i < i2303.length; i += 2) {
  request.r(i2303[i + 0], i2303[i + 1], 1, i2302, '')
  }
  i2298.racers = i2302
  return i2298
}

Deserializers["CoinManager"] = function (request, data, root) {
  var i2308 = root || request.c( 'CoinManager' )
  var i2309 = data
  request.r(i2309[0], i2309[1], 0, i2308, 'coinCounterText')
  request.r(i2309[2], i2309[3], 0, i2308, 'flyingCoinPrefab')
  request.r(i2309[4], i2309[5], 0, i2308, 'uiTarget')
  return i2308
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2310 = root || request.c( 'UnityEngine.UI.Button' )
  var i2311 = data
  i2310.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2311[0], i2310.m_OnClick)
  i2310.m_Navigation = request.d('UnityEngine.UI.Navigation', i2311[1], i2310.m_Navigation)
  i2310.m_Transition = i2311[2]
  i2310.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2311[3], i2310.m_Colors)
  i2310.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2311[4], i2310.m_SpriteState)
  i2310.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2311[5], i2310.m_AnimationTriggers)
  i2310.m_Interactable = !!i2311[6]
  request.r(i2311[7], i2311[8], 0, i2310, 'm_TargetGraphic')
  return i2310
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2312 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2313 = data
  i2312.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2313[0], i2312.m_PersistentCalls)
  return i2312
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2314 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2315 = data
  var i2317 = i2315[0]
  var i2316 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2317.length; i += 1) {
    i2316.add(request.d('UnityEngine.Events.PersistentCall', i2317[i + 0]));
  }
  i2314.m_Calls = i2316
  return i2314
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2320 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2321 = data
  request.r(i2321[0], i2321[1], 0, i2320, 'm_Target')
  i2320.m_TargetAssemblyTypeName = i2321[2]
  i2320.m_MethodName = i2321[3]
  i2320.m_Mode = i2321[4]
  i2320.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2321[5], i2320.m_Arguments)
  i2320.m_CallState = i2321[6]
  return i2320
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2322 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2323 = data
  request.r(i2323[0], i2323[1], 0, i2322, 'm_ObjectArgument')
  i2322.m_ObjectArgumentAssemblyTypeName = i2323[2]
  i2322.m_IntArgument = i2323[3]
  i2322.m_FloatArgument = i2323[4]
  i2322.m_StringArgument = i2323[5]
  i2322.m_BoolArgument = !!i2323[6]
  return i2322
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2324 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2325 = data
  i2324.m_Mode = i2325[0]
  i2324.m_WrapAround = !!i2325[1]
  request.r(i2325[2], i2325[3], 0, i2324, 'm_SelectOnUp')
  request.r(i2325[4], i2325[5], 0, i2324, 'm_SelectOnDown')
  request.r(i2325[6], i2325[7], 0, i2324, 'm_SelectOnLeft')
  request.r(i2325[8], i2325[9], 0, i2324, 'm_SelectOnRight')
  return i2324
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2326 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2327 = data
  i2326.m_NormalColor = new pc.Color(i2327[0], i2327[1], i2327[2], i2327[3])
  i2326.m_HighlightedColor = new pc.Color(i2327[4], i2327[5], i2327[6], i2327[7])
  i2326.m_PressedColor = new pc.Color(i2327[8], i2327[9], i2327[10], i2327[11])
  i2326.m_SelectedColor = new pc.Color(i2327[12], i2327[13], i2327[14], i2327[15])
  i2326.m_DisabledColor = new pc.Color(i2327[16], i2327[17], i2327[18], i2327[19])
  i2326.m_ColorMultiplier = i2327[20]
  i2326.m_FadeDuration = i2327[21]
  return i2326
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2328 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2329 = data
  request.r(i2329[0], i2329[1], 0, i2328, 'm_HighlightedSprite')
  request.r(i2329[2], i2329[3], 0, i2328, 'm_PressedSprite')
  request.r(i2329[4], i2329[5], 0, i2328, 'm_SelectedSprite')
  request.r(i2329[6], i2329[7], 0, i2328, 'm_DisabledSprite')
  return i2328
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2330 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2331 = data
  i2330.m_NormalTrigger = i2331[0]
  i2330.m_HighlightedTrigger = i2331[1]
  i2330.m_PressedTrigger = i2331[2]
  i2330.m_SelectedTrigger = i2331[3]
  i2330.m_DisabledTrigger = i2331[4]
  return i2330
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2333 = data
  request.r(i2333[0], i2333[1], 0, i2332, 'm_FirstSelected')
  i2332.m_sendNavigationEvents = !!i2333[2]
  i2332.m_DragThreshold = i2333[3]
  return i2332
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2334 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2335 = data
  i2334.m_HorizontalAxis = i2335[0]
  i2334.m_VerticalAxis = i2335[1]
  i2334.m_SubmitButton = i2335[2]
  i2334.m_CancelButton = i2335[3]
  i2334.m_InputActionsPerSecond = i2335[4]
  i2334.m_RepeatDelay = i2335[5]
  i2334.m_ForceModuleActive = !!i2335[6]
  i2334.m_SendPointerHoverToParent = !!i2335[7]
  return i2334
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2336 = root || request.c( 'GameManager' )
  var i2337 = data
  i2336.isRunnerGameStarted = !!i2337[0]
  i2336.isGameCompleted = !!i2337[1]
  request.r(i2337[2], i2337[3], 0, i2336, 'completeGameUI')
  request.r(i2337[4], i2337[5], 0, i2336, 'startGameUI')
  request.r(i2337[6], i2337[7], 0, i2336, 'starterText')
  request.r(i2337[8], i2337[9], 0, i2336, 'starterImage')
  var i2339 = i2337[10]
  var i2338 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2339.length; i += 2) {
  request.r(i2339[i + 0], i2339[i + 1], 1, i2338, '')
  }
  i2336.starterImages = i2338
  request.r(i2337[11], i2337[12], 0, i2336, 'tapToStartText')
  return i2336
}

Deserializers["FinishLine"] = function (request, data, root) {
  var i2340 = root || request.c( 'FinishLine' )
  var i2341 = data
  return i2340
}

Deserializers["CoinCollectible"] = function (request, data, root) {
  var i2342 = root || request.c( 'CoinCollectible' )
  var i2343 = data
  return i2342
}

Deserializers["BackgroundMusic"] = function (request, data, root) {
  var i2344 = root || request.c( 'BackgroundMusic' )
  var i2345 = data
  return i2344
}

Deserializers["NodeManager"] = function (request, data, root) {
  var i2346 = root || request.c( 'NodeManager' )
  var i2347 = data
  return i2346
}

Deserializers["AINode"] = function (request, data, root) {
  var i2348 = root || request.c( 'AINode' )
  var i2349 = data
  i2348.leftOffset = i2349[0]
  i2348.rightOffset = i2349[1]
  request.r(i2349[2], i2349[3], 0, i2348, 'nextNode')
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2351 = data
  i2350.ambientIntensity = i2351[0]
  i2350.reflectionIntensity = i2351[1]
  i2350.ambientMode = i2351[2]
  i2350.ambientLight = new pc.Color(i2351[3], i2351[4], i2351[5], i2351[6])
  i2350.ambientSkyColor = new pc.Color(i2351[7], i2351[8], i2351[9], i2351[10])
  i2350.ambientGroundColor = new pc.Color(i2351[11], i2351[12], i2351[13], i2351[14])
  i2350.ambientEquatorColor = new pc.Color(i2351[15], i2351[16], i2351[17], i2351[18])
  i2350.fogColor = new pc.Color(i2351[19], i2351[20], i2351[21], i2351[22])
  i2350.fogEndDistance = i2351[23]
  i2350.fogStartDistance = i2351[24]
  i2350.fogDensity = i2351[25]
  i2350.fog = !!i2351[26]
  request.r(i2351[27], i2351[28], 0, i2350, 'skybox')
  i2350.fogMode = i2351[29]
  var i2353 = i2351[30]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2353[i + 0]) );
  }
  i2350.lightmaps = i2352
  i2350.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2351[31], i2350.lightProbes)
  i2350.lightmapsMode = i2351[32]
  i2350.mixedBakeMode = i2351[33]
  i2350.environmentLightingMode = i2351[34]
  i2350.ambientProbe = new pc.SphericalHarmonicsL2(i2351[35])
  i2350.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2351[36])
  i2350.useReferenceAmbientProbe = !!i2351[37]
  request.r(i2351[38], i2351[39], 0, i2350, 'customReflection')
  request.r(i2351[40], i2351[41], 0, i2350, 'defaultReflection')
  i2350.defaultReflectionMode = i2351[42]
  i2350.defaultReflectionResolution = i2351[43]
  i2350.sunLightObjectId = i2351[44]
  i2350.pixelLightCount = i2351[45]
  i2350.defaultReflectionHDR = !!i2351[46]
  i2350.hasLightDataAsset = !!i2351[47]
  i2350.hasManualGenerate = !!i2351[48]
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2357 = data
  request.r(i2357[0], i2357[1], 0, i2356, 'lightmapColor')
  request.r(i2357[2], i2357[3], 0, i2356, 'lightmapDirection')
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2358 = root || new UnityEngine.LightProbes()
  var i2359 = data
  return i2358
}

Deserializers["WallPainter"] = function (request, data, root) {
  var i2366 = root || request.c( 'WallPainter' )
  var i2367 = data
  request.r(i2367[0], i2367[1], 0, i2366, 'texturePaint')
  request.r(i2367[2], i2367[3], 0, i2366, 'brushSizeSlider')
  request.r(i2367[4], i2367[5], 0, i2366, 'paintedPercentageText')
  request.r(i2367[6], i2367[7], 0, i2366, 'yellowButton')
  request.r(i2367[8], i2367[9], 0, i2366, 'redButton')
  request.r(i2367[10], i2367[11], 0, i2366, 'blueButton')
  request.r(i2367[12], i2367[13], 0, i2366, 'canvas')
  request.r(i2367[14], i2367[15], 0, i2366, 'mainMaterial')
  request.r(i2367[16], i2367[17], 0, i2366, '_meshRenderer')
  request.r(i2367[18], i2367[19], 0, i2366, 'wallTransform')
  request.r(i2367[20], i2367[21], 0, i2366, '_audioSource')
  i2366.maxVolume = i2367[22]
  i2366.volumeFadeSpeed = i2367[23]
  return i2366
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2368 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2369 = data
  request.r(i2369[0], i2369[1], 0, i2368, 'm_FillRect')
  request.r(i2369[2], i2369[3], 0, i2368, 'm_HandleRect')
  i2368.m_Direction = i2369[4]
  i2368.m_MinValue = i2369[5]
  i2368.m_MaxValue = i2369[6]
  i2368.m_WholeNumbers = !!i2369[7]
  i2368.m_Value = i2369[8]
  i2368.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2369[9], i2368.m_OnValueChanged)
  i2368.m_Navigation = request.d('UnityEngine.UI.Navigation', i2369[10], i2368.m_Navigation)
  i2368.m_Transition = i2369[11]
  i2368.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2369[12], i2368.m_Colors)
  i2368.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2369[13], i2368.m_SpriteState)
  i2368.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2369[14], i2368.m_AnimationTriggers)
  i2368.m_Interactable = !!i2369[15]
  request.r(i2369[16], i2369[17], 0, i2368, 'm_TargetGraphic')
  return i2368
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2370 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2371 = data
  i2370.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2371[0], i2370.m_PersistentCalls)
  return i2370
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i2372 = root || request.c( 'TMPro.TextMeshPro' )
  var i2373 = data
  i2372._SortingLayer = i2373[0]
  i2372._SortingLayerID = i2373[1]
  i2372._SortingOrder = i2373[2]
  i2372.m_hasFontAssetChanged = !!i2373[3]
  request.r(i2373[4], i2373[5], 0, i2372, 'm_renderer')
  i2372.m_maskType = i2373[6]
  i2372.m_text = i2373[7]
  i2372.m_isRightToLeft = !!i2373[8]
  request.r(i2373[9], i2373[10], 0, i2372, 'm_fontAsset')
  request.r(i2373[11], i2373[12], 0, i2372, 'm_sharedMaterial')
  var i2375 = i2373[13]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 2) {
  request.r(i2375[i + 0], i2375[i + 1], 2, i2374, '')
  }
  i2372.m_fontSharedMaterials = i2374
  request.r(i2373[14], i2373[15], 0, i2372, 'm_fontMaterial')
  var i2377 = i2373[16]
  var i2376 = []
  for(var i = 0; i < i2377.length; i += 2) {
  request.r(i2377[i + 0], i2377[i + 1], 2, i2376, '')
  }
  i2372.m_fontMaterials = i2376
  i2372.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2373[17], i2373[18], i2373[19], i2373[20])
  i2372.m_fontColor = new pc.Color(i2373[21], i2373[22], i2373[23], i2373[24])
  i2372.m_enableVertexGradient = !!i2373[25]
  i2372.m_colorMode = i2373[26]
  i2372.m_fontColorGradient = request.d('TMPro.VertexGradient', i2373[27], i2372.m_fontColorGradient)
  request.r(i2373[28], i2373[29], 0, i2372, 'm_fontColorGradientPreset')
  request.r(i2373[30], i2373[31], 0, i2372, 'm_spriteAsset')
  i2372.m_tintAllSprites = !!i2373[32]
  request.r(i2373[33], i2373[34], 0, i2372, 'm_StyleSheet')
  i2372.m_TextStyleHashCode = i2373[35]
  i2372.m_overrideHtmlColors = !!i2373[36]
  i2372.m_faceColor = UnityEngine.Color32.ConstructColor(i2373[37], i2373[38], i2373[39], i2373[40])
  i2372.m_fontSize = i2373[41]
  i2372.m_fontSizeBase = i2373[42]
  i2372.m_fontWeight = i2373[43]
  i2372.m_enableAutoSizing = !!i2373[44]
  i2372.m_fontSizeMin = i2373[45]
  i2372.m_fontSizeMax = i2373[46]
  i2372.m_fontStyle = i2373[47]
  i2372.m_HorizontalAlignment = i2373[48]
  i2372.m_VerticalAlignment = i2373[49]
  i2372.m_textAlignment = i2373[50]
  i2372.m_characterSpacing = i2373[51]
  i2372.m_wordSpacing = i2373[52]
  i2372.m_lineSpacing = i2373[53]
  i2372.m_lineSpacingMax = i2373[54]
  i2372.m_paragraphSpacing = i2373[55]
  i2372.m_charWidthMaxAdj = i2373[56]
  i2372.m_enableWordWrapping = !!i2373[57]
  i2372.m_wordWrappingRatios = i2373[58]
  i2372.m_overflowMode = i2373[59]
  request.r(i2373[60], i2373[61], 0, i2372, 'm_linkedTextComponent')
  request.r(i2373[62], i2373[63], 0, i2372, 'parentLinkedComponent')
  i2372.m_enableKerning = !!i2373[64]
  i2372.m_enableExtraPadding = !!i2373[65]
  i2372.checkPaddingRequired = !!i2373[66]
  i2372.m_isRichText = !!i2373[67]
  i2372.m_parseCtrlCharacters = !!i2373[68]
  i2372.m_isOrthographic = !!i2373[69]
  i2372.m_isCullingEnabled = !!i2373[70]
  i2372.m_horizontalMapping = i2373[71]
  i2372.m_verticalMapping = i2373[72]
  i2372.m_uvLineOffset = i2373[73]
  i2372.m_geometrySortingOrder = i2373[74]
  i2372.m_IsTextObjectScaleStatic = !!i2373[75]
  i2372.m_VertexBufferAutoSizeReduction = !!i2373[76]
  i2372.m_useMaxVisibleDescender = !!i2373[77]
  i2372.m_pageToDisplay = i2373[78]
  i2372.m_margin = new pc.Vec4( i2373[79], i2373[80], i2373[81], i2373[82] )
  i2372.m_isUsingLegacyAnimationComponent = !!i2373[83]
  i2372.m_isVolumetricText = !!i2373[84]
  request.r(i2373[85], i2373[86], 0, i2372, 'm_Material')
  i2372.m_Maskable = !!i2373[87]
  i2372.m_Color = new pc.Color(i2373[88], i2373[89], i2373[90], i2373[91])
  i2372.m_RaycastTarget = !!i2373[92]
  i2372.m_RaycastPadding = new pc.Vec4( i2373[93], i2373[94], i2373[95], i2373[96] )
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2379 = data
  var i2381 = i2379[0]
  var i2380 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2381.length; i += 1) {
    i2380.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2381[i + 0]));
  }
  i2378.ShaderCompilationErrors = i2380
  i2378.name = i2379[1]
  i2378.guid = i2379[2]
  var i2383 = i2379[3]
  var i2382 = []
  for(var i = 0; i < i2383.length; i += 1) {
    i2382.push( i2383[i + 0] );
  }
  i2378.shaderDefinedKeywords = i2382
  var i2385 = i2379[4]
  var i2384 = []
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2385[i + 0]) );
  }
  i2378.passes = i2384
  var i2387 = i2379[5]
  var i2386 = []
  for(var i = 0; i < i2387.length; i += 1) {
    i2386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2387[i + 0]) );
  }
  i2378.usePasses = i2386
  var i2389 = i2379[6]
  var i2388 = []
  for(var i = 0; i < i2389.length; i += 1) {
    i2388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2389[i + 0]) );
  }
  i2378.defaultParameterValues = i2388
  request.r(i2379[7], i2379[8], 0, i2378, 'unityFallbackShader')
  i2378.readDepth = !!i2379[9]
  i2378.isCreatedByShaderGraph = !!i2379[10]
  i2378.compiled = !!i2379[11]
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2393 = data
  i2392.shaderName = i2393[0]
  i2392.errorMessage = i2393[1]
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2398 = root || new pc.UnityShaderPass()
  var i2399 = data
  i2398.id = i2399[0]
  i2398.subShaderIndex = i2399[1]
  i2398.name = i2399[2]
  i2398.passType = i2399[3]
  i2398.grabPassTextureName = i2399[4]
  i2398.usePass = !!i2399[5]
  i2398.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2399[6], i2398.zTest)
  i2398.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2399[7], i2398.zWrite)
  i2398.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2399[8], i2398.culling)
  i2398.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2399[9], i2398.blending)
  i2398.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2399[10], i2398.alphaBlending)
  i2398.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2399[11], i2398.colorWriteMask)
  i2398.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2399[12], i2398.offsetUnits)
  i2398.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2399[13], i2398.offsetFactor)
  i2398.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2399[14], i2398.stencilRef)
  i2398.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2399[15], i2398.stencilReadMask)
  i2398.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2399[16], i2398.stencilWriteMask)
  i2398.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2399[17], i2398.stencilOp)
  i2398.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2399[18], i2398.stencilOpFront)
  i2398.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2399[19], i2398.stencilOpBack)
  var i2401 = i2399[20]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2401[i + 0]) );
  }
  i2398.tags = i2400
  var i2403 = i2399[21]
  var i2402 = []
  for(var i = 0; i < i2403.length; i += 1) {
    i2402.push( i2403[i + 0] );
  }
  i2398.passDefinedKeywords = i2402
  var i2405 = i2399[22]
  var i2404 = []
  for(var i = 0; i < i2405.length; i += 1) {
    i2404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2405[i + 0]) );
  }
  i2398.passDefinedKeywordGroups = i2404
  var i2407 = i2399[23]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 1) {
    i2406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2407[i + 0]) );
  }
  i2398.variants = i2406
  var i2409 = i2399[24]
  var i2408 = []
  for(var i = 0; i < i2409.length; i += 1) {
    i2408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2409[i + 0]) );
  }
  i2398.excludedVariants = i2408
  i2398.hasDepthReader = !!i2399[25]
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2411 = data
  i2410.val = i2411[0]
  i2410.name = i2411[1]
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2413 = data
  i2412.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2413[0], i2412.src)
  i2412.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2413[1], i2412.dst)
  i2412.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2413[2], i2412.op)
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2415 = data
  i2414.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2415[0], i2414.pass)
  i2414.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2415[1], i2414.fail)
  i2414.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2415[2], i2414.zFail)
  i2414.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2415[3], i2414.comp)
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2419 = data
  i2418.name = i2419[0]
  i2418.value = i2419[1]
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2423 = data
  var i2425 = i2423[0]
  var i2424 = []
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.push( i2425[i + 0] );
  }
  i2422.keywords = i2424
  i2422.hasDiscard = !!i2423[1]
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2429 = data
  i2428.passId = i2429[0]
  i2428.subShaderIndex = i2429[1]
  var i2431 = i2429[2]
  var i2430 = []
  for(var i = 0; i < i2431.length; i += 1) {
    i2430.push( i2431[i + 0] );
  }
  i2428.keywords = i2430
  i2428.vertexProgram = i2429[3]
  i2428.fragmentProgram = i2429[4]
  i2428.exportedForWebGl2 = !!i2429[5]
  i2428.readDepth = !!i2429[6]
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2435 = data
  request.r(i2435[0], i2435[1], 0, i2434, 'shader')
  i2434.pass = i2435[2]
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2439 = data
  i2438.name = i2439[0]
  i2438.type = i2439[1]
  i2438.value = new pc.Vec4( i2439[2], i2439[3], i2439[4], i2439[5] )
  i2438.textureValue = i2439[6]
  i2438.shaderPropertyFlag = i2439[7]
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2441 = data
  i2440.name = i2441[0]
  request.r(i2441[1], i2441[2], 0, i2440, 'texture')
  i2440.aabb = i2441[3]
  i2440.vertices = i2441[4]
  i2440.triangles = i2441[5]
  i2440.textureRect = UnityEngine.Rect.MinMaxRect(i2441[6], i2441[7], i2441[8], i2441[9])
  i2440.packedRect = UnityEngine.Rect.MinMaxRect(i2441[10], i2441[11], i2441[12], i2441[13])
  i2440.border = new pc.Vec4( i2441[14], i2441[15], i2441[16], i2441[17] )
  i2440.transparency = i2441[18]
  i2440.bounds = i2441[19]
  i2440.pixelsPerUnit = i2441[20]
  i2440.textureWidth = i2441[21]
  i2440.textureHeight = i2441[22]
  i2440.nativeSize = new pc.Vec2( i2441[23], i2441[24] )
  i2440.pivot = new pc.Vec2( i2441[25], i2441[26] )
  i2440.textureRectOffset = new pc.Vec2( i2441[27], i2441[28] )
  return i2440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2443 = data
  i2442.name = i2443[0]
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2445 = data
  i2444.name = i2445[0]
  i2444.wrapMode = i2445[1]
  i2444.isLooping = !!i2445[2]
  i2444.length = i2445[3]
  var i2447 = i2445[4]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 1) {
    i2446.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2447[i + 0]) );
  }
  i2444.curves = i2446
  var i2449 = i2445[5]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2449[i + 0]) );
  }
  i2444.events = i2448
  i2444.halfPrecision = !!i2445[6]
  i2444._frameRate = i2445[7]
  i2444.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2445[8], i2444.localBounds)
  i2444.hasMuscleCurves = !!i2445[9]
  var i2451 = i2445[10]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.push( i2451[i + 0] );
  }
  i2444.clipMuscleConstant = i2450
  i2444.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2445[11], i2444.clipBindingConstant)
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2455 = data
  i2454.path = i2455[0]
  i2454.hash = i2455[1]
  i2454.componentType = i2455[2]
  i2454.property = i2455[3]
  i2454.keys = i2455[4]
  var i2457 = i2455[5]
  var i2456 = []
  for(var i = 0; i < i2457.length; i += 1) {
    i2456.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2457[i + 0]) );
  }
  i2454.objectReferenceKeys = i2456
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2461 = data
  i2460.time = i2461[0]
  request.r(i2461[1], i2461[2], 0, i2460, 'value')
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2465 = data
  i2464.functionName = i2465[0]
  i2464.floatParameter = i2465[1]
  i2464.intParameter = i2465[2]
  i2464.stringParameter = i2465[3]
  request.r(i2465[4], i2465[5], 0, i2464, 'objectReferenceParameter')
  i2464.time = i2465[6]
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2467 = data
  i2466.center = new pc.Vec3( i2467[0], i2467[1], i2467[2] )
  i2466.extends = new pc.Vec3( i2467[3], i2467[4], i2467[5] )
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2471 = data
  var i2473 = i2471[0]
  var i2472 = []
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.push( i2473[i + 0] );
  }
  i2470.genericBindings = i2472
  var i2475 = i2471[1]
  var i2474 = []
  for(var i = 0; i < i2475.length; i += 1) {
    i2474.push( i2475[i + 0] );
  }
  i2470.pptrCurveMapping = i2474
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i2477 = data
  i2476.name = i2477[0]
  i2476.blendParameter = i2477[1]
  i2476.blendParameterY = i2477[2]
  i2476.blendType = i2477[3]
  var i2479 = i2477[4]
  var i2478 = []
  for(var i = 0; i < i2479.length; i += 1) {
    i2478.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i2479[i + 0]) );
  }
  i2476.children = i2478
  i2476.useAutomaticThresholds = !!i2477[5]
  i2476.minThreshold = i2477[6]
  i2476.maxThreshold = i2477[7]
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i2482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i2483 = data
  request.r(i2483[0], i2483[1], 0, i2482, 'motion')
  i2482.threshold = i2483[2]
  i2482.position = new pc.Vec2( i2483[3], i2483[4] )
  i2482.timeScale = i2483[5]
  i2482.cycleOffset = i2483[6]
  i2482.directBlendParameter = i2483[7]
  i2482.mirror = !!i2483[8]
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2485 = data
  i2484.name = i2485[0]
  i2484.ascent = i2485[1]
  i2484.originalLineHeight = i2485[2]
  i2484.fontSize = i2485[3]
  var i2487 = i2485[4]
  var i2486 = []
  for(var i = 0; i < i2487.length; i += 1) {
    i2486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2487[i + 0]) );
  }
  i2484.characterInfo = i2486
  request.r(i2485[5], i2485[6], 0, i2484, 'texture')
  i2484.originalFontSize = i2485[7]
  return i2484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2491 = data
  i2490.index = i2491[0]
  i2490.advance = i2491[1]
  i2490.bearing = i2491[2]
  i2490.glyphWidth = i2491[3]
  i2490.glyphHeight = i2491[4]
  i2490.minX = i2491[5]
  i2490.maxX = i2491[6]
  i2490.minY = i2491[7]
  i2490.maxY = i2491[8]
  i2490.uvBottomLeftX = i2491[9]
  i2490.uvBottomLeftY = i2491[10]
  i2490.uvBottomRightX = i2491[11]
  i2490.uvBottomRightY = i2491[12]
  i2490.uvTopLeftX = i2491[13]
  i2490.uvTopLeftY = i2491[14]
  i2490.uvTopRightX = i2491[15]
  i2490.uvTopRightY = i2491[16]
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2493 = data
  i2492.name = i2493[0]
  var i2495 = i2493[1]
  var i2494 = []
  for(var i = 0; i < i2495.length; i += 1) {
    i2494.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2495[i + 0]) );
  }
  i2492.layers = i2494
  var i2497 = i2493[2]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 1) {
    i2496.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2497[i + 0]) );
  }
  i2492.parameters = i2496
  i2492.animationClips = i2493[3]
  i2492.avatarUnsupported = i2493[4]
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2501 = data
  i2500.name = i2501[0]
  i2500.defaultWeight = i2501[1]
  i2500.blendingMode = i2501[2]
  i2500.avatarMask = i2501[3]
  i2500.syncedLayerIndex = i2501[4]
  i2500.syncedLayerAffectsTiming = !!i2501[5]
  i2500.syncedLayers = i2501[6]
  i2500.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2501[7], i2500.stateMachine)
  return i2500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2503 = data
  i2502.id = i2503[0]
  i2502.name = i2503[1]
  i2502.path = i2503[2]
  var i2505 = i2503[3]
  var i2504 = []
  for(var i = 0; i < i2505.length; i += 1) {
    i2504.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2505[i + 0]) );
  }
  i2502.states = i2504
  var i2507 = i2503[4]
  var i2506 = []
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2507[i + 0]) );
  }
  i2502.machines = i2506
  var i2509 = i2503[5]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2509[i + 0]) );
  }
  i2502.entryStateTransitions = i2508
  var i2511 = i2503[6]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2511[i + 0]) );
  }
  i2502.exitStateTransitions = i2510
  var i2513 = i2503[7]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2513[i + 0]) );
  }
  i2502.anyStateTransitions = i2512
  i2502.defaultStateId = i2503[8]
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2517 = data
  i2516.id = i2517[0]
  i2516.name = i2517[1]
  i2516.cycleOffset = i2517[2]
  i2516.cycleOffsetParameter = i2517[3]
  i2516.cycleOffsetParameterActive = !!i2517[4]
  i2516.mirror = !!i2517[5]
  i2516.mirrorParameter = i2517[6]
  i2516.mirrorParameterActive = !!i2517[7]
  i2516.motionId = i2517[8]
  i2516.nameHash = i2517[9]
  i2516.fullPathHash = i2517[10]
  i2516.speed = i2517[11]
  i2516.speedParameter = i2517[12]
  i2516.speedParameterActive = !!i2517[13]
  i2516.tag = i2517[14]
  i2516.tagHash = i2517[15]
  i2516.writeDefaultValues = !!i2517[16]
  var i2519 = i2517[17]
  var i2518 = []
  for(var i = 0; i < i2519.length; i += 2) {
  request.r(i2519[i + 0], i2519[i + 1], 2, i2518, '')
  }
  i2516.behaviours = i2518
  var i2521 = i2517[18]
  var i2520 = []
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2521[i + 0]) );
  }
  i2516.transitions = i2520
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2527 = data
  i2526.fullPath = i2527[0]
  i2526.canTransitionToSelf = !!i2527[1]
  i2526.duration = i2527[2]
  i2526.exitTime = i2527[3]
  i2526.hasExitTime = !!i2527[4]
  i2526.hasFixedDuration = !!i2527[5]
  i2526.interruptionSource = i2527[6]
  i2526.offset = i2527[7]
  i2526.orderedInterruption = !!i2527[8]
  i2526.destinationStateId = i2527[9]
  i2526.isExit = !!i2527[10]
  i2526.mute = !!i2527[11]
  i2526.solo = !!i2527[12]
  var i2529 = i2527[13]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2529[i + 0]) );
  }
  i2526.conditions = i2528
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2533 = data
  i2532.mode = i2533[0]
  i2532.parameter = i2533[1]
  i2532.threshold = i2533[2]
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2539 = data
  i2538.destinationStateId = i2539[0]
  i2538.isExit = !!i2539[1]
  i2538.mute = !!i2539[2]
  i2538.solo = !!i2539[3]
  var i2541 = i2539[4]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2541[i + 0]) );
  }
  i2538.conditions = i2540
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2545 = data
  i2544.defaultBool = !!i2545[0]
  i2544.defaultFloat = i2545[1]
  i2544.defaultInt = i2545[2]
  i2544.name = i2545[3]
  i2544.nameHash = i2545[4]
  i2544.type = i2545[5]
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2547 = data
  i2546.name = i2547[0]
  i2546.bytes64 = i2547[1]
  i2546.data = i2547[2]
  return i2546
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2548 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2549 = data
  i2548.hashCode = i2549[0]
  request.r(i2549[1], i2549[2], 0, i2548, 'material')
  i2548.materialHashCode = i2549[3]
  request.r(i2549[4], i2549[5], 0, i2548, 'atlas')
  i2548.normalStyle = i2549[6]
  i2548.normalSpacingOffset = i2549[7]
  i2548.boldStyle = i2549[8]
  i2548.boldSpacing = i2549[9]
  i2548.italicStyle = i2549[10]
  i2548.tabSize = i2549[11]
  i2548.m_Version = i2549[12]
  i2548.m_SourceFontFileGUID = i2549[13]
  request.r(i2549[14], i2549[15], 0, i2548, 'm_SourceFontFile_EditorRef')
  request.r(i2549[16], i2549[17], 0, i2548, 'm_SourceFontFile')
  i2548.m_AtlasPopulationMode = i2549[18]
  i2548.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2549[19], i2548.m_FaceInfo)
  var i2551 = i2549[20]
  var i2550 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2551.length; i += 1) {
    i2550.add(request.d('UnityEngine.TextCore.Glyph', i2551[i + 0]));
  }
  i2548.m_GlyphTable = i2550
  var i2553 = i2549[21]
  var i2552 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2553.length; i += 1) {
    i2552.add(request.d('TMPro.TMP_Character', i2553[i + 0]));
  }
  i2548.m_CharacterTable = i2552
  var i2555 = i2549[22]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 2) {
  request.r(i2555[i + 0], i2555[i + 1], 2, i2554, '')
  }
  i2548.m_AtlasTextures = i2554
  i2548.m_AtlasTextureIndex = i2549[23]
  i2548.m_IsMultiAtlasTexturesEnabled = !!i2549[24]
  i2548.m_ClearDynamicDataOnBuild = !!i2549[25]
  var i2557 = i2549[26]
  var i2556 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.add(request.d('UnityEngine.TextCore.GlyphRect', i2557[i + 0]));
  }
  i2548.m_UsedGlyphRects = i2556
  var i2559 = i2549[27]
  var i2558 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.add(request.d('UnityEngine.TextCore.GlyphRect', i2559[i + 0]));
  }
  i2548.m_FreeGlyphRects = i2558
  i2548.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2549[28], i2548.m_fontInfo)
  i2548.m_AtlasWidth = i2549[29]
  i2548.m_AtlasHeight = i2549[30]
  i2548.m_AtlasPadding = i2549[31]
  i2548.m_AtlasRenderMode = i2549[32]
  var i2561 = i2549[33]
  var i2560 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.add(request.d('TMPro.TMP_Glyph', i2561[i + 0]));
  }
  i2548.m_glyphInfoList = i2560
  i2548.m_KerningTable = request.d('TMPro.KerningTable', i2549[34], i2548.m_KerningTable)
  i2548.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2549[35], i2548.m_FontFeatureTable)
  var i2563 = i2549[36]
  var i2562 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2563.length; i += 2) {
  request.r(i2563[i + 0], i2563[i + 1], 1, i2562, '')
  }
  i2548.fallbackFontAssets = i2562
  var i2565 = i2549[37]
  var i2564 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2565.length; i += 2) {
  request.r(i2565[i + 0], i2565[i + 1], 1, i2564, '')
  }
  i2548.m_FallbackFontAssetTable = i2564
  i2548.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2549[38], i2548.m_CreationSettings)
  var i2567 = i2549[39]
  var i2566 = []
  for(var i = 0; i < i2567.length; i += 1) {
    i2566.push( request.d('TMPro.TMP_FontWeightPair', i2567[i + 0]) );
  }
  i2548.m_FontWeightTable = i2566
  var i2569 = i2549[40]
  var i2568 = []
  for(var i = 0; i < i2569.length; i += 1) {
    i2568.push( request.d('TMPro.TMP_FontWeightPair', i2569[i + 0]) );
  }
  i2548.fontWeights = i2568
  return i2548
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2570 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2571 = data
  i2570.m_FaceIndex = i2571[0]
  i2570.m_FamilyName = i2571[1]
  i2570.m_StyleName = i2571[2]
  i2570.m_PointSize = i2571[3]
  i2570.m_Scale = i2571[4]
  i2570.m_UnitsPerEM = i2571[5]
  i2570.m_LineHeight = i2571[6]
  i2570.m_AscentLine = i2571[7]
  i2570.m_CapLine = i2571[8]
  i2570.m_MeanLine = i2571[9]
  i2570.m_Baseline = i2571[10]
  i2570.m_DescentLine = i2571[11]
  i2570.m_SuperscriptOffset = i2571[12]
  i2570.m_SuperscriptSize = i2571[13]
  i2570.m_SubscriptOffset = i2571[14]
  i2570.m_SubscriptSize = i2571[15]
  i2570.m_UnderlineOffset = i2571[16]
  i2570.m_UnderlineThickness = i2571[17]
  i2570.m_StrikethroughOffset = i2571[18]
  i2570.m_StrikethroughThickness = i2571[19]
  i2570.m_TabWidth = i2571[20]
  return i2570
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2574 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2575 = data
  i2574.m_Index = i2575[0]
  i2574.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2575[1], i2574.m_Metrics)
  i2574.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2575[2], i2574.m_GlyphRect)
  i2574.m_Scale = i2575[3]
  i2574.m_AtlasIndex = i2575[4]
  i2574.m_ClassDefinitionType = i2575[5]
  return i2574
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2576 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2577 = data
  i2576.m_Width = i2577[0]
  i2576.m_Height = i2577[1]
  i2576.m_HorizontalBearingX = i2577[2]
  i2576.m_HorizontalBearingY = i2577[3]
  i2576.m_HorizontalAdvance = i2577[4]
  return i2576
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2578 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2579 = data
  i2578.m_X = i2579[0]
  i2578.m_Y = i2579[1]
  i2578.m_Width = i2579[2]
  i2578.m_Height = i2579[3]
  return i2578
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2582 = root || request.c( 'TMPro.TMP_Character' )
  var i2583 = data
  i2582.m_ElementType = i2583[0]
  i2582.m_Unicode = i2583[1]
  i2582.m_GlyphIndex = i2583[2]
  i2582.m_Scale = i2583[3]
  return i2582
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2588 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2589 = data
  i2588.Name = i2589[0]
  i2588.PointSize = i2589[1]
  i2588.Scale = i2589[2]
  i2588.CharacterCount = i2589[3]
  i2588.LineHeight = i2589[4]
  i2588.Baseline = i2589[5]
  i2588.Ascender = i2589[6]
  i2588.CapHeight = i2589[7]
  i2588.Descender = i2589[8]
  i2588.CenterLine = i2589[9]
  i2588.SuperscriptOffset = i2589[10]
  i2588.SubscriptOffset = i2589[11]
  i2588.SubSize = i2589[12]
  i2588.Underline = i2589[13]
  i2588.UnderlineThickness = i2589[14]
  i2588.strikethrough = i2589[15]
  i2588.strikethroughThickness = i2589[16]
  i2588.TabWidth = i2589[17]
  i2588.Padding = i2589[18]
  i2588.AtlasWidth = i2589[19]
  i2588.AtlasHeight = i2589[20]
  return i2588
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2592 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2593 = data
  i2592.id = i2593[0]
  i2592.x = i2593[1]
  i2592.y = i2593[2]
  i2592.width = i2593[3]
  i2592.height = i2593[4]
  i2592.xOffset = i2593[5]
  i2592.yOffset = i2593[6]
  i2592.xAdvance = i2593[7]
  i2592.scale = i2593[8]
  return i2592
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2594 = root || request.c( 'TMPro.KerningTable' )
  var i2595 = data
  var i2597 = i2595[0]
  var i2596 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.add(request.d('TMPro.KerningPair', i2597[i + 0]));
  }
  i2594.kerningPairs = i2596
  return i2594
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2600 = root || request.c( 'TMPro.KerningPair' )
  var i2601 = data
  i2600.xOffset = i2601[0]
  i2600.m_FirstGlyph = i2601[1]
  i2600.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2601[2], i2600.m_FirstGlyphAdjustments)
  i2600.m_SecondGlyph = i2601[3]
  i2600.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2601[4], i2600.m_SecondGlyphAdjustments)
  i2600.m_IgnoreSpacingAdjustments = !!i2601[5]
  return i2600
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2602 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2603 = data
  var i2605 = i2603[0]
  var i2604 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2605[i + 0]));
  }
  i2602.m_GlyphPairAdjustmentRecords = i2604
  return i2602
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2608 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2609 = data
  i2608.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2609[0], i2608.m_FirstAdjustmentRecord)
  i2608.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2609[1], i2608.m_SecondAdjustmentRecord)
  i2608.m_FeatureLookupFlags = i2609[2]
  return i2608
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2610 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2611 = data
  i2610.m_GlyphIndex = i2611[0]
  i2610.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2611[1], i2610.m_GlyphValueRecord)
  return i2610
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2612 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2613 = data
  i2612.m_XPlacement = i2613[0]
  i2612.m_YPlacement = i2613[1]
  i2612.m_XAdvance = i2613[2]
  i2612.m_YAdvance = i2613[3]
  return i2612
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2616 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2617 = data
  i2616.sourceFontFileName = i2617[0]
  i2616.sourceFontFileGUID = i2617[1]
  i2616.pointSizeSamplingMode = i2617[2]
  i2616.pointSize = i2617[3]
  i2616.padding = i2617[4]
  i2616.packingMode = i2617[5]
  i2616.atlasWidth = i2617[6]
  i2616.atlasHeight = i2617[7]
  i2616.characterSetSelectionMode = i2617[8]
  i2616.characterSequence = i2617[9]
  i2616.referencedFontAssetGUID = i2617[10]
  i2616.referencedTextAssetGUID = i2617[11]
  i2616.fontStyle = i2617[12]
  i2616.fontStyleModifier = i2617[13]
  i2616.renderMode = i2617[14]
  i2616.includeFontFeatures = !!i2617[15]
  return i2616
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2620 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2621 = data
  request.r(i2621[0], i2621[1], 0, i2620, 'regularTypeface')
  request.r(i2621[2], i2621[3], 0, i2620, 'italicTypeface')
  return i2620
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2622 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2623 = data
  i2622.useSafeMode = !!i2623[0]
  i2622.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2623[1], i2622.safeModeOptions)
  i2622.timeScale = i2623[2]
  i2622.unscaledTimeScale = i2623[3]
  i2622.useSmoothDeltaTime = !!i2623[4]
  i2622.maxSmoothUnscaledTime = i2623[5]
  i2622.rewindCallbackMode = i2623[6]
  i2622.showUnityEditorReport = !!i2623[7]
  i2622.logBehaviour = i2623[8]
  i2622.drawGizmos = !!i2623[9]
  i2622.defaultRecyclable = !!i2623[10]
  i2622.defaultAutoPlay = i2623[11]
  i2622.defaultUpdateType = i2623[12]
  i2622.defaultTimeScaleIndependent = !!i2623[13]
  i2622.defaultEaseType = i2623[14]
  i2622.defaultEaseOvershootOrAmplitude = i2623[15]
  i2622.defaultEasePeriod = i2623[16]
  i2622.defaultAutoKill = !!i2623[17]
  i2622.defaultLoopType = i2623[18]
  i2622.debugMode = !!i2623[19]
  i2622.debugStoreTargetId = !!i2623[20]
  i2622.showPreviewPanel = !!i2623[21]
  i2622.storeSettingsLocation = i2623[22]
  i2622.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2623[23], i2622.modules)
  i2622.createASMDEF = !!i2623[24]
  i2622.showPlayingTweens = !!i2623[25]
  i2622.showPausedTweens = !!i2623[26]
  return i2622
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2624 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2625 = data
  i2624.logBehaviour = i2625[0]
  i2624.nestedTweenFailureBehaviour = i2625[1]
  return i2624
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2626 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2627 = data
  i2626.showPanel = !!i2627[0]
  i2626.audioEnabled = !!i2627[1]
  i2626.physicsEnabled = !!i2627[2]
  i2626.physics2DEnabled = !!i2627[3]
  i2626.spriteEnabled = !!i2627[4]
  i2626.uiEnabled = !!i2627[5]
  i2626.textMeshProEnabled = !!i2627[6]
  i2626.tk2DEnabled = !!i2627[7]
  i2626.deAudioEnabled = !!i2627[8]
  i2626.deUnityExtendedEnabled = !!i2627[9]
  i2626.epoOutlineEnabled = !!i2627[10]
  return i2626
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2628 = root || request.c( 'TMPro.TMP_Settings' )
  var i2629 = data
  i2628.m_enableWordWrapping = !!i2629[0]
  i2628.m_enableKerning = !!i2629[1]
  i2628.m_enableExtraPadding = !!i2629[2]
  i2628.m_enableTintAllSprites = !!i2629[3]
  i2628.m_enableParseEscapeCharacters = !!i2629[4]
  i2628.m_EnableRaycastTarget = !!i2629[5]
  i2628.m_GetFontFeaturesAtRuntime = !!i2629[6]
  i2628.m_missingGlyphCharacter = i2629[7]
  i2628.m_warningsDisabled = !!i2629[8]
  request.r(i2629[9], i2629[10], 0, i2628, 'm_defaultFontAsset')
  i2628.m_defaultFontAssetPath = i2629[11]
  i2628.m_defaultFontSize = i2629[12]
  i2628.m_defaultAutoSizeMinRatio = i2629[13]
  i2628.m_defaultAutoSizeMaxRatio = i2629[14]
  i2628.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2629[15], i2629[16] )
  i2628.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2629[17], i2629[18] )
  i2628.m_autoSizeTextContainer = !!i2629[19]
  i2628.m_IsTextObjectScaleStatic = !!i2629[20]
  var i2631 = i2629[21]
  var i2630 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2631.length; i += 2) {
  request.r(i2631[i + 0], i2631[i + 1], 1, i2630, '')
  }
  i2628.m_fallbackFontAssets = i2630
  i2628.m_matchMaterialPreset = !!i2629[22]
  request.r(i2629[23], i2629[24], 0, i2628, 'm_defaultSpriteAsset')
  i2628.m_defaultSpriteAssetPath = i2629[25]
  i2628.m_enableEmojiSupport = !!i2629[26]
  i2628.m_MissingCharacterSpriteUnicode = i2629[27]
  i2628.m_defaultColorGradientPresetsPath = i2629[28]
  request.r(i2629[29], i2629[30], 0, i2628, 'm_defaultStyleSheet')
  i2628.m_StyleSheetsResourcePath = i2629[31]
  request.r(i2629[32], i2629[33], 0, i2628, 'm_leadingCharacters')
  request.r(i2629[34], i2629[35], 0, i2628, 'm_followingCharacters')
  i2628.m_UseModernHangulLineBreakingRules = !!i2629[36]
  return i2628
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2632 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2633 = data
  i2632.hashCode = i2633[0]
  request.r(i2633[1], i2633[2], 0, i2632, 'material')
  i2632.materialHashCode = i2633[3]
  request.r(i2633[4], i2633[5], 0, i2632, 'spriteSheet')
  var i2635 = i2633[6]
  var i2634 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.add(request.d('TMPro.TMP_Sprite', i2635[i + 0]));
  }
  i2632.spriteInfoList = i2634
  var i2637 = i2633[7]
  var i2636 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2637.length; i += 2) {
  request.r(i2637[i + 0], i2637[i + 1], 1, i2636, '')
  }
  i2632.fallbackSpriteAssets = i2636
  i2632.m_Version = i2633[8]
  i2632.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2633[9], i2632.m_FaceInfo)
  var i2639 = i2633[10]
  var i2638 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2639.length; i += 1) {
    i2638.add(request.d('TMPro.TMP_SpriteCharacter', i2639[i + 0]));
  }
  i2632.m_SpriteCharacterTable = i2638
  var i2641 = i2633[11]
  var i2640 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2641.length; i += 1) {
    i2640.add(request.d('TMPro.TMP_SpriteGlyph', i2641[i + 0]));
  }
  i2632.m_SpriteGlyphTable = i2640
  return i2632
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2644 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2645 = data
  i2644.name = i2645[0]
  i2644.hashCode = i2645[1]
  i2644.unicode = i2645[2]
  i2644.pivot = new pc.Vec2( i2645[3], i2645[4] )
  request.r(i2645[5], i2645[6], 0, i2644, 'sprite')
  i2644.id = i2645[7]
  i2644.x = i2645[8]
  i2644.y = i2645[9]
  i2644.width = i2645[10]
  i2644.height = i2645[11]
  i2644.xOffset = i2645[12]
  i2644.yOffset = i2645[13]
  i2644.xAdvance = i2645[14]
  i2644.scale = i2645[15]
  return i2644
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2650 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2651 = data
  i2650.m_Name = i2651[0]
  i2650.m_HashCode = i2651[1]
  i2650.m_ElementType = i2651[2]
  i2650.m_Unicode = i2651[3]
  i2650.m_GlyphIndex = i2651[4]
  i2650.m_Scale = i2651[5]
  return i2650
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2654 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2655 = data
  request.r(i2655[0], i2655[1], 0, i2654, 'sprite')
  i2654.m_Index = i2655[2]
  i2654.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2655[3], i2654.m_Metrics)
  i2654.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2655[4], i2654.m_GlyphRect)
  i2654.m_Scale = i2655[5]
  i2654.m_AtlasIndex = i2655[6]
  i2654.m_ClassDefinitionType = i2655[7]
  return i2654
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2656 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2657 = data
  var i2659 = i2657[0]
  var i2658 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.add(request.d('TMPro.TMP_Style', i2659[i + 0]));
  }
  i2656.m_StyleList = i2658
  return i2656
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2662 = root || request.c( 'TMPro.TMP_Style' )
  var i2663 = data
  i2662.m_Name = i2663[0]
  i2662.m_HashCode = i2663[1]
  i2662.m_OpeningDefinition = i2663[2]
  i2662.m_ClosingDefinition = i2663[3]
  i2662.m_OpeningTagArray = i2663[4]
  i2662.m_ClosingTagArray = i2663[5]
  i2662.m_OpeningTagUnicodeArray = i2663[6]
  i2662.m_ClosingTagUnicodeArray = i2663[7]
  return i2662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2665 = data
  var i2667 = i2665[0]
  var i2666 = []
  for(var i = 0; i < i2667.length; i += 1) {
    i2666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2667[i + 0]) );
  }
  i2664.files = i2666
  i2664.componentToPrefabIds = i2665[1]
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2671 = data
  i2670.path = i2671[0]
  request.r(i2671[1], i2671[2], 0, i2670, 'unityObject')
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2673 = data
  var i2675 = i2673[0]
  var i2674 = []
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2675[i + 0]) );
  }
  i2672.scriptsExecutionOrder = i2674
  var i2677 = i2673[1]
  var i2676 = []
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2677[i + 0]) );
  }
  i2672.sortingLayers = i2676
  var i2679 = i2673[2]
  var i2678 = []
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2679[i + 0]) );
  }
  i2672.cullingLayers = i2678
  i2672.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2673[3], i2672.timeSettings)
  i2672.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2673[4], i2672.physicsSettings)
  i2672.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2673[5], i2672.physics2DSettings)
  i2672.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2673[6], i2672.qualitySettings)
  i2672.enableRealtimeShadows = !!i2673[7]
  i2672.enableAutoInstancing = !!i2673[8]
  i2672.enableDynamicBatching = !!i2673[9]
  i2672.lightmapEncodingQuality = i2673[10]
  i2672.desiredColorSpace = i2673[11]
  var i2681 = i2673[12]
  var i2680 = []
  for(var i = 0; i < i2681.length; i += 1) {
    i2680.push( i2681[i + 0] );
  }
  i2672.allTags = i2680
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2685 = data
  i2684.name = i2685[0]
  i2684.value = i2685[1]
  return i2684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2689 = data
  i2688.id = i2689[0]
  i2688.name = i2689[1]
  i2688.value = i2689[2]
  return i2688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2693 = data
  i2692.id = i2693[0]
  i2692.name = i2693[1]
  return i2692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2695 = data
  i2694.fixedDeltaTime = i2695[0]
  i2694.maximumDeltaTime = i2695[1]
  i2694.timeScale = i2695[2]
  i2694.maximumParticleTimestep = i2695[3]
  return i2694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2697 = data
  i2696.gravity = new pc.Vec3( i2697[0], i2697[1], i2697[2] )
  i2696.defaultSolverIterations = i2697[3]
  i2696.bounceThreshold = i2697[4]
  i2696.autoSyncTransforms = !!i2697[5]
  i2696.autoSimulation = !!i2697[6]
  var i2699 = i2697[7]
  var i2698 = []
  for(var i = 0; i < i2699.length; i += 1) {
    i2698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2699[i + 0]) );
  }
  i2696.collisionMatrix = i2698
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2703 = data
  i2702.enabled = !!i2703[0]
  i2702.layerId = i2703[1]
  i2702.otherLayerId = i2703[2]
  return i2702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2705 = data
  request.r(i2705[0], i2705[1], 0, i2704, 'material')
  i2704.gravity = new pc.Vec2( i2705[2], i2705[3] )
  i2704.positionIterations = i2705[4]
  i2704.velocityIterations = i2705[5]
  i2704.velocityThreshold = i2705[6]
  i2704.maxLinearCorrection = i2705[7]
  i2704.maxAngularCorrection = i2705[8]
  i2704.maxTranslationSpeed = i2705[9]
  i2704.maxRotationSpeed = i2705[10]
  i2704.baumgarteScale = i2705[11]
  i2704.baumgarteTOIScale = i2705[12]
  i2704.timeToSleep = i2705[13]
  i2704.linearSleepTolerance = i2705[14]
  i2704.angularSleepTolerance = i2705[15]
  i2704.defaultContactOffset = i2705[16]
  i2704.autoSimulation = !!i2705[17]
  i2704.queriesHitTriggers = !!i2705[18]
  i2704.queriesStartInColliders = !!i2705[19]
  i2704.callbacksOnDisable = !!i2705[20]
  i2704.reuseCollisionCallbacks = !!i2705[21]
  i2704.autoSyncTransforms = !!i2705[22]
  var i2707 = i2705[23]
  var i2706 = []
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2707[i + 0]) );
  }
  i2704.collisionMatrix = i2706
  return i2704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2711 = data
  i2710.enabled = !!i2711[0]
  i2710.layerId = i2711[1]
  i2710.otherLayerId = i2711[2]
  return i2710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2713 = data
  var i2715 = i2713[0]
  var i2714 = []
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2715[i + 0]) );
  }
  i2712.qualityLevels = i2714
  var i2717 = i2713[1]
  var i2716 = []
  for(var i = 0; i < i2717.length; i += 1) {
    i2716.push( i2717[i + 0] );
  }
  i2712.names = i2716
  i2712.shadows = i2713[2]
  i2712.anisotropicFiltering = i2713[3]
  i2712.antiAliasing = i2713[4]
  i2712.lodBias = i2713[5]
  i2712.shadowCascades = i2713[6]
  i2712.shadowDistance = i2713[7]
  i2712.shadowmaskMode = i2713[8]
  i2712.shadowProjection = i2713[9]
  i2712.shadowResolution = i2713[10]
  i2712.softParticles = !!i2713[11]
  i2712.softVegetation = !!i2713[12]
  i2712.activeColorSpace = i2713[13]
  i2712.desiredColorSpace = i2713[14]
  i2712.masterTextureLimit = i2713[15]
  i2712.maxQueuedFrames = i2713[16]
  i2712.particleRaycastBudget = i2713[17]
  i2712.pixelLightCount = i2713[18]
  i2712.realtimeReflectionProbes = !!i2713[19]
  i2712.shadowCascade2Split = i2713[20]
  i2712.shadowCascade4Split = new pc.Vec3( i2713[21], i2713[22], i2713[23] )
  i2712.streamingMipmapsActive = !!i2713[24]
  i2712.vSyncCount = i2713[25]
  i2712.asyncUploadBufferSize = i2713[26]
  i2712.asyncUploadTimeSlice = i2713[27]
  i2712.billboardsFaceCameraPosition = !!i2713[28]
  i2712.shadowNearPlaneOffset = i2713[29]
  i2712.streamingMipmapsMemoryBudget = i2713[30]
  i2712.maximumLODLevel = i2713[31]
  i2712.streamingMipmapsAddAllCameras = !!i2713[32]
  i2712.streamingMipmapsMaxLevelReduction = i2713[33]
  i2712.streamingMipmapsRenderersPerFrame = i2713[34]
  i2712.resolutionScalingFixedDPIFactor = i2713[35]
  i2712.streamingMipmapsMaxFileIORequests = i2713[36]
  i2712.currentQualityLevel = i2713[37]
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2721 = data
  i2720.name = i2721[0]
  var i2723 = i2721[1]
  var i2722 = []
  for(var i = 0; i < i2723.length; i += 1) {
    i2722.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2723[i + 0]) );
  }
  i2720.tos = i2722
  var i2725 = i2721[2]
  var i2724 = []
  for(var i = 0; i < i2725.length; i += 1) {
    i2724.push( i2725[i + 0] );
  }
  i2720.constant = i2724
  i2720.isValid = !!i2721[3]
  i2720.isHuman = !!i2721[4]
  i2720.hasRootMotion = !!i2721[5]
  return i2720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2729 = data
  i2728.hash = i2729[0]
  i2728.path = i2729[1]
  return i2728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2733 = data
  i2732.weight = i2733[0]
  i2732.vertices = i2733[1]
  i2732.normals = i2733[2]
  i2732.tangents = i2733[3]
  return i2732
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2734 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2735 = data
  i2734.xPlacement = i2735[0]
  i2734.yPlacement = i2735[1]
  i2734.xAdvance = i2735[2]
  i2734.yAdvance = i2735[3]
  return i2734
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[25],"79":[32],"80":[19],"81":[19],"82":[19],"83":[19],"84":[19],"85":[19],"86":[19],"87":[88],"89":[88],"90":[88],"91":[88],"92":[88],"93":[88],"94":[88],"95":[88],"96":[88],"97":[88],"98":[88],"99":[88],"100":[88],"101":[32],"102":[3],"103":[104],"105":[104],"39":[27],"26":[20],"106":[20],"11":[107],"24":[20],"108":[27],"63":[3,27],"46":[27,28],"109":[27],"110":[28,27],"111":[3],"112":[28,27],"113":[27],"114":[115],"116":[27],"117":[27],"41":[39],"30":[28,27],"118":[27],"40":[39],"44":[27],"119":[27],"43":[27],"120":[27],"121":[27],"122":[27],"123":[27],"124":[27],"125":[27],"126":[28,27],"127":[27],"128":[27],"129":[27],"62":[27],"130":[28,27],"131":[27],"132":[53],"133":[53],"54":[53],"134":[53],"135":[32],"136":[32],"137":[115],"138":[115]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","LocalRotationController","UnityEngine.MeshCollider","DeathObstacleEffect","BasicPushObstacleEffect","RotaterPushObstacleEffect","UnityEngine.CapsuleCollider","ShiningObstacleEffect","UnityEngine.ParticleSystem","PatrolMovementController","UnityEngine.ParticleSystemRenderer","UnityEngine.Rigidbody","UnityEngine.CharacterController","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","PlayerController","UnityEngine.SkinnedMeshRenderer","BotController","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Camera","UnityEngine.AudioListener","CameraFollow","FOVCalculator","SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Joystick","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.ContentSizeFitter","DeathCounter","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","RankManager","CoinManager","UnityEngine.GameObject","UnityEngine.UI.Button","GameManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","FinishLine","CoinCollectible","BackgroundMusic","NodeManager","AINode","UnityEngine.Cubemap","WallPainter","UnityEngine.UI.Slider","TMPro.TextMeshPro","UnityEngine.AnimationClip","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CharacterBaseController","ObstacleBase","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.45f1";

Deserializers.productName = "PanteonDemo";

Deserializers.lunaInitializationTime = "11/07/2024 13:58:49";

Deserializers.lunaDaysRunning = "2.5";

Deserializers.lunaVersion = "6.2.0";

Deserializers.lunaSHA = "7963e9fed253d218ae1c5298f104efd7e457ea14";

Deserializers.creativeName = "First";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1553";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4839";

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

Deserializers.buildID = "6d581aad-8db5-4a45-b0d6-42a85d53d837";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

