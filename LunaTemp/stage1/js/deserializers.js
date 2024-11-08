var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.JointSpring' )
  var i685 = data
  i684.spring = i685[0]
  i684.damper = i685[1]
  i684.targetPosition = i685[2]
  return i684
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.JointMotor' )
  var i687 = data
  i686.m_TargetVelocity = i687[0]
  i686.m_Force = i687[1]
  i686.m_FreeSpin = i687[2]
  return i686
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.JointLimits' )
  var i689 = data
  i688.m_Min = i689[0]
  i688.m_Max = i689[1]
  i688.m_Bounciness = i689[2]
  i688.m_BounceMinVelocity = i689[3]
  i688.m_ContactDistance = i689[4]
  i688.minBounce = i689[5]
  i688.maxBounce = i689[6]
  return i688
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.JointDrive' )
  var i691 = data
  i690.m_PositionSpring = i691[0]
  i690.m_PositionDamper = i691[1]
  i690.m_MaximumForce = i691[2]
  return i690
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i693 = data
  i692.m_Spring = i693[0]
  i692.m_Damper = i693[1]
  return i692
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i695 = data
  i694.m_Limit = i695[0]
  i694.m_Bounciness = i695[1]
  i694.m_ContactDistance = i695[2]
  return i694
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i697 = data
  i696.m_ExtremumSlip = i697[0]
  i696.m_ExtremumValue = i697[1]
  i696.m_AsymptoteSlip = i697[2]
  i696.m_AsymptoteValue = i697[3]
  i696.m_Stiffness = i697[4]
  return i696
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i699 = data
  i698.m_LowerAngle = i699[0]
  i698.m_UpperAngle = i699[1]
  return i698
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i701 = data
  i700.m_MotorSpeed = i701[0]
  i700.m_MaximumMotorTorque = i701[1]
  return i700
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i703 = data
  i702.m_DampingRatio = i703[0]
  i702.m_Frequency = i703[1]
  i702.m_Angle = i703[2]
  return i702
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i705 = data
  i704.m_LowerTranslation = i705[0]
  i704.m_UpperTranslation = i705[1]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i707 = data
  i706.position = new pc.Vec3( i707[0], i707[1], i707[2] )
  i706.scale = new pc.Vec3( i707[3], i707[4], i707[5] )
  i706.rotation = new pc.Quat(i707[6], i707[7], i707[8], i707[9])
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'sharedMesh')
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'additionalVertexStreams')
  i710.enabled = !!i711[2]
  request.r(i711[3], i711[4], 0, i710, 'sharedMaterial')
  var i713 = i711[5]
  var i712 = []
  for(var i = 0; i < i713.length; i += 2) {
  request.r(i713[i + 0], i713[i + 1], 2, i712, '')
  }
  i710.sharedMaterials = i712
  i710.receiveShadows = !!i711[6]
  i710.shadowCastingMode = i711[7]
  i710.sortingLayerID = i711[8]
  i710.sortingOrder = i711[9]
  i710.lightmapIndex = i711[10]
  i710.lightmapSceneIndex = i711[11]
  i710.lightmapScaleOffset = new pc.Vec4( i711[12], i711[13], i711[14], i711[15] )
  i710.lightProbeUsage = i711[16]
  i710.reflectionProbeUsage = i711[17]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i717 = data
  i716.name = i717[0]
  i716.tagId = i717[1]
  i716.enabled = !!i717[2]
  i716.isStatic = !!i717[3]
  i716.layer = i717[4]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i719 = data
  i718.name = i719[0]
  i718.halfPrecision = !!i719[1]
  i718.useUInt32IndexFormat = !!i719[2]
  i718.vertexCount = i719[3]
  i718.aabb = i719[4]
  var i721 = i719[5]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( !!i721[i + 0] );
  }
  i718.streams = i720
  i718.vertices = i719[6]
  var i723 = i719[7]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i723[i + 0]) );
  }
  i718.subMeshes = i722
  var i725 = i719[8]
  var i724 = []
  for(var i = 0; i < i725.length; i += 16) {
    i724.push( new pc.Mat4().setData(i725[i + 0], i725[i + 1], i725[i + 2], i725[i + 3],  i725[i + 4], i725[i + 5], i725[i + 6], i725[i + 7],  i725[i + 8], i725[i + 9], i725[i + 10], i725[i + 11],  i725[i + 12], i725[i + 13], i725[i + 14], i725[i + 15]) );
  }
  i718.bindposes = i724
  var i727 = i719[9]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i727[i + 0]) );
  }
  i718.blendShapes = i726
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i733 = data
  i732.triangles = i733[0]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i739 = data
  i738.name = i739[0]
  var i741 = i739[1]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i741[i + 0]) );
  }
  i738.frames = i740
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i742 = root || new pc.UnityMaterial()
  var i743 = data
  i742.name = i743[0]
  request.r(i743[1], i743[2], 0, i742, 'shader')
  i742.renderQueue = i743[3]
  i742.enableInstancing = !!i743[4]
  var i745 = i743[5]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i745[i + 0]) );
  }
  i742.floatParameters = i744
  var i747 = i743[6]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i747[i + 0]) );
  }
  i742.colorParameters = i746
  var i749 = i743[7]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i749[i + 0]) );
  }
  i742.vectorParameters = i748
  var i751 = i743[8]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i751[i + 0]) );
  }
  i742.textureParameters = i750
  var i753 = i743[9]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i753[i + 0]) );
  }
  i742.materialFlags = i752
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i757 = data
  i756.name = i757[0]
  i756.value = i757[1]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i761 = data
  i760.name = i761[0]
  i760.value = new pc.Color(i761[1], i761[2], i761[3], i761[4])
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i765 = data
  i764.name = i765[0]
  i764.value = new pc.Vec4( i765[1], i765[2], i765[3], i765[4] )
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i769 = data
  i768.name = i769[0]
  request.r(i769[1], i769[2], 0, i768, 'value')
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i773 = data
  i772.name = i773[0]
  i772.enabled = !!i773[1]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i775 = data
  i774.name = i775[0]
  i774.width = i775[1]
  i774.height = i775[2]
  i774.mipmapCount = i775[3]
  i774.anisoLevel = i775[4]
  i774.filterMode = i775[5]
  i774.hdr = !!i775[6]
  i774.format = i775[7]
  i774.wrapMode = i775[8]
  i774.alphaIsTransparency = !!i775[9]
  i774.alphaSource = i775[10]
  i774.graphicsFormat = i775[11]
  i774.sRGBTexture = !!i775[12]
  i774.desiredColorSpace = i775[13]
  i774.wrapU = i775[14]
  i774.wrapV = i775[15]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i777 = data
  i776.center = new pc.Vec3( i777[0], i777[1], i777[2] )
  i776.size = new pc.Vec3( i777[3], i777[4], i777[5] )
  i776.enabled = !!i777[6]
  i776.isTrigger = !!i777[7]
  request.r(i777[8], i777[9], 0, i776, 'material')
  return i776
}

Deserializers["DeathObstacleEffect"] = function (request, data, root) {
  var i778 = root || request.c( 'DeathObstacleEffect' )
  var i779 = data
  return i778
}

Deserializers["LocalRotationController"] = function (request, data, root) {
  var i780 = root || request.c( 'LocalRotationController' )
  var i781 = data
  i780.rotationSpeed = new pc.Vec3( i781[0], i781[1], i781[2] )
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i783 = data
  i782.enabled = !!i783[0]
  i782.isTrigger = !!i783[1]
  request.r(i783[2], i783[3], 0, i782, 'material')
  request.r(i783[4], i783[5], 0, i782, 'sharedMesh')
  i782.convex = !!i783[6]
  return i782
}

Deserializers["BasicPushObstacleEffect"] = function (request, data, root) {
  var i784 = root || request.c( 'BasicPushObstacleEffect' )
  var i785 = data
  i784.pushVector = new pc.Vec3( i785[0], i785[1], i785[2] )
  return i784
}

Deserializers["RotaterPushObstacleEffect"] = function (request, data, root) {
  var i786 = root || request.c( 'RotaterPushObstacleEffect' )
  var i787 = data
  i786.pushForce = i787[0]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i789 = data
  i788.center = new pc.Vec3( i789[0], i789[1], i789[2] )
  i788.radius = i789[3]
  i788.height = i789[4]
  i788.direction = i789[5]
  i788.enabled = !!i789[6]
  i788.isTrigger = !!i789[7]
  request.r(i789[8], i789[9], 0, i788, 'material')
  return i788
}

Deserializers["ShiningObstacleEffect"] = function (request, data, root) {
  var i790 = root || request.c( 'ShiningObstacleEffect' )
  var i791 = data
  i790.pushForce = i791[0]
  request.r(i791[1], i791[2], 0, i790, 'shineParticle')
  return i790
}

Deserializers["PatrolMovementController"] = function (request, data, root) {
  var i792 = root || request.c( 'PatrolMovementController' )
  var i793 = data
  i792.movementSpeed = new pc.Vec3( i793[0], i793[1], i793[2] )
  i792.minX = i793[3]
  i792.maxX = i793[4]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i795 = data
  i794.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i795[0], i794.main)
  i794.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i795[1], i794.colorBySpeed)
  i794.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i795[2], i794.colorOverLifetime)
  i794.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i795[3], i794.emission)
  i794.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i795[4], i794.rotationBySpeed)
  i794.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i795[5], i794.rotationOverLifetime)
  i794.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i795[6], i794.shape)
  i794.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i795[7], i794.sizeBySpeed)
  i794.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i795[8], i794.sizeOverLifetime)
  i794.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i795[9], i794.textureSheetAnimation)
  i794.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i795[10], i794.velocityOverLifetime)
  i794.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i795[11], i794.noise)
  i794.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i795[12], i794.inheritVelocity)
  i794.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i795[13], i794.forceOverLifetime)
  i794.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i795[14], i794.limitVelocityOverLifetime)
  i794.useAutoRandomSeed = !!i795[15]
  i794.randomSeed = i795[16]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemMain()
  var i797 = data
  i796.duration = i797[0]
  i796.loop = !!i797[1]
  i796.prewarm = !!i797[2]
  i796.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[3], i796.startDelay)
  i796.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[4], i796.startLifetime)
  i796.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[5], i796.startSpeed)
  i796.startSize3D = !!i797[6]
  i796.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[7], i796.startSizeX)
  i796.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[8], i796.startSizeY)
  i796.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[9], i796.startSizeZ)
  i796.startRotation3D = !!i797[10]
  i796.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[11], i796.startRotationX)
  i796.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[12], i796.startRotationY)
  i796.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[13], i796.startRotationZ)
  i796.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i797[14], i796.startColor)
  i796.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[15], i796.gravityModifier)
  i796.simulationSpace = i797[16]
  request.r(i797[17], i797[18], 0, i796, 'customSimulationSpace')
  i796.simulationSpeed = i797[19]
  i796.useUnscaledTime = !!i797[20]
  i796.scalingMode = i797[21]
  i796.playOnAwake = !!i797[22]
  i796.maxParticles = i797[23]
  i796.emitterVelocityMode = i797[24]
  i796.stopAction = i797[25]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i798 = root || new pc.MinMaxCurve()
  var i799 = data
  i798.mode = i799[0]
  i798.curveMin = new pc.AnimationCurve( { keys_flow: i799[1] } )
  i798.curveMax = new pc.AnimationCurve( { keys_flow: i799[2] } )
  i798.curveMultiplier = i799[3]
  i798.constantMin = i799[4]
  i798.constantMax = i799[5]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i800 = root || new pc.MinMaxGradient()
  var i801 = data
  i800.mode = i801[0]
  i800.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i801[1], i800.gradientMin)
  i800.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i801[2], i800.gradientMax)
  i800.colorMin = new pc.Color(i801[3], i801[4], i801[5], i801[6])
  i800.colorMax = new pc.Color(i801[7], i801[8], i801[9], i801[10])
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i803 = data
  i802.mode = i803[0]
  var i805 = i803[1]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i805[i + 0]) );
  }
  i802.colorKeys = i804
  var i807 = i803[2]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i807[i + 0]) );
  }
  i802.alphaKeys = i806
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemColorBySpeed()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i809[1], i808.color)
  i808.range = new pc.Vec2( i809[2], i809[3] )
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i813 = data
  i812.color = new pc.Color(i813[0], i813[1], i813[2], i813[3])
  i812.time = i813[4]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i817 = data
  i816.alpha = i817[0]
  i816.time = i817[1]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemColorOverLifetime()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i819[1], i818.color)
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemEmitter()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[1], i820.rateOverTime)
  i820.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[2], i820.rateOverDistance)
  var i823 = i821[3]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i823[i + 0]) );
  }
  i820.bursts = i822
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemBurst()
  var i827 = data
  i826.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[0], i826.count)
  i826.cycleCount = i827[1]
  i826.minCount = i827[2]
  i826.maxCount = i827[3]
  i826.repeatInterval = i827[4]
  i826.time = i827[5]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemRotationBySpeed()
  var i829 = data
  i828.enabled = !!i829[0]
  i828.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[1], i828.x)
  i828.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[2], i828.y)
  i828.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[3], i828.z)
  i828.separateAxes = !!i829[4]
  i828.range = new pc.Vec2( i829[5], i829[6] )
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i830 = root || new pc.ParticleSystemRotationOverLifetime()
  var i831 = data
  i830.enabled = !!i831[0]
  i830.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[1], i830.x)
  i830.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[2], i830.y)
  i830.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[3], i830.z)
  i830.separateAxes = !!i831[4]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i832 = root || new pc.ParticleSystemShape()
  var i833 = data
  i832.enabled = !!i833[0]
  i832.shapeType = i833[1]
  i832.randomDirectionAmount = i833[2]
  i832.sphericalDirectionAmount = i833[3]
  i832.randomPositionAmount = i833[4]
  i832.alignToDirection = !!i833[5]
  i832.radius = i833[6]
  i832.radiusMode = i833[7]
  i832.radiusSpread = i833[8]
  i832.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[9], i832.radiusSpeed)
  i832.radiusThickness = i833[10]
  i832.angle = i833[11]
  i832.length = i833[12]
  i832.boxThickness = new pc.Vec3( i833[13], i833[14], i833[15] )
  i832.meshShapeType = i833[16]
  request.r(i833[17], i833[18], 0, i832, 'mesh')
  request.r(i833[19], i833[20], 0, i832, 'meshRenderer')
  request.r(i833[21], i833[22], 0, i832, 'skinnedMeshRenderer')
  i832.useMeshMaterialIndex = !!i833[23]
  i832.meshMaterialIndex = i833[24]
  i832.useMeshColors = !!i833[25]
  i832.normalOffset = i833[26]
  i832.arc = i833[27]
  i832.arcMode = i833[28]
  i832.arcSpread = i833[29]
  i832.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[30], i832.arcSpeed)
  i832.donutRadius = i833[31]
  i832.position = new pc.Vec3( i833[32], i833[33], i833[34] )
  i832.rotation = new pc.Vec3( i833[35], i833[36], i833[37] )
  i832.scale = new pc.Vec3( i833[38], i833[39], i833[40] )
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i834 = root || new pc.ParticleSystemSizeBySpeed()
  var i835 = data
  i834.enabled = !!i835[0]
  i834.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[1], i834.x)
  i834.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[2], i834.y)
  i834.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[3], i834.z)
  i834.separateAxes = !!i835[4]
  i834.range = new pc.Vec2( i835[5], i835[6] )
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i836 = root || new pc.ParticleSystemSizeOverLifetime()
  var i837 = data
  i836.enabled = !!i837[0]
  i836.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[1], i836.x)
  i836.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[2], i836.y)
  i836.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[3], i836.z)
  i836.separateAxes = !!i837[4]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i838 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i839 = data
  i838.enabled = !!i839[0]
  i838.mode = i839[1]
  i838.animation = i839[2]
  i838.numTilesX = i839[3]
  i838.numTilesY = i839[4]
  i838.useRandomRow = !!i839[5]
  i838.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[6], i838.frameOverTime)
  i838.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[7], i838.startFrame)
  i838.cycleCount = i839[8]
  i838.rowIndex = i839[9]
  i838.flipU = i839[10]
  i838.flipV = i839[11]
  i838.spriteCount = i839[12]
  var i841 = i839[13]
  var i840 = []
  for(var i = 0; i < i841.length; i += 2) {
  request.r(i841[i + 0], i841[i + 1], 2, i840, '')
  }
  i838.sprites = i840
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i844 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i845 = data
  i844.enabled = !!i845[0]
  i844.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[1], i844.x)
  i844.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[2], i844.y)
  i844.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[3], i844.z)
  i844.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[4], i844.radial)
  i844.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[5], i844.speedModifier)
  i844.space = i845[6]
  i844.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[7], i844.orbitalX)
  i844.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[8], i844.orbitalY)
  i844.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[9], i844.orbitalZ)
  i844.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[10], i844.orbitalOffsetX)
  i844.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[11], i844.orbitalOffsetY)
  i844.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[12], i844.orbitalOffsetZ)
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i846 = root || new pc.ParticleSystemNoise()
  var i847 = data
  i846.enabled = !!i847[0]
  i846.separateAxes = !!i847[1]
  i846.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[2], i846.strengthX)
  i846.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[3], i846.strengthY)
  i846.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[4], i846.strengthZ)
  i846.frequency = i847[5]
  i846.damping = !!i847[6]
  i846.octaveCount = i847[7]
  i846.octaveMultiplier = i847[8]
  i846.octaveScale = i847[9]
  i846.quality = i847[10]
  i846.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[11], i846.scrollSpeed)
  i846.scrollSpeedMultiplier = i847[12]
  i846.remapEnabled = !!i847[13]
  i846.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[14], i846.remapX)
  i846.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[15], i846.remapY)
  i846.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[16], i846.remapZ)
  i846.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[17], i846.positionAmount)
  i846.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[18], i846.rotationAmount)
  i846.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[19], i846.sizeAmount)
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i848 = root || new pc.ParticleSystemInheritVelocity()
  var i849 = data
  i848.enabled = !!i849[0]
  i848.mode = i849[1]
  i848.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[2], i848.curve)
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i850 = root || new pc.ParticleSystemForceOverLifetime()
  var i851 = data
  i850.enabled = !!i851[0]
  i850.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[1], i850.x)
  i850.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[2], i850.y)
  i850.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[3], i850.z)
  i850.space = i851[4]
  i850.randomized = !!i851[5]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i852 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i853 = data
  i852.enabled = !!i853[0]
  i852.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[1], i852.limit)
  i852.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[2], i852.limitX)
  i852.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[3], i852.limitY)
  i852.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[4], i852.limitZ)
  i852.dampen = i853[5]
  i852.separateAxes = !!i853[6]
  i852.space = i853[7]
  i852.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[8], i852.drag)
  i852.multiplyDragByParticleSize = !!i853[9]
  i852.multiplyDragByParticleVelocity = !!i853[10]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i855 = data
  i854.enabled = !!i855[0]
  request.r(i855[1], i855[2], 0, i854, 'sharedMaterial')
  var i857 = i855[3]
  var i856 = []
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 2, i856, '')
  }
  i854.sharedMaterials = i856
  i854.receiveShadows = !!i855[4]
  i854.shadowCastingMode = i855[5]
  i854.sortingLayerID = i855[6]
  i854.sortingOrder = i855[7]
  i854.lightmapIndex = i855[8]
  i854.lightmapSceneIndex = i855[9]
  i854.lightmapScaleOffset = new pc.Vec4( i855[10], i855[11], i855[12], i855[13] )
  i854.lightProbeUsage = i855[14]
  i854.reflectionProbeUsage = i855[15]
  request.r(i855[16], i855[17], 0, i854, 'mesh')
  i854.meshCount = i855[18]
  i854.activeVertexStreamsCount = i855[19]
  i854.alignment = i855[20]
  i854.renderMode = i855[21]
  i854.sortMode = i855[22]
  i854.lengthScale = i855[23]
  i854.velocityScale = i855[24]
  i854.cameraVelocityScale = i855[25]
  i854.normalDirection = i855[26]
  i854.sortingFudge = i855[27]
  i854.minParticleSize = i855[28]
  i854.maxParticleSize = i855[29]
  i854.pivot = new pc.Vec3( i855[30], i855[31], i855[32] )
  request.r(i855[33], i855[34], 0, i854, 'trailMaterial')
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i859 = data
  i858.enabled = !!i859[0]
  request.r(i859[1], i859[2], 0, i858, 'sharedMaterial')
  var i861 = i859[3]
  var i860 = []
  for(var i = 0; i < i861.length; i += 2) {
  request.r(i861[i + 0], i861[i + 1], 2, i860, '')
  }
  i858.sharedMaterials = i860
  i858.receiveShadows = !!i859[4]
  i858.shadowCastingMode = i859[5]
  i858.sortingLayerID = i859[6]
  i858.sortingOrder = i859[7]
  i858.lightmapIndex = i859[8]
  i858.lightmapSceneIndex = i859[9]
  i858.lightmapScaleOffset = new pc.Vec4( i859[10], i859[11], i859[12], i859[13] )
  i858.lightProbeUsage = i859[14]
  i858.reflectionProbeUsage = i859[15]
  request.r(i859[16], i859[17], 0, i858, 'sharedMesh')
  var i863 = i859[18]
  var i862 = []
  for(var i = 0; i < i863.length; i += 2) {
  request.r(i863[i + 0], i863[i + 1], 2, i862, '')
  }
  i858.bones = i862
  i858.updateWhenOffscreen = !!i859[19]
  i858.localBounds = i859[20]
  request.r(i859[21], i859[22], 0, i858, 'rootBone')
  var i865 = i859[23]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i865[i + 0]) );
  }
  i858.blendShapesWeights = i864
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i871 = data
  i870.weight = i871[0]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i873 = data
  i872.enabled = !!i873[0]
  i872.center = new pc.Vec3( i873[1], i873[2], i873[3] )
  i872.radius = i873[4]
  i872.height = i873[5]
  i872.minMoveDistance = i873[6]
  i872.skinWidth = i873[7]
  i872.enableOverlapRecovery = !!i873[8]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'animatorController')
  request.r(i875[2], i875[3], 0, i874, 'avatar')
  i874.updateMode = i875[4]
  i874.hasTransformHierarchy = !!i875[5]
  i874.applyRootMotion = !!i875[6]
  var i877 = i875[7]
  var i876 = []
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 2, i876, '')
  }
  i874.humanBones = i876
  i874.enabled = !!i875[8]
  return i874
}

Deserializers["BotController"] = function (request, data, root) {
  var i878 = root || request.c( 'BotController' )
  var i879 = data
  i878.MoveSpeed = i879[0]
  i878.SpeedChangeRate = i879[1]
  i878.RotationSmoothTime = i879[2]
  i878.gravity = i879[3]
  i878.fallThreshold = i879[4]
  i878.pushForceDecayRate = i879[5]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i881 = data
  i880.pivot = new pc.Vec2( i881[0], i881[1] )
  i880.anchorMin = new pc.Vec2( i881[2], i881[3] )
  i880.anchorMax = new pc.Vec2( i881[4], i881[5] )
  i880.sizeDelta = new pc.Vec2( i881[6], i881[7] )
  i880.anchoredPosition3D = new pc.Vec3( i881[8], i881[9], i881[10] )
  i880.rotation = new pc.Quat(i881[11], i881[12], i881[13], i881[14])
  i880.scale = new pc.Vec3( i881[15], i881[16], i881[17] )
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i883 = data
  i882.cullTransparentMesh = !!i883[0]
  return i882
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.UI.Image' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'm_Sprite')
  i884.m_Type = i885[2]
  i884.m_PreserveAspect = !!i885[3]
  i884.m_FillCenter = !!i885[4]
  i884.m_FillMethod = i885[5]
  i884.m_FillAmount = i885[6]
  i884.m_FillClockwise = !!i885[7]
  i884.m_FillOrigin = i885[8]
  i884.m_UseSpriteMesh = !!i885[9]
  i884.m_PixelsPerUnitMultiplier = i885[10]
  request.r(i885[11], i885[12], 0, i884, 'm_Material')
  i884.m_Maskable = !!i885[13]
  i884.m_Color = new pc.Color(i885[14], i885[15], i885[16], i885[17])
  i884.m_RaycastTarget = !!i885[18]
  i884.m_RaycastPadding = new pc.Vec4( i885[19], i885[20], i885[21], i885[22] )
  return i884
}

Deserializers["CoinCollectible"] = function (request, data, root) {
  var i886 = root || request.c( 'CoinCollectible' )
  var i887 = data
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i889 = data
  i888.name = i889[0]
  i888.atlasId = i889[1]
  i888.mipmapCount = i889[2]
  i888.hdr = !!i889[3]
  i888.size = i889[4]
  i888.anisoLevel = i889[5]
  i888.filterMode = i889[6]
  var i891 = i889[7]
  var i890 = []
  for(var i = 0; i < i891.length; i += 4) {
    i890.push( UnityEngine.Rect.MinMaxRect(i891[i + 0], i891[i + 1], i891[i + 2], i891[i + 3]) );
  }
  i888.rects = i890
  i888.wrapU = i889[8]
  i888.wrapV = i889[9]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i895 = data
  i894.name = i895[0]
  i894.index = i895[1]
  i894.startup = !!i895[2]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i897 = data
  i896.enabled = !!i897[0]
  i896.type = i897[1]
  i896.color = new pc.Color(i897[2], i897[3], i897[4], i897[5])
  i896.cullingMask = i897[6]
  i896.intensity = i897[7]
  i896.range = i897[8]
  i896.spotAngle = i897[9]
  i896.shadows = i897[10]
  i896.shadowNormalBias = i897[11]
  i896.shadowBias = i897[12]
  i896.shadowStrength = i897[13]
  i896.shadowResolution = i897[14]
  i896.lightmapBakeType = i897[15]
  i896.renderMode = i897[16]
  request.r(i897[17], i897[18], 0, i896, 'cookie')
  i896.cookieSize = i897[19]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i899 = data
  i898.enabled = !!i899[0]
  i898.aspect = i899[1]
  i898.orthographic = !!i899[2]
  i898.orthographicSize = i899[3]
  i898.backgroundColor = new pc.Color(i899[4], i899[5], i899[6], i899[7])
  i898.nearClipPlane = i899[8]
  i898.farClipPlane = i899[9]
  i898.fieldOfView = i899[10]
  i898.depth = i899[11]
  i898.clearFlags = i899[12]
  i898.cullingMask = i899[13]
  i898.rect = i899[14]
  request.r(i899[15], i899[16], 0, i898, 'targetTexture')
  i898.usePhysicalProperties = !!i899[17]
  i898.focalLength = i899[18]
  i898.sensorSize = new pc.Vec2( i899[19], i899[20] )
  i898.lensShift = new pc.Vec2( i899[21], i899[22] )
  i898.gateFit = i899[23]
  i898.commandBufferCount = i899[24]
  i898.cameraType = i899[25]
  return i898
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i900 = root || request.c( 'CameraFollow' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'target')
  request.r(i901[2], i901[3], 0, i900, 'finishTarget')
  return i900
}

Deserializers["FOVCalculator"] = function (request, data, root) {
  var i902 = root || request.c( 'FOVCalculator' )
  var i903 = data
  return i902
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i904 = root || request.c( 'SoundManager' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'pushSound')
  request.r(i905[2], i905[3], 0, i904, 'coinSound')
  request.r(i905[4], i905[5], 0, i904, 'countdownSound')
  request.r(i905[6], i905[7], 0, i904, 'botDeathSound')
  request.r(i905[8], i905[9], 0, i904, 'coinFirstInteractionSound')
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'clip')
  request.r(i907[2], i907[3], 0, i906, 'outputAudioMixerGroup')
  i906.playOnAwake = !!i907[4]
  i906.loop = !!i907[5]
  i906.time = i907[6]
  i906.volume = i907[7]
  i906.pitch = i907[8]
  i906.enabled = !!i907[9]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i909 = data
  i908.mass = i909[0]
  i908.drag = i909[1]
  i908.angularDrag = i909[2]
  i908.useGravity = !!i909[3]
  i908.isKinematic = !!i909[4]
  i908.constraints = i909[5]
  i908.maxAngularVelocity = i909[6]
  i908.collisionDetectionMode = i909[7]
  i908.interpolation = i909[8]
  return i908
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i910 = root || request.c( 'PlayerController' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'playerEndTransform')
  request.r(i911[2], i911[3], 0, i910, 'playerGameCompleteTransform')
  i910.MoveSpeed = i911[4]
  i910.SpeedChangeRate = i911[5]
  i910.RotationSmoothTime = i911[6]
  i910.gravity = i911[7]
  i910.fallThreshold = i911[8]
  i910.pushForceDecayRate = i911[9]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i913 = data
  i912.enabled = !!i913[0]
  i912.planeDistance = i913[1]
  i912.referencePixelsPerUnit = i913[2]
  i912.isFallbackOverlay = !!i913[3]
  i912.renderMode = i913[4]
  i912.renderOrder = i913[5]
  i912.sortingLayerName = i913[6]
  i912.sortingOrder = i913[7]
  i912.scaleFactor = i913[8]
  request.r(i913[9], i913[10], 0, i912, 'worldCamera')
  i912.overrideSorting = !!i913[11]
  i912.pixelPerfect = !!i913[12]
  i912.targetDisplay = i913[13]
  i912.overridePixelPerfect = !!i913[14]
  return i912
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i915 = data
  i914.m_UiScaleMode = i915[0]
  i914.m_ReferencePixelsPerUnit = i915[1]
  i914.m_ScaleFactor = i915[2]
  i914.m_ReferenceResolution = new pc.Vec2( i915[3], i915[4] )
  i914.m_ScreenMatchMode = i915[5]
  i914.m_MatchWidthOrHeight = i915[6]
  i914.m_PhysicalUnit = i915[7]
  i914.m_FallbackScreenDPI = i915[8]
  i914.m_DefaultSpriteDPI = i915[9]
  i914.m_DynamicPixelsPerUnit = i915[10]
  i914.m_PresetInfoIsWorld = !!i915[11]
  return i914
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i917 = data
  i916.m_IgnoreReversedGraphics = !!i917[0]
  i916.m_BlockingObjects = i917[1]
  i916.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i917[2] )
  return i916
}

Deserializers["Joystick"] = function (request, data, root) {
  var i918 = root || request.c( 'Joystick' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'joystickBackground')
  request.r(i919[2], i919[3], 0, i918, 'joystickHandle')
  return i918
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i921 = data
  i920.m_Spacing = i921[0]
  i920.m_ChildForceExpandWidth = !!i921[1]
  i920.m_ChildForceExpandHeight = !!i921[2]
  i920.m_ChildControlWidth = !!i921[3]
  i920.m_ChildControlHeight = !!i921[4]
  i920.m_ChildScaleWidth = !!i921[5]
  i920.m_ChildScaleHeight = !!i921[6]
  i920.m_ReverseArrangement = !!i921[7]
  i920.m_Padding = UnityEngine.RectOffset.FromPaddings(i921[8], i921[9], i921[10], i921[11])
  i920.m_ChildAlignment = i921[12]
  return i920
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i923 = data
  i922.m_HorizontalFit = i923[0]
  i922.m_VerticalFit = i923[1]
  return i922
}

Deserializers["DeathCounter"] = function (request, data, root) {
  var i924 = root || request.c( 'DeathCounter' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'deathCounterText')
  return i924
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i926 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i927 = data
  i926.m_hasFontAssetChanged = !!i927[0]
  request.r(i927[1], i927[2], 0, i926, 'm_baseMaterial')
  i926.m_maskOffset = new pc.Vec4( i927[3], i927[4], i927[5], i927[6] )
  i926.m_text = i927[7]
  i926.m_isRightToLeft = !!i927[8]
  request.r(i927[9], i927[10], 0, i926, 'm_fontAsset')
  request.r(i927[11], i927[12], 0, i926, 'm_sharedMaterial')
  var i929 = i927[13]
  var i928 = []
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 2, i928, '')
  }
  i926.m_fontSharedMaterials = i928
  request.r(i927[14], i927[15], 0, i926, 'm_fontMaterial')
  var i931 = i927[16]
  var i930 = []
  for(var i = 0; i < i931.length; i += 2) {
  request.r(i931[i + 0], i931[i + 1], 2, i930, '')
  }
  i926.m_fontMaterials = i930
  i926.m_fontColor32 = UnityEngine.Color32.ConstructColor(i927[17], i927[18], i927[19], i927[20])
  i926.m_fontColor = new pc.Color(i927[21], i927[22], i927[23], i927[24])
  i926.m_enableVertexGradient = !!i927[25]
  i926.m_colorMode = i927[26]
  i926.m_fontColorGradient = request.d('TMPro.VertexGradient', i927[27], i926.m_fontColorGradient)
  request.r(i927[28], i927[29], 0, i926, 'm_fontColorGradientPreset')
  request.r(i927[30], i927[31], 0, i926, 'm_spriteAsset')
  i926.m_tintAllSprites = !!i927[32]
  request.r(i927[33], i927[34], 0, i926, 'm_StyleSheet')
  i926.m_TextStyleHashCode = i927[35]
  i926.m_overrideHtmlColors = !!i927[36]
  i926.m_faceColor = UnityEngine.Color32.ConstructColor(i927[37], i927[38], i927[39], i927[40])
  i926.m_fontSize = i927[41]
  i926.m_fontSizeBase = i927[42]
  i926.m_fontWeight = i927[43]
  i926.m_enableAutoSizing = !!i927[44]
  i926.m_fontSizeMin = i927[45]
  i926.m_fontSizeMax = i927[46]
  i926.m_fontStyle = i927[47]
  i926.m_HorizontalAlignment = i927[48]
  i926.m_VerticalAlignment = i927[49]
  i926.m_textAlignment = i927[50]
  i926.m_characterSpacing = i927[51]
  i926.m_wordSpacing = i927[52]
  i926.m_lineSpacing = i927[53]
  i926.m_lineSpacingMax = i927[54]
  i926.m_paragraphSpacing = i927[55]
  i926.m_charWidthMaxAdj = i927[56]
  i926.m_enableWordWrapping = !!i927[57]
  i926.m_wordWrappingRatios = i927[58]
  i926.m_overflowMode = i927[59]
  request.r(i927[60], i927[61], 0, i926, 'm_linkedTextComponent')
  request.r(i927[62], i927[63], 0, i926, 'parentLinkedComponent')
  i926.m_enableKerning = !!i927[64]
  i926.m_enableExtraPadding = !!i927[65]
  i926.checkPaddingRequired = !!i927[66]
  i926.m_isRichText = !!i927[67]
  i926.m_parseCtrlCharacters = !!i927[68]
  i926.m_isOrthographic = !!i927[69]
  i926.m_isCullingEnabled = !!i927[70]
  i926.m_horizontalMapping = i927[71]
  i926.m_verticalMapping = i927[72]
  i926.m_uvLineOffset = i927[73]
  i926.m_geometrySortingOrder = i927[74]
  i926.m_IsTextObjectScaleStatic = !!i927[75]
  i926.m_VertexBufferAutoSizeReduction = !!i927[76]
  i926.m_useMaxVisibleDescender = !!i927[77]
  i926.m_pageToDisplay = i927[78]
  i926.m_margin = new pc.Vec4( i927[79], i927[80], i927[81], i927[82] )
  i926.m_isUsingLegacyAnimationComponent = !!i927[83]
  i926.m_isVolumetricText = !!i927[84]
  request.r(i927[85], i927[86], 0, i926, 'm_Material')
  i926.m_Maskable = !!i927[87]
  i926.m_Color = new pc.Color(i927[88], i927[89], i927[90], i927[91])
  i926.m_RaycastTarget = !!i927[92]
  i926.m_RaycastPadding = new pc.Vec4( i927[93], i927[94], i927[95], i927[96] )
  return i926
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i932 = root || request.c( 'TMPro.VertexGradient' )
  var i933 = data
  i932.topLeft = new pc.Color(i933[0], i933[1], i933[2], i933[3])
  i932.topRight = new pc.Color(i933[4], i933[5], i933[6], i933[7])
  i932.bottomLeft = new pc.Color(i933[8], i933[9], i933[10], i933[11])
  i932.bottomRight = new pc.Color(i933[12], i933[13], i933[14], i933[15])
  return i932
}

Deserializers["RankManager"] = function (request, data, root) {
  var i934 = root || request.c( 'RankManager' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'rankImage')
  var i937 = i935[2]
  var i936 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i937.length; i += 2) {
  request.r(i937[i + 0], i937[i + 1], 1, i936, '')
  }
  i934.rankSprites = i936
  var i939 = i935[3]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('CharacterBaseController')))
  for(var i = 0; i < i939.length; i += 2) {
  request.r(i939[i + 0], i939[i + 1], 1, i938, '')
  }
  i934.racers = i938
  return i934
}

Deserializers["CoinManager"] = function (request, data, root) {
  var i944 = root || request.c( 'CoinManager' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'coinCounterText')
  request.r(i945[2], i945[3], 0, i944, 'flyingCoinPrefab')
  request.r(i945[4], i945[5], 0, i944, 'uiTarget')
  return i944
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.UI.Button' )
  var i947 = data
  i946.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i947[0], i946.m_OnClick)
  i946.m_Navigation = request.d('UnityEngine.UI.Navigation', i947[1], i946.m_Navigation)
  i946.m_Transition = i947[2]
  i946.m_Colors = request.d('UnityEngine.UI.ColorBlock', i947[3], i946.m_Colors)
  i946.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i947[4], i946.m_SpriteState)
  i946.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i947[5], i946.m_AnimationTriggers)
  i946.m_Interactable = !!i947[6]
  request.r(i947[7], i947[8], 0, i946, 'm_TargetGraphic')
  return i946
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i949 = data
  i948.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i949[0], i948.m_PersistentCalls)
  return i948
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i951 = data
  var i953 = i951[0]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i953.length; i += 1) {
    i952.add(request.d('UnityEngine.Events.PersistentCall', i953[i + 0]));
  }
  i950.m_Calls = i952
  return i950
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i956 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'm_Target')
  i956.m_TargetAssemblyTypeName = i957[2]
  i956.m_MethodName = i957[3]
  i956.m_Mode = i957[4]
  i956.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i957[5], i956.m_Arguments)
  i956.m_CallState = i957[6]
  return i956
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'm_ObjectArgument')
  i958.m_ObjectArgumentAssemblyTypeName = i959[2]
  i958.m_IntArgument = i959[3]
  i958.m_FloatArgument = i959[4]
  i958.m_StringArgument = i959[5]
  i958.m_BoolArgument = !!i959[6]
  return i958
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i961 = data
  i960.m_Mode = i961[0]
  i960.m_WrapAround = !!i961[1]
  request.r(i961[2], i961[3], 0, i960, 'm_SelectOnUp')
  request.r(i961[4], i961[5], 0, i960, 'm_SelectOnDown')
  request.r(i961[6], i961[7], 0, i960, 'm_SelectOnLeft')
  request.r(i961[8], i961[9], 0, i960, 'm_SelectOnRight')
  return i960
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i963 = data
  i962.m_NormalColor = new pc.Color(i963[0], i963[1], i963[2], i963[3])
  i962.m_HighlightedColor = new pc.Color(i963[4], i963[5], i963[6], i963[7])
  i962.m_PressedColor = new pc.Color(i963[8], i963[9], i963[10], i963[11])
  i962.m_SelectedColor = new pc.Color(i963[12], i963[13], i963[14], i963[15])
  i962.m_DisabledColor = new pc.Color(i963[16], i963[17], i963[18], i963[19])
  i962.m_ColorMultiplier = i963[20]
  i962.m_FadeDuration = i963[21]
  return i962
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'm_HighlightedSprite')
  request.r(i965[2], i965[3], 0, i964, 'm_PressedSprite')
  request.r(i965[4], i965[5], 0, i964, 'm_SelectedSprite')
  request.r(i965[6], i965[7], 0, i964, 'm_DisabledSprite')
  return i964
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i967 = data
  i966.m_NormalTrigger = i967[0]
  i966.m_HighlightedTrigger = i967[1]
  i966.m_PressedTrigger = i967[2]
  i966.m_SelectedTrigger = i967[3]
  i966.m_DisabledTrigger = i967[4]
  return i966
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i968 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'm_FirstSelected')
  i968.m_sendNavigationEvents = !!i969[2]
  i968.m_DragThreshold = i969[3]
  return i968
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i971 = data
  i970.m_HorizontalAxis = i971[0]
  i970.m_VerticalAxis = i971[1]
  i970.m_SubmitButton = i971[2]
  i970.m_CancelButton = i971[3]
  i970.m_InputActionsPerSecond = i971[4]
  i970.m_RepeatDelay = i971[5]
  i970.m_ForceModuleActive = !!i971[6]
  i970.m_SendPointerHoverToParent = !!i971[7]
  return i970
}

Deserializers["GameManager"] = function (request, data, root) {
  var i972 = root || request.c( 'GameManager' )
  var i973 = data
  i972.isRunnerGameStarted = !!i973[0]
  i972.isGameCompleted = !!i973[1]
  request.r(i973[2], i973[3], 0, i972, 'completeGameUI')
  request.r(i973[4], i973[5], 0, i972, 'startGameUI')
  request.r(i973[6], i973[7], 0, i972, 'starterText')
  request.r(i973[8], i973[9], 0, i972, 'starterImage')
  var i975 = i973[10]
  var i974 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i975.length; i += 2) {
  request.r(i975[i + 0], i975[i + 1], 1, i974, '')
  }
  i972.starterImages = i974
  request.r(i973[11], i973[12], 0, i972, 'tapToStartText')
  return i972
}

Deserializers["FinishLine"] = function (request, data, root) {
  var i976 = root || request.c( 'FinishLine' )
  var i977 = data
  return i976
}

Deserializers["NextTarget"] = function (request, data, root) {
  var i978 = root || request.c( 'NextTarget' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'nextTarget')
  return i978
}

Deserializers["BackgroundMusic"] = function (request, data, root) {
  var i980 = root || request.c( 'BackgroundMusic' )
  var i981 = data
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i983 = data
  i982.ambientIntensity = i983[0]
  i982.reflectionIntensity = i983[1]
  i982.ambientMode = i983[2]
  i982.ambientLight = new pc.Color(i983[3], i983[4], i983[5], i983[6])
  i982.ambientSkyColor = new pc.Color(i983[7], i983[8], i983[9], i983[10])
  i982.ambientGroundColor = new pc.Color(i983[11], i983[12], i983[13], i983[14])
  i982.ambientEquatorColor = new pc.Color(i983[15], i983[16], i983[17], i983[18])
  i982.fogColor = new pc.Color(i983[19], i983[20], i983[21], i983[22])
  i982.fogEndDistance = i983[23]
  i982.fogStartDistance = i983[24]
  i982.fogDensity = i983[25]
  i982.fog = !!i983[26]
  request.r(i983[27], i983[28], 0, i982, 'skybox')
  i982.fogMode = i983[29]
  var i985 = i983[30]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i985[i + 0]) );
  }
  i982.lightmaps = i984
  i982.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i983[31], i982.lightProbes)
  i982.lightmapsMode = i983[32]
  i982.mixedBakeMode = i983[33]
  i982.environmentLightingMode = i983[34]
  i982.ambientProbe = new pc.SphericalHarmonicsL2(i983[35])
  i982.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i983[36])
  i982.useReferenceAmbientProbe = !!i983[37]
  request.r(i983[38], i983[39], 0, i982, 'customReflection')
  request.r(i983[40], i983[41], 0, i982, 'defaultReflection')
  i982.defaultReflectionMode = i983[42]
  i982.defaultReflectionResolution = i983[43]
  i982.sunLightObjectId = i983[44]
  i982.pixelLightCount = i983[45]
  i982.defaultReflectionHDR = !!i983[46]
  i982.hasLightDataAsset = !!i983[47]
  i982.hasManualGenerate = !!i983[48]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i989 = data
  request.r(i989[0], i989[1], 0, i988, 'lightmapColor')
  request.r(i989[2], i989[3], 0, i988, 'lightmapDirection')
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i990 = root || new UnityEngine.LightProbes()
  var i991 = data
  return i990
}

Deserializers["WallPainter"] = function (request, data, root) {
  var i998 = root || request.c( 'WallPainter' )
  var i999 = data
  request.r(i999[0], i999[1], 0, i998, 'texturePaint')
  request.r(i999[2], i999[3], 0, i998, 'brushSizeSlider')
  request.r(i999[4], i999[5], 0, i998, 'paintedPercentageText')
  request.r(i999[6], i999[7], 0, i998, 'yellowButton')
  request.r(i999[8], i999[9], 0, i998, 'redButton')
  request.r(i999[10], i999[11], 0, i998, 'blueButton')
  request.r(i999[12], i999[13], 0, i998, 'canvas')
  request.r(i999[14], i999[15], 0, i998, 'mainMaterial')
  request.r(i999[16], i999[17], 0, i998, '_meshRenderer')
  request.r(i999[18], i999[19], 0, i998, 'wallTransform')
  request.r(i999[20], i999[21], 0, i998, '_audioSource')
  i998.maxVolume = i999[22]
  i998.volumeFadeSpeed = i999[23]
  return i998
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'm_FillRect')
  request.r(i1001[2], i1001[3], 0, i1000, 'm_HandleRect')
  i1000.m_Direction = i1001[4]
  i1000.m_MinValue = i1001[5]
  i1000.m_MaxValue = i1001[6]
  i1000.m_WholeNumbers = !!i1001[7]
  i1000.m_Value = i1001[8]
  i1000.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1001[9], i1000.m_OnValueChanged)
  i1000.m_Navigation = request.d('UnityEngine.UI.Navigation', i1001[10], i1000.m_Navigation)
  i1000.m_Transition = i1001[11]
  i1000.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1001[12], i1000.m_Colors)
  i1000.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1001[13], i1000.m_SpriteState)
  i1000.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1001[14], i1000.m_AnimationTriggers)
  i1000.m_Interactable = !!i1001[15]
  request.r(i1001[16], i1001[17], 0, i1000, 'm_TargetGraphic')
  return i1000
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1003 = data
  i1002.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1003[0], i1002.m_PersistentCalls)
  return i1002
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i1004 = root || request.c( 'TMPro.TextMeshPro' )
  var i1005 = data
  i1004._SortingLayer = i1005[0]
  i1004._SortingLayerID = i1005[1]
  i1004._SortingOrder = i1005[2]
  i1004.m_hasFontAssetChanged = !!i1005[3]
  request.r(i1005[4], i1005[5], 0, i1004, 'm_renderer')
  i1004.m_maskType = i1005[6]
  i1004.m_text = i1005[7]
  i1004.m_isRightToLeft = !!i1005[8]
  request.r(i1005[9], i1005[10], 0, i1004, 'm_fontAsset')
  request.r(i1005[11], i1005[12], 0, i1004, 'm_sharedMaterial')
  var i1007 = i1005[13]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 2) {
  request.r(i1007[i + 0], i1007[i + 1], 2, i1006, '')
  }
  i1004.m_fontSharedMaterials = i1006
  request.r(i1005[14], i1005[15], 0, i1004, 'm_fontMaterial')
  var i1009 = i1005[16]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 2) {
  request.r(i1009[i + 0], i1009[i + 1], 2, i1008, '')
  }
  i1004.m_fontMaterials = i1008
  i1004.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1005[17], i1005[18], i1005[19], i1005[20])
  i1004.m_fontColor = new pc.Color(i1005[21], i1005[22], i1005[23], i1005[24])
  i1004.m_enableVertexGradient = !!i1005[25]
  i1004.m_colorMode = i1005[26]
  i1004.m_fontColorGradient = request.d('TMPro.VertexGradient', i1005[27], i1004.m_fontColorGradient)
  request.r(i1005[28], i1005[29], 0, i1004, 'm_fontColorGradientPreset')
  request.r(i1005[30], i1005[31], 0, i1004, 'm_spriteAsset')
  i1004.m_tintAllSprites = !!i1005[32]
  request.r(i1005[33], i1005[34], 0, i1004, 'm_StyleSheet')
  i1004.m_TextStyleHashCode = i1005[35]
  i1004.m_overrideHtmlColors = !!i1005[36]
  i1004.m_faceColor = UnityEngine.Color32.ConstructColor(i1005[37], i1005[38], i1005[39], i1005[40])
  i1004.m_fontSize = i1005[41]
  i1004.m_fontSizeBase = i1005[42]
  i1004.m_fontWeight = i1005[43]
  i1004.m_enableAutoSizing = !!i1005[44]
  i1004.m_fontSizeMin = i1005[45]
  i1004.m_fontSizeMax = i1005[46]
  i1004.m_fontStyle = i1005[47]
  i1004.m_HorizontalAlignment = i1005[48]
  i1004.m_VerticalAlignment = i1005[49]
  i1004.m_textAlignment = i1005[50]
  i1004.m_characterSpacing = i1005[51]
  i1004.m_wordSpacing = i1005[52]
  i1004.m_lineSpacing = i1005[53]
  i1004.m_lineSpacingMax = i1005[54]
  i1004.m_paragraphSpacing = i1005[55]
  i1004.m_charWidthMaxAdj = i1005[56]
  i1004.m_enableWordWrapping = !!i1005[57]
  i1004.m_wordWrappingRatios = i1005[58]
  i1004.m_overflowMode = i1005[59]
  request.r(i1005[60], i1005[61], 0, i1004, 'm_linkedTextComponent')
  request.r(i1005[62], i1005[63], 0, i1004, 'parentLinkedComponent')
  i1004.m_enableKerning = !!i1005[64]
  i1004.m_enableExtraPadding = !!i1005[65]
  i1004.checkPaddingRequired = !!i1005[66]
  i1004.m_isRichText = !!i1005[67]
  i1004.m_parseCtrlCharacters = !!i1005[68]
  i1004.m_isOrthographic = !!i1005[69]
  i1004.m_isCullingEnabled = !!i1005[70]
  i1004.m_horizontalMapping = i1005[71]
  i1004.m_verticalMapping = i1005[72]
  i1004.m_uvLineOffset = i1005[73]
  i1004.m_geometrySortingOrder = i1005[74]
  i1004.m_IsTextObjectScaleStatic = !!i1005[75]
  i1004.m_VertexBufferAutoSizeReduction = !!i1005[76]
  i1004.m_useMaxVisibleDescender = !!i1005[77]
  i1004.m_pageToDisplay = i1005[78]
  i1004.m_margin = new pc.Vec4( i1005[79], i1005[80], i1005[81], i1005[82] )
  i1004.m_isUsingLegacyAnimationComponent = !!i1005[83]
  i1004.m_isVolumetricText = !!i1005[84]
  request.r(i1005[85], i1005[86], 0, i1004, 'm_Material')
  i1004.m_Maskable = !!i1005[87]
  i1004.m_Color = new pc.Color(i1005[88], i1005[89], i1005[90], i1005[91])
  i1004.m_RaycastTarget = !!i1005[92]
  i1004.m_RaycastPadding = new pc.Vec4( i1005[93], i1005[94], i1005[95], i1005[96] )
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1011 = data
  var i1013 = i1011[0]
  var i1012 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1013[i + 0]));
  }
  i1010.ShaderCompilationErrors = i1012
  i1010.name = i1011[1]
  i1010.guid = i1011[2]
  var i1015 = i1011[3]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( i1015[i + 0] );
  }
  i1010.shaderDefinedKeywords = i1014
  var i1017 = i1011[4]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1017[i + 0]) );
  }
  i1010.passes = i1016
  var i1019 = i1011[5]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1019[i + 0]) );
  }
  i1010.usePasses = i1018
  var i1021 = i1011[6]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1021[i + 0]) );
  }
  i1010.defaultParameterValues = i1020
  request.r(i1011[7], i1011[8], 0, i1010, 'unityFallbackShader')
  i1010.readDepth = !!i1011[9]
  i1010.isCreatedByShaderGraph = !!i1011[10]
  i1010.compiled = !!i1011[11]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1025 = data
  i1024.shaderName = i1025[0]
  i1024.errorMessage = i1025[1]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1030 = root || new pc.UnityShaderPass()
  var i1031 = data
  i1030.id = i1031[0]
  i1030.subShaderIndex = i1031[1]
  i1030.name = i1031[2]
  i1030.passType = i1031[3]
  i1030.grabPassTextureName = i1031[4]
  i1030.usePass = !!i1031[5]
  i1030.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1031[6], i1030.zTest)
  i1030.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1031[7], i1030.zWrite)
  i1030.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1031[8], i1030.culling)
  i1030.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1031[9], i1030.blending)
  i1030.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1031[10], i1030.alphaBlending)
  i1030.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1031[11], i1030.colorWriteMask)
  i1030.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1031[12], i1030.offsetUnits)
  i1030.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1031[13], i1030.offsetFactor)
  i1030.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1031[14], i1030.stencilRef)
  i1030.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1031[15], i1030.stencilReadMask)
  i1030.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1031[16], i1030.stencilWriteMask)
  i1030.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1031[17], i1030.stencilOp)
  i1030.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1031[18], i1030.stencilOpFront)
  i1030.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1031[19], i1030.stencilOpBack)
  var i1033 = i1031[20]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1033[i + 0]) );
  }
  i1030.tags = i1032
  var i1035 = i1031[21]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( i1035[i + 0] );
  }
  i1030.passDefinedKeywords = i1034
  var i1037 = i1031[22]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1037[i + 0]) );
  }
  i1030.passDefinedKeywordGroups = i1036
  var i1039 = i1031[23]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1039[i + 0]) );
  }
  i1030.variants = i1038
  var i1041 = i1031[24]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1041[i + 0]) );
  }
  i1030.excludedVariants = i1040
  i1030.hasDepthReader = !!i1031[25]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1043 = data
  i1042.val = i1043[0]
  i1042.name = i1043[1]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1045 = data
  i1044.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[0], i1044.src)
  i1044.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[1], i1044.dst)
  i1044.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[2], i1044.op)
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1047 = data
  i1046.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[0], i1046.pass)
  i1046.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[1], i1046.fail)
  i1046.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[2], i1046.zFail)
  i1046.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[3], i1046.comp)
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1051 = data
  i1050.name = i1051[0]
  i1050.value = i1051[1]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1055 = data
  var i1057 = i1055[0]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( i1057[i + 0] );
  }
  i1054.keywords = i1056
  i1054.hasDiscard = !!i1055[1]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1061 = data
  i1060.passId = i1061[0]
  i1060.subShaderIndex = i1061[1]
  var i1063 = i1061[2]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( i1063[i + 0] );
  }
  i1060.keywords = i1062
  i1060.vertexProgram = i1061[3]
  i1060.fragmentProgram = i1061[4]
  i1060.exportedForWebGl2 = !!i1061[5]
  i1060.readDepth = !!i1061[6]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1067 = data
  request.r(i1067[0], i1067[1], 0, i1066, 'shader')
  i1066.pass = i1067[2]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1071 = data
  i1070.name = i1071[0]
  i1070.type = i1071[1]
  i1070.value = new pc.Vec4( i1071[2], i1071[3], i1071[4], i1071[5] )
  i1070.textureValue = i1071[6]
  i1070.shaderPropertyFlag = i1071[7]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1073 = data
  i1072.name = i1073[0]
  request.r(i1073[1], i1073[2], 0, i1072, 'texture')
  i1072.aabb = i1073[3]
  i1072.vertices = i1073[4]
  i1072.triangles = i1073[5]
  i1072.textureRect = UnityEngine.Rect.MinMaxRect(i1073[6], i1073[7], i1073[8], i1073[9])
  i1072.packedRect = UnityEngine.Rect.MinMaxRect(i1073[10], i1073[11], i1073[12], i1073[13])
  i1072.border = new pc.Vec4( i1073[14], i1073[15], i1073[16], i1073[17] )
  i1072.transparency = i1073[18]
  i1072.bounds = i1073[19]
  i1072.pixelsPerUnit = i1073[20]
  i1072.textureWidth = i1073[21]
  i1072.textureHeight = i1073[22]
  i1072.nativeSize = new pc.Vec2( i1073[23], i1073[24] )
  i1072.pivot = new pc.Vec2( i1073[25], i1073[26] )
  i1072.textureRectOffset = new pc.Vec2( i1073[27], i1073[28] )
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1075 = data
  i1074.name = i1075[0]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1077 = data
  i1076.name = i1077[0]
  i1076.wrapMode = i1077[1]
  i1076.isLooping = !!i1077[2]
  i1076.length = i1077[3]
  var i1079 = i1077[4]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1079[i + 0]) );
  }
  i1076.curves = i1078
  var i1081 = i1077[5]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1081[i + 0]) );
  }
  i1076.events = i1080
  i1076.halfPrecision = !!i1077[6]
  i1076._frameRate = i1077[7]
  i1076.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1077[8], i1076.localBounds)
  i1076.hasMuscleCurves = !!i1077[9]
  var i1083 = i1077[10]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( i1083[i + 0] );
  }
  i1076.clipMuscleConstant = i1082
  i1076.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1077[11], i1076.clipBindingConstant)
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1087 = data
  i1086.path = i1087[0]
  i1086.hash = i1087[1]
  i1086.componentType = i1087[2]
  i1086.property = i1087[3]
  i1086.keys = i1087[4]
  var i1089 = i1087[5]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1089[i + 0]) );
  }
  i1086.objectReferenceKeys = i1088
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1093 = data
  i1092.time = i1093[0]
  request.r(i1093[1], i1093[2], 0, i1092, 'value')
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1097 = data
  i1096.functionName = i1097[0]
  i1096.floatParameter = i1097[1]
  i1096.intParameter = i1097[2]
  i1096.stringParameter = i1097[3]
  request.r(i1097[4], i1097[5], 0, i1096, 'objectReferenceParameter')
  i1096.time = i1097[6]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1099 = data
  i1098.center = new pc.Vec3( i1099[0], i1099[1], i1099[2] )
  i1098.extends = new pc.Vec3( i1099[3], i1099[4], i1099[5] )
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1103 = data
  var i1105 = i1103[0]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( i1105[i + 0] );
  }
  i1102.genericBindings = i1104
  var i1107 = i1103[1]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( i1107[i + 0] );
  }
  i1102.pptrCurveMapping = i1106
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i1109 = data
  i1108.name = i1109[0]
  i1108.blendParameter = i1109[1]
  i1108.blendParameterY = i1109[2]
  i1108.blendType = i1109[3]
  var i1111 = i1109[4]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i1111[i + 0]) );
  }
  i1108.children = i1110
  i1108.useAutomaticThresholds = !!i1109[5]
  i1108.minThreshold = i1109[6]
  i1108.maxThreshold = i1109[7]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i1115 = data
  request.r(i1115[0], i1115[1], 0, i1114, 'motion')
  i1114.threshold = i1115[2]
  i1114.position = new pc.Vec2( i1115[3], i1115[4] )
  i1114.timeScale = i1115[5]
  i1114.cycleOffset = i1115[6]
  i1114.directBlendParameter = i1115[7]
  i1114.mirror = !!i1115[8]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1117 = data
  i1116.name = i1117[0]
  i1116.ascent = i1117[1]
  i1116.originalLineHeight = i1117[2]
  i1116.fontSize = i1117[3]
  var i1119 = i1117[4]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1119[i + 0]) );
  }
  i1116.characterInfo = i1118
  request.r(i1117[5], i1117[6], 0, i1116, 'texture')
  i1116.originalFontSize = i1117[7]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1123 = data
  i1122.index = i1123[0]
  i1122.advance = i1123[1]
  i1122.bearing = i1123[2]
  i1122.glyphWidth = i1123[3]
  i1122.glyphHeight = i1123[4]
  i1122.minX = i1123[5]
  i1122.maxX = i1123[6]
  i1122.minY = i1123[7]
  i1122.maxY = i1123[8]
  i1122.uvBottomLeftX = i1123[9]
  i1122.uvBottomLeftY = i1123[10]
  i1122.uvBottomRightX = i1123[11]
  i1122.uvBottomRightY = i1123[12]
  i1122.uvTopLeftX = i1123[13]
  i1122.uvTopLeftY = i1123[14]
  i1122.uvTopRightX = i1123[15]
  i1122.uvTopRightY = i1123[16]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1125 = data
  i1124.name = i1125[0]
  var i1127 = i1125[1]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1127[i + 0]) );
  }
  i1124.layers = i1126
  var i1129 = i1125[2]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1129[i + 0]) );
  }
  i1124.parameters = i1128
  i1124.animationClips = i1125[3]
  i1124.avatarUnsupported = i1125[4]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1133 = data
  i1132.name = i1133[0]
  i1132.defaultWeight = i1133[1]
  i1132.blendingMode = i1133[2]
  i1132.avatarMask = i1133[3]
  i1132.syncedLayerIndex = i1133[4]
  i1132.syncedLayerAffectsTiming = !!i1133[5]
  i1132.syncedLayers = i1133[6]
  i1132.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1133[7], i1132.stateMachine)
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1135 = data
  i1134.id = i1135[0]
  i1134.name = i1135[1]
  i1134.path = i1135[2]
  var i1137 = i1135[3]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1137[i + 0]) );
  }
  i1134.states = i1136
  var i1139 = i1135[4]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1139[i + 0]) );
  }
  i1134.machines = i1138
  var i1141 = i1135[5]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1141[i + 0]) );
  }
  i1134.entryStateTransitions = i1140
  var i1143 = i1135[6]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1143[i + 0]) );
  }
  i1134.exitStateTransitions = i1142
  var i1145 = i1135[7]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1145[i + 0]) );
  }
  i1134.anyStateTransitions = i1144
  i1134.defaultStateId = i1135[8]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1149 = data
  i1148.id = i1149[0]
  i1148.name = i1149[1]
  i1148.cycleOffset = i1149[2]
  i1148.cycleOffsetParameter = i1149[3]
  i1148.cycleOffsetParameterActive = !!i1149[4]
  i1148.mirror = !!i1149[5]
  i1148.mirrorParameter = i1149[6]
  i1148.mirrorParameterActive = !!i1149[7]
  i1148.motionId = i1149[8]
  i1148.nameHash = i1149[9]
  i1148.fullPathHash = i1149[10]
  i1148.speed = i1149[11]
  i1148.speedParameter = i1149[12]
  i1148.speedParameterActive = !!i1149[13]
  i1148.tag = i1149[14]
  i1148.tagHash = i1149[15]
  i1148.writeDefaultValues = !!i1149[16]
  var i1151 = i1149[17]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 2) {
  request.r(i1151[i + 0], i1151[i + 1], 2, i1150, '')
  }
  i1148.behaviours = i1150
  var i1153 = i1149[18]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1153[i + 0]) );
  }
  i1148.transitions = i1152
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1159 = data
  i1158.fullPath = i1159[0]
  i1158.canTransitionToSelf = !!i1159[1]
  i1158.duration = i1159[2]
  i1158.exitTime = i1159[3]
  i1158.hasExitTime = !!i1159[4]
  i1158.hasFixedDuration = !!i1159[5]
  i1158.interruptionSource = i1159[6]
  i1158.offset = i1159[7]
  i1158.orderedInterruption = !!i1159[8]
  i1158.destinationStateId = i1159[9]
  i1158.isExit = !!i1159[10]
  i1158.mute = !!i1159[11]
  i1158.solo = !!i1159[12]
  var i1161 = i1159[13]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1161[i + 0]) );
  }
  i1158.conditions = i1160
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1167 = data
  i1166.destinationStateId = i1167[0]
  i1166.isExit = !!i1167[1]
  i1166.mute = !!i1167[2]
  i1166.solo = !!i1167[3]
  var i1169 = i1167[4]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1169[i + 0]) );
  }
  i1166.conditions = i1168
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1173 = data
  i1172.defaultBool = !!i1173[0]
  i1172.defaultFloat = i1173[1]
  i1172.defaultInt = i1173[2]
  i1172.name = i1173[3]
  i1172.nameHash = i1173[4]
  i1172.type = i1173[5]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1175 = data
  i1174.name = i1175[0]
  i1174.bytes64 = i1175[1]
  i1174.data = i1175[2]
  return i1174
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1176 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1177 = data
  i1176.hashCode = i1177[0]
  request.r(i1177[1], i1177[2], 0, i1176, 'material')
  i1176.materialHashCode = i1177[3]
  request.r(i1177[4], i1177[5], 0, i1176, 'atlas')
  i1176.normalStyle = i1177[6]
  i1176.normalSpacingOffset = i1177[7]
  i1176.boldStyle = i1177[8]
  i1176.boldSpacing = i1177[9]
  i1176.italicStyle = i1177[10]
  i1176.tabSize = i1177[11]
  i1176.m_Version = i1177[12]
  i1176.m_SourceFontFileGUID = i1177[13]
  request.r(i1177[14], i1177[15], 0, i1176, 'm_SourceFontFile_EditorRef')
  request.r(i1177[16], i1177[17], 0, i1176, 'm_SourceFontFile')
  i1176.m_AtlasPopulationMode = i1177[18]
  i1176.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1177[19], i1176.m_FaceInfo)
  var i1179 = i1177[20]
  var i1178 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.add(request.d('UnityEngine.TextCore.Glyph', i1179[i + 0]));
  }
  i1176.m_GlyphTable = i1178
  var i1181 = i1177[21]
  var i1180 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.add(request.d('TMPro.TMP_Character', i1181[i + 0]));
  }
  i1176.m_CharacterTable = i1180
  var i1183 = i1177[22]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 2) {
  request.r(i1183[i + 0], i1183[i + 1], 2, i1182, '')
  }
  i1176.m_AtlasTextures = i1182
  i1176.m_AtlasTextureIndex = i1177[23]
  i1176.m_IsMultiAtlasTexturesEnabled = !!i1177[24]
  i1176.m_ClearDynamicDataOnBuild = !!i1177[25]
  var i1185 = i1177[26]
  var i1184 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.add(request.d('UnityEngine.TextCore.GlyphRect', i1185[i + 0]));
  }
  i1176.m_UsedGlyphRects = i1184
  var i1187 = i1177[27]
  var i1186 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.add(request.d('UnityEngine.TextCore.GlyphRect', i1187[i + 0]));
  }
  i1176.m_FreeGlyphRects = i1186
  i1176.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1177[28], i1176.m_fontInfo)
  i1176.m_AtlasWidth = i1177[29]
  i1176.m_AtlasHeight = i1177[30]
  i1176.m_AtlasPadding = i1177[31]
  i1176.m_AtlasRenderMode = i1177[32]
  var i1189 = i1177[33]
  var i1188 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.add(request.d('TMPro.TMP_Glyph', i1189[i + 0]));
  }
  i1176.m_glyphInfoList = i1188
  i1176.m_KerningTable = request.d('TMPro.KerningTable', i1177[34], i1176.m_KerningTable)
  i1176.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1177[35], i1176.m_FontFeatureTable)
  var i1191 = i1177[36]
  var i1190 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1191.length; i += 2) {
  request.r(i1191[i + 0], i1191[i + 1], 1, i1190, '')
  }
  i1176.fallbackFontAssets = i1190
  var i1193 = i1177[37]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1193.length; i += 2) {
  request.r(i1193[i + 0], i1193[i + 1], 1, i1192, '')
  }
  i1176.m_FallbackFontAssetTable = i1192
  i1176.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1177[38], i1176.m_CreationSettings)
  var i1195 = i1177[39]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('TMPro.TMP_FontWeightPair', i1195[i + 0]) );
  }
  i1176.m_FontWeightTable = i1194
  var i1197 = i1177[40]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('TMPro.TMP_FontWeightPair', i1197[i + 0]) );
  }
  i1176.fontWeights = i1196
  return i1176
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1198 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1199 = data
  i1198.m_FaceIndex = i1199[0]
  i1198.m_FamilyName = i1199[1]
  i1198.m_StyleName = i1199[2]
  i1198.m_PointSize = i1199[3]
  i1198.m_Scale = i1199[4]
  i1198.m_UnitsPerEM = i1199[5]
  i1198.m_LineHeight = i1199[6]
  i1198.m_AscentLine = i1199[7]
  i1198.m_CapLine = i1199[8]
  i1198.m_MeanLine = i1199[9]
  i1198.m_Baseline = i1199[10]
  i1198.m_DescentLine = i1199[11]
  i1198.m_SuperscriptOffset = i1199[12]
  i1198.m_SuperscriptSize = i1199[13]
  i1198.m_SubscriptOffset = i1199[14]
  i1198.m_SubscriptSize = i1199[15]
  i1198.m_UnderlineOffset = i1199[16]
  i1198.m_UnderlineThickness = i1199[17]
  i1198.m_StrikethroughOffset = i1199[18]
  i1198.m_StrikethroughThickness = i1199[19]
  i1198.m_TabWidth = i1199[20]
  return i1198
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1202 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1203 = data
  i1202.m_Index = i1203[0]
  i1202.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1203[1], i1202.m_Metrics)
  i1202.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1203[2], i1202.m_GlyphRect)
  i1202.m_Scale = i1203[3]
  i1202.m_AtlasIndex = i1203[4]
  i1202.m_ClassDefinitionType = i1203[5]
  return i1202
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1204 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1205 = data
  i1204.m_Width = i1205[0]
  i1204.m_Height = i1205[1]
  i1204.m_HorizontalBearingX = i1205[2]
  i1204.m_HorizontalBearingY = i1205[3]
  i1204.m_HorizontalAdvance = i1205[4]
  return i1204
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1206 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1207 = data
  i1206.m_X = i1207[0]
  i1206.m_Y = i1207[1]
  i1206.m_Width = i1207[2]
  i1206.m_Height = i1207[3]
  return i1206
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1210 = root || request.c( 'TMPro.TMP_Character' )
  var i1211 = data
  i1210.m_ElementType = i1211[0]
  i1210.m_Unicode = i1211[1]
  i1210.m_GlyphIndex = i1211[2]
  i1210.m_Scale = i1211[3]
  return i1210
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1216 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1217 = data
  i1216.Name = i1217[0]
  i1216.PointSize = i1217[1]
  i1216.Scale = i1217[2]
  i1216.CharacterCount = i1217[3]
  i1216.LineHeight = i1217[4]
  i1216.Baseline = i1217[5]
  i1216.Ascender = i1217[6]
  i1216.CapHeight = i1217[7]
  i1216.Descender = i1217[8]
  i1216.CenterLine = i1217[9]
  i1216.SuperscriptOffset = i1217[10]
  i1216.SubscriptOffset = i1217[11]
  i1216.SubSize = i1217[12]
  i1216.Underline = i1217[13]
  i1216.UnderlineThickness = i1217[14]
  i1216.strikethrough = i1217[15]
  i1216.strikethroughThickness = i1217[16]
  i1216.TabWidth = i1217[17]
  i1216.Padding = i1217[18]
  i1216.AtlasWidth = i1217[19]
  i1216.AtlasHeight = i1217[20]
  return i1216
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1220 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1221 = data
  i1220.id = i1221[0]
  i1220.x = i1221[1]
  i1220.y = i1221[2]
  i1220.width = i1221[3]
  i1220.height = i1221[4]
  i1220.xOffset = i1221[5]
  i1220.yOffset = i1221[6]
  i1220.xAdvance = i1221[7]
  i1220.scale = i1221[8]
  return i1220
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1222 = root || request.c( 'TMPro.KerningTable' )
  var i1223 = data
  var i1225 = i1223[0]
  var i1224 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.add(request.d('TMPro.KerningPair', i1225[i + 0]));
  }
  i1222.kerningPairs = i1224
  return i1222
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1228 = root || request.c( 'TMPro.KerningPair' )
  var i1229 = data
  i1228.xOffset = i1229[0]
  i1228.m_FirstGlyph = i1229[1]
  i1228.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1229[2], i1228.m_FirstGlyphAdjustments)
  i1228.m_SecondGlyph = i1229[3]
  i1228.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1229[4], i1228.m_SecondGlyphAdjustments)
  i1228.m_IgnoreSpacingAdjustments = !!i1229[5]
  return i1228
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1230 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1231 = data
  var i1233 = i1231[0]
  var i1232 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1233[i + 0]));
  }
  i1230.m_GlyphPairAdjustmentRecords = i1232
  return i1230
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1236 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1237 = data
  i1236.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1237[0], i1236.m_FirstAdjustmentRecord)
  i1236.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1237[1], i1236.m_SecondAdjustmentRecord)
  i1236.m_FeatureLookupFlags = i1237[2]
  return i1236
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1238 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1239 = data
  i1238.m_GlyphIndex = i1239[0]
  i1238.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1239[1], i1238.m_GlyphValueRecord)
  return i1238
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1240 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1241 = data
  i1240.m_XPlacement = i1241[0]
  i1240.m_YPlacement = i1241[1]
  i1240.m_XAdvance = i1241[2]
  i1240.m_YAdvance = i1241[3]
  return i1240
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1244 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1245 = data
  i1244.sourceFontFileName = i1245[0]
  i1244.sourceFontFileGUID = i1245[1]
  i1244.pointSizeSamplingMode = i1245[2]
  i1244.pointSize = i1245[3]
  i1244.padding = i1245[4]
  i1244.packingMode = i1245[5]
  i1244.atlasWidth = i1245[6]
  i1244.atlasHeight = i1245[7]
  i1244.characterSetSelectionMode = i1245[8]
  i1244.characterSequence = i1245[9]
  i1244.referencedFontAssetGUID = i1245[10]
  i1244.referencedTextAssetGUID = i1245[11]
  i1244.fontStyle = i1245[12]
  i1244.fontStyleModifier = i1245[13]
  i1244.renderMode = i1245[14]
  i1244.includeFontFeatures = !!i1245[15]
  return i1244
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1248 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1249 = data
  request.r(i1249[0], i1249[1], 0, i1248, 'regularTypeface')
  request.r(i1249[2], i1249[3], 0, i1248, 'italicTypeface')
  return i1248
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1250 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1251 = data
  i1250.useSafeMode = !!i1251[0]
  i1250.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1251[1], i1250.safeModeOptions)
  i1250.timeScale = i1251[2]
  i1250.unscaledTimeScale = i1251[3]
  i1250.useSmoothDeltaTime = !!i1251[4]
  i1250.maxSmoothUnscaledTime = i1251[5]
  i1250.rewindCallbackMode = i1251[6]
  i1250.showUnityEditorReport = !!i1251[7]
  i1250.logBehaviour = i1251[8]
  i1250.drawGizmos = !!i1251[9]
  i1250.defaultRecyclable = !!i1251[10]
  i1250.defaultAutoPlay = i1251[11]
  i1250.defaultUpdateType = i1251[12]
  i1250.defaultTimeScaleIndependent = !!i1251[13]
  i1250.defaultEaseType = i1251[14]
  i1250.defaultEaseOvershootOrAmplitude = i1251[15]
  i1250.defaultEasePeriod = i1251[16]
  i1250.defaultAutoKill = !!i1251[17]
  i1250.defaultLoopType = i1251[18]
  i1250.debugMode = !!i1251[19]
  i1250.debugStoreTargetId = !!i1251[20]
  i1250.showPreviewPanel = !!i1251[21]
  i1250.storeSettingsLocation = i1251[22]
  i1250.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1251[23], i1250.modules)
  i1250.createASMDEF = !!i1251[24]
  i1250.showPlayingTweens = !!i1251[25]
  i1250.showPausedTweens = !!i1251[26]
  return i1250
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1252 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1253 = data
  i1252.logBehaviour = i1253[0]
  i1252.nestedTweenFailureBehaviour = i1253[1]
  return i1252
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1254 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1255 = data
  i1254.showPanel = !!i1255[0]
  i1254.audioEnabled = !!i1255[1]
  i1254.physicsEnabled = !!i1255[2]
  i1254.physics2DEnabled = !!i1255[3]
  i1254.spriteEnabled = !!i1255[4]
  i1254.uiEnabled = !!i1255[5]
  i1254.textMeshProEnabled = !!i1255[6]
  i1254.tk2DEnabled = !!i1255[7]
  i1254.deAudioEnabled = !!i1255[8]
  i1254.deUnityExtendedEnabled = !!i1255[9]
  i1254.epoOutlineEnabled = !!i1255[10]
  return i1254
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1256 = root || request.c( 'TMPro.TMP_Settings' )
  var i1257 = data
  i1256.m_enableWordWrapping = !!i1257[0]
  i1256.m_enableKerning = !!i1257[1]
  i1256.m_enableExtraPadding = !!i1257[2]
  i1256.m_enableTintAllSprites = !!i1257[3]
  i1256.m_enableParseEscapeCharacters = !!i1257[4]
  i1256.m_EnableRaycastTarget = !!i1257[5]
  i1256.m_GetFontFeaturesAtRuntime = !!i1257[6]
  i1256.m_missingGlyphCharacter = i1257[7]
  i1256.m_warningsDisabled = !!i1257[8]
  request.r(i1257[9], i1257[10], 0, i1256, 'm_defaultFontAsset')
  i1256.m_defaultFontAssetPath = i1257[11]
  i1256.m_defaultFontSize = i1257[12]
  i1256.m_defaultAutoSizeMinRatio = i1257[13]
  i1256.m_defaultAutoSizeMaxRatio = i1257[14]
  i1256.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1257[15], i1257[16] )
  i1256.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1257[17], i1257[18] )
  i1256.m_autoSizeTextContainer = !!i1257[19]
  i1256.m_IsTextObjectScaleStatic = !!i1257[20]
  var i1259 = i1257[21]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1259.length; i += 2) {
  request.r(i1259[i + 0], i1259[i + 1], 1, i1258, '')
  }
  i1256.m_fallbackFontAssets = i1258
  i1256.m_matchMaterialPreset = !!i1257[22]
  request.r(i1257[23], i1257[24], 0, i1256, 'm_defaultSpriteAsset')
  i1256.m_defaultSpriteAssetPath = i1257[25]
  i1256.m_enableEmojiSupport = !!i1257[26]
  i1256.m_MissingCharacterSpriteUnicode = i1257[27]
  i1256.m_defaultColorGradientPresetsPath = i1257[28]
  request.r(i1257[29], i1257[30], 0, i1256, 'm_defaultStyleSheet')
  i1256.m_StyleSheetsResourcePath = i1257[31]
  request.r(i1257[32], i1257[33], 0, i1256, 'm_leadingCharacters')
  request.r(i1257[34], i1257[35], 0, i1256, 'm_followingCharacters')
  i1256.m_UseModernHangulLineBreakingRules = !!i1257[36]
  return i1256
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1260 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1261 = data
  i1260.hashCode = i1261[0]
  request.r(i1261[1], i1261[2], 0, i1260, 'material')
  i1260.materialHashCode = i1261[3]
  request.r(i1261[4], i1261[5], 0, i1260, 'spriteSheet')
  var i1263 = i1261[6]
  var i1262 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.add(request.d('TMPro.TMP_Sprite', i1263[i + 0]));
  }
  i1260.spriteInfoList = i1262
  var i1265 = i1261[7]
  var i1264 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1265.length; i += 2) {
  request.r(i1265[i + 0], i1265[i + 1], 1, i1264, '')
  }
  i1260.fallbackSpriteAssets = i1264
  i1260.m_Version = i1261[8]
  i1260.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1261[9], i1260.m_FaceInfo)
  var i1267 = i1261[10]
  var i1266 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.add(request.d('TMPro.TMP_SpriteCharacter', i1267[i + 0]));
  }
  i1260.m_SpriteCharacterTable = i1266
  var i1269 = i1261[11]
  var i1268 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.add(request.d('TMPro.TMP_SpriteGlyph', i1269[i + 0]));
  }
  i1260.m_SpriteGlyphTable = i1268
  return i1260
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1272 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1273 = data
  i1272.name = i1273[0]
  i1272.hashCode = i1273[1]
  i1272.unicode = i1273[2]
  i1272.pivot = new pc.Vec2( i1273[3], i1273[4] )
  request.r(i1273[5], i1273[6], 0, i1272, 'sprite')
  i1272.id = i1273[7]
  i1272.x = i1273[8]
  i1272.y = i1273[9]
  i1272.width = i1273[10]
  i1272.height = i1273[11]
  i1272.xOffset = i1273[12]
  i1272.yOffset = i1273[13]
  i1272.xAdvance = i1273[14]
  i1272.scale = i1273[15]
  return i1272
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1278 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1279 = data
  i1278.m_Name = i1279[0]
  i1278.m_HashCode = i1279[1]
  i1278.m_ElementType = i1279[2]
  i1278.m_Unicode = i1279[3]
  i1278.m_GlyphIndex = i1279[4]
  i1278.m_Scale = i1279[5]
  return i1278
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1283 = data
  request.r(i1283[0], i1283[1], 0, i1282, 'sprite')
  i1282.m_Index = i1283[2]
  i1282.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1283[3], i1282.m_Metrics)
  i1282.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1283[4], i1282.m_GlyphRect)
  i1282.m_Scale = i1283[5]
  i1282.m_AtlasIndex = i1283[6]
  i1282.m_ClassDefinitionType = i1283[7]
  return i1282
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1284 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1285 = data
  var i1287 = i1285[0]
  var i1286 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.add(request.d('TMPro.TMP_Style', i1287[i + 0]));
  }
  i1284.m_StyleList = i1286
  return i1284
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.TMP_Style' )
  var i1291 = data
  i1290.m_Name = i1291[0]
  i1290.m_HashCode = i1291[1]
  i1290.m_OpeningDefinition = i1291[2]
  i1290.m_ClosingDefinition = i1291[3]
  i1290.m_OpeningTagArray = i1291[4]
  i1290.m_ClosingTagArray = i1291[5]
  i1290.m_OpeningTagUnicodeArray = i1291[6]
  i1290.m_ClosingTagUnicodeArray = i1291[7]
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1293 = data
  var i1295 = i1293[0]
  var i1294 = []
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1295[i + 0]) );
  }
  i1292.files = i1294
  i1292.componentToPrefabIds = i1293[1]
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1299 = data
  i1298.path = i1299[0]
  request.r(i1299[1], i1299[2], 0, i1298, 'unityObject')
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1301 = data
  var i1303 = i1301[0]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1303[i + 0]) );
  }
  i1300.scriptsExecutionOrder = i1302
  var i1305 = i1301[1]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1305[i + 0]) );
  }
  i1300.sortingLayers = i1304
  var i1307 = i1301[2]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1307[i + 0]) );
  }
  i1300.cullingLayers = i1306
  i1300.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1301[3], i1300.timeSettings)
  i1300.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1301[4], i1300.physicsSettings)
  i1300.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1301[5], i1300.physics2DSettings)
  i1300.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1301[6], i1300.qualitySettings)
  i1300.enableRealtimeShadows = !!i1301[7]
  i1300.enableAutoInstancing = !!i1301[8]
  i1300.enableDynamicBatching = !!i1301[9]
  i1300.lightmapEncodingQuality = i1301[10]
  i1300.desiredColorSpace = i1301[11]
  var i1309 = i1301[12]
  var i1308 = []
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.push( i1309[i + 0] );
  }
  i1300.allTags = i1308
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1313 = data
  i1312.name = i1313[0]
  i1312.value = i1313[1]
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1317 = data
  i1316.id = i1317[0]
  i1316.name = i1317[1]
  i1316.value = i1317[2]
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1321 = data
  i1320.id = i1321[0]
  i1320.name = i1321[1]
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1323 = data
  i1322.fixedDeltaTime = i1323[0]
  i1322.maximumDeltaTime = i1323[1]
  i1322.timeScale = i1323[2]
  i1322.maximumParticleTimestep = i1323[3]
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1325 = data
  i1324.gravity = new pc.Vec3( i1325[0], i1325[1], i1325[2] )
  i1324.defaultSolverIterations = i1325[3]
  i1324.bounceThreshold = i1325[4]
  i1324.autoSyncTransforms = !!i1325[5]
  i1324.autoSimulation = !!i1325[6]
  var i1327 = i1325[7]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1327[i + 0]) );
  }
  i1324.collisionMatrix = i1326
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1331 = data
  i1330.enabled = !!i1331[0]
  i1330.layerId = i1331[1]
  i1330.otherLayerId = i1331[2]
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1333 = data
  request.r(i1333[0], i1333[1], 0, i1332, 'material')
  i1332.gravity = new pc.Vec2( i1333[2], i1333[3] )
  i1332.positionIterations = i1333[4]
  i1332.velocityIterations = i1333[5]
  i1332.velocityThreshold = i1333[6]
  i1332.maxLinearCorrection = i1333[7]
  i1332.maxAngularCorrection = i1333[8]
  i1332.maxTranslationSpeed = i1333[9]
  i1332.maxRotationSpeed = i1333[10]
  i1332.baumgarteScale = i1333[11]
  i1332.baumgarteTOIScale = i1333[12]
  i1332.timeToSleep = i1333[13]
  i1332.linearSleepTolerance = i1333[14]
  i1332.angularSleepTolerance = i1333[15]
  i1332.defaultContactOffset = i1333[16]
  i1332.autoSimulation = !!i1333[17]
  i1332.queriesHitTriggers = !!i1333[18]
  i1332.queriesStartInColliders = !!i1333[19]
  i1332.callbacksOnDisable = !!i1333[20]
  i1332.reuseCollisionCallbacks = !!i1333[21]
  i1332.autoSyncTransforms = !!i1333[22]
  var i1335 = i1333[23]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1335[i + 0]) );
  }
  i1332.collisionMatrix = i1334
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1339 = data
  i1338.enabled = !!i1339[0]
  i1338.layerId = i1339[1]
  i1338.otherLayerId = i1339[2]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1341 = data
  var i1343 = i1341[0]
  var i1342 = []
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1343[i + 0]) );
  }
  i1340.qualityLevels = i1342
  var i1345 = i1341[1]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( i1345[i + 0] );
  }
  i1340.names = i1344
  i1340.shadows = i1341[2]
  i1340.anisotropicFiltering = i1341[3]
  i1340.antiAliasing = i1341[4]
  i1340.lodBias = i1341[5]
  i1340.shadowCascades = i1341[6]
  i1340.shadowDistance = i1341[7]
  i1340.shadowmaskMode = i1341[8]
  i1340.shadowProjection = i1341[9]
  i1340.shadowResolution = i1341[10]
  i1340.softParticles = !!i1341[11]
  i1340.softVegetation = !!i1341[12]
  i1340.activeColorSpace = i1341[13]
  i1340.desiredColorSpace = i1341[14]
  i1340.masterTextureLimit = i1341[15]
  i1340.maxQueuedFrames = i1341[16]
  i1340.particleRaycastBudget = i1341[17]
  i1340.pixelLightCount = i1341[18]
  i1340.realtimeReflectionProbes = !!i1341[19]
  i1340.shadowCascade2Split = i1341[20]
  i1340.shadowCascade4Split = new pc.Vec3( i1341[21], i1341[22], i1341[23] )
  i1340.streamingMipmapsActive = !!i1341[24]
  i1340.vSyncCount = i1341[25]
  i1340.asyncUploadBufferSize = i1341[26]
  i1340.asyncUploadTimeSlice = i1341[27]
  i1340.billboardsFaceCameraPosition = !!i1341[28]
  i1340.shadowNearPlaneOffset = i1341[29]
  i1340.streamingMipmapsMemoryBudget = i1341[30]
  i1340.maximumLODLevel = i1341[31]
  i1340.streamingMipmapsAddAllCameras = !!i1341[32]
  i1340.streamingMipmapsMaxLevelReduction = i1341[33]
  i1340.streamingMipmapsRenderersPerFrame = i1341[34]
  i1340.resolutionScalingFixedDPIFactor = i1341[35]
  i1340.streamingMipmapsMaxFileIORequests = i1341[36]
  i1340.currentQualityLevel = i1341[37]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1349 = data
  i1348.name = i1349[0]
  var i1351 = i1349[1]
  var i1350 = []
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1351[i + 0]) );
  }
  i1348.tos = i1350
  var i1353 = i1349[2]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( i1353[i + 0] );
  }
  i1348.constant = i1352
  i1348.isValid = !!i1349[3]
  i1348.isHuman = !!i1349[4]
  i1348.hasRootMotion = !!i1349[5]
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1357 = data
  i1356.hash = i1357[0]
  i1356.path = i1357[1]
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1361 = data
  i1360.weight = i1361[0]
  i1360.vertices = i1361[1]
  i1360.normals = i1361[2]
  i1360.tangents = i1361[3]
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1365 = data
  i1364.mode = i1365[0]
  i1364.parameter = i1365[1]
  i1364.threshold = i1365[2]
  return i1364
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1366 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1367 = data
  i1366.xPlacement = i1367[0]
  i1366.yPlacement = i1367[1]
  i1366.xAdvance = i1367[2]
  i1366.yAdvance = i1367[3]
  return i1366
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"73":[74],"75":[74],"76":[74],"77":[74],"78":[74],"79":[74],"80":[20],"81":[34],"82":[41],"83":[41],"84":[41],"85":[41],"86":[41],"87":[41],"88":[41],"89":[90],"91":[90],"92":[90],"93":[90],"94":[90],"95":[90],"96":[90],"97":[90],"98":[90],"99":[90],"100":[90],"101":[90],"102":[90],"103":[34],"104":[3],"105":[106],"107":[106],"43":[27],"25":[26,21],"108":[21],"10":[109],"42":[21],"110":[27],"65":[3,27],"50":[27,28],"111":[27],"112":[28,27],"113":[3],"114":[28,27],"115":[27],"116":[117],"118":[27],"119":[27],"45":[43],"30":[28,27],"120":[27],"44":[43],"48":[27],"121":[27],"47":[27],"122":[27],"123":[27],"124":[27],"125":[27],"126":[27],"127":[27],"128":[28,27],"129":[27],"130":[27],"131":[27],"64":[27],"132":[28,27],"133":[27],"134":[57],"135":[57],"58":[57],"136":[57],"137":[34],"138":[34],"139":[117],"140":[117]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.BoxCollider","UnityEngine.AI.NavMeshObstacle","UnityEngine.MonoBehaviour","DeathObstacleEffect","LocalRotationController","UnityEngine.MeshCollider","BasicPushObstacleEffect","RotaterPushObstacleEffect","UnityEngine.CapsuleCollider","ShiningObstacleEffect","UnityEngine.ParticleSystem","PatrolMovementController","UnityEngine.ParticleSystemRenderer","UnityEngine.SkinnedMeshRenderer","UnityEngine.CharacterController","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","BotController","UnityEngine.AI.NavMeshAgent","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","CoinCollectible","UnityEngine.Light","UnityEngine.Camera","UnityEngine.AudioListener","CameraFollow","FOVCalculator","SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.Rigidbody","PlayerController","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Joystick","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.ContentSizeFitter","DeathCounter","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","RankManager","CoinManager","UnityEngine.GameObject","UnityEngine.UI.Button","GameManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","FinishLine","NextTarget","BackgroundMusic","UnityEngine.Cubemap","WallPainter","UnityEngine.UI.Slider","TMPro.TextMeshPro","UnityEngine.AnimationClip","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CharacterBaseController","ObstacleBase","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.45f1";

Deserializers.productName = "PanteonDemo";

Deserializers.lunaInitializationTime = "11/07/2024 13:58:49";

Deserializers.lunaDaysRunning = "1.3";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1569";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4854";

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

Deserializers.buildID = "e7f149d5-57d3-494b-a2f4-808ec6890876";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

