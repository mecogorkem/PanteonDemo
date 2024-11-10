var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.JointSpring' )
  var i693 = data
  i692.spring = i693[0]
  i692.damper = i693[1]
  i692.targetPosition = i693[2]
  return i692
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.JointMotor' )
  var i695 = data
  i694.m_TargetVelocity = i695[0]
  i694.m_Force = i695[1]
  i694.m_FreeSpin = i695[2]
  return i694
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.JointLimits' )
  var i697 = data
  i696.m_Min = i697[0]
  i696.m_Max = i697[1]
  i696.m_Bounciness = i697[2]
  i696.m_BounceMinVelocity = i697[3]
  i696.m_ContactDistance = i697[4]
  i696.minBounce = i697[5]
  i696.maxBounce = i697[6]
  return i696
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.JointDrive' )
  var i699 = data
  i698.m_PositionSpring = i699[0]
  i698.m_PositionDamper = i699[1]
  i698.m_MaximumForce = i699[2]
  return i698
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i701 = data
  i700.m_Spring = i701[0]
  i700.m_Damper = i701[1]
  return i700
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i703 = data
  i702.m_Limit = i703[0]
  i702.m_Bounciness = i703[1]
  i702.m_ContactDistance = i703[2]
  return i702
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i705 = data
  i704.m_ExtremumSlip = i705[0]
  i704.m_ExtremumValue = i705[1]
  i704.m_AsymptoteSlip = i705[2]
  i704.m_AsymptoteValue = i705[3]
  i704.m_Stiffness = i705[4]
  return i704
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i707 = data
  i706.m_LowerAngle = i707[0]
  i706.m_UpperAngle = i707[1]
  return i706
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i709 = data
  i708.m_MotorSpeed = i709[0]
  i708.m_MaximumMotorTorque = i709[1]
  return i708
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i711 = data
  i710.m_DampingRatio = i711[0]
  i710.m_Frequency = i711[1]
  i710.m_Angle = i711[2]
  return i710
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i713 = data
  i712.m_LowerTranslation = i713[0]
  i712.m_UpperTranslation = i713[1]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i715 = data
  i714.position = new pc.Vec3( i715[0], i715[1], i715[2] )
  i714.scale = new pc.Vec3( i715[3], i715[4], i715[5] )
  i714.rotation = new pc.Quat(i715[6], i715[7], i715[8], i715[9])
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i717 = data
  i716.mass = i717[0]
  i716.drag = i717[1]
  i716.angularDrag = i717[2]
  i716.useGravity = !!i717[3]
  i716.isKinematic = !!i717[4]
  i716.constraints = i717[5]
  i716.maxAngularVelocity = i717[6]
  i716.collisionDetectionMode = i717[7]
  i716.interpolation = i717[8]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i719 = data
  i718.enabled = !!i719[0]
  i718.center = new pc.Vec3( i719[1], i719[2], i719[3] )
  i718.radius = i719[4]
  i718.height = i719[5]
  i718.minMoveDistance = i719[6]
  i718.skinWidth = i719[7]
  i718.enableOverlapRecovery = !!i719[8]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'animatorController')
  request.r(i721[2], i721[3], 0, i720, 'avatar')
  i720.updateMode = i721[4]
  i720.hasTransformHierarchy = !!i721[5]
  i720.applyRootMotion = !!i721[6]
  var i723 = i721[7]
  var i722 = []
  for(var i = 0; i < i723.length; i += 2) {
  request.r(i723[i + 0], i723[i + 1], 2, i722, '')
  }
  i720.humanBones = i722
  i720.enabled = !!i721[8]
  return i720
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i726 = root || request.c( 'PlayerController' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, '_animator')
  i726.moveDirection = new pc.Vec3( i727[2], i727[3], i727[4] )
  i726._hasAnimator = !!i727[5]
  i726._animIDSpeed = i727[6]
  i726._animIDMotionSpeed = i727[7]
  i726._animIEnd = i727[8]
  i726.MoveSpeed = i727[9]
  i726.SpeedChangeRate = i727[10]
  i726.RotationSmoothTime = i727[11]
  i726.gravity = i727[12]
  i726.fallThreshold = i727[13]
  i726.pushForceDecayRate = i727[14]
  return i726
}

Deserializers["Player"] = function (request, data, root) {
  var i728 = root || request.c( 'Player' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'playerEndTransform')
  request.r(i729[2], i729[3], 0, i728, 'playerGameCompleteTransform')
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i731 = data
  i730.enabled = !!i731[0]
  request.r(i731[1], i731[2], 0, i730, 'sharedMaterial')
  var i733 = i731[3]
  var i732 = []
  for(var i = 0; i < i733.length; i += 2) {
  request.r(i733[i + 0], i733[i + 1], 2, i732, '')
  }
  i730.sharedMaterials = i732
  i730.receiveShadows = !!i731[4]
  i730.shadowCastingMode = i731[5]
  i730.sortingLayerID = i731[6]
  i730.sortingOrder = i731[7]
  i730.lightmapIndex = i731[8]
  i730.lightmapSceneIndex = i731[9]
  i730.lightmapScaleOffset = new pc.Vec4( i731[10], i731[11], i731[12], i731[13] )
  i730.lightProbeUsage = i731[14]
  i730.reflectionProbeUsage = i731[15]
  request.r(i731[16], i731[17], 0, i730, 'sharedMesh')
  var i735 = i731[18]
  var i734 = []
  for(var i = 0; i < i735.length; i += 2) {
  request.r(i735[i + 0], i735[i + 1], 2, i734, '')
  }
  i730.bones = i734
  i730.updateWhenOffscreen = !!i731[19]
  i730.localBounds = i731[20]
  request.r(i731[21], i731[22], 0, i730, 'rootBone')
  var i737 = i731[23]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i737[i + 0]) );
  }
  i730.blendShapesWeights = i736
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i743 = data
  i742.weight = i743[0]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i745 = data
  i744.name = i745[0]
  i744.tagId = i745[1]
  i744.enabled = !!i745[2]
  i744.isStatic = !!i745[3]
  i744.layer = i745[4]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'sharedMesh')
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'additionalVertexStreams')
  i748.enabled = !!i749[2]
  request.r(i749[3], i749[4], 0, i748, 'sharedMaterial')
  var i751 = i749[5]
  var i750 = []
  for(var i = 0; i < i751.length; i += 2) {
  request.r(i751[i + 0], i751[i + 1], 2, i750, '')
  }
  i748.sharedMaterials = i750
  i748.receiveShadows = !!i749[6]
  i748.shadowCastingMode = i749[7]
  i748.sortingLayerID = i749[8]
  i748.sortingOrder = i749[9]
  i748.lightmapIndex = i749[10]
  i748.lightmapSceneIndex = i749[11]
  i748.lightmapScaleOffset = new pc.Vec4( i749[12], i749[13], i749[14], i749[15] )
  i748.lightProbeUsage = i749[16]
  i748.reflectionProbeUsage = i749[17]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i752 = root || new pc.UnityMaterial()
  var i753 = data
  i752.name = i753[0]
  request.r(i753[1], i753[2], 0, i752, 'shader')
  i752.renderQueue = i753[3]
  i752.enableInstancing = !!i753[4]
  var i755 = i753[5]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i755[i + 0]) );
  }
  i752.floatParameters = i754
  var i757 = i753[6]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i757[i + 0]) );
  }
  i752.colorParameters = i756
  var i759 = i753[7]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i759[i + 0]) );
  }
  i752.vectorParameters = i758
  var i761 = i753[8]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i761[i + 0]) );
  }
  i752.textureParameters = i760
  var i763 = i753[9]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i763[i + 0]) );
  }
  i752.materialFlags = i762
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i767 = data
  i766.name = i767[0]
  i766.value = i767[1]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i771 = data
  i770.name = i771[0]
  i770.value = new pc.Color(i771[1], i771[2], i771[3], i771[4])
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i775 = data
  i774.name = i775[0]
  i774.value = new pc.Vec4( i775[1], i775[2], i775[3], i775[4] )
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i779 = data
  i778.name = i779[0]
  request.r(i779[1], i779[2], 0, i778, 'value')
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i783 = data
  i782.name = i783[0]
  i782.enabled = !!i783[1]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i785 = data
  i784.name = i785[0]
  i784.width = i785[1]
  i784.height = i785[2]
  i784.mipmapCount = i785[3]
  i784.anisoLevel = i785[4]
  i784.filterMode = i785[5]
  i784.hdr = !!i785[6]
  i784.format = i785[7]
  i784.wrapMode = i785[8]
  i784.alphaIsTransparency = !!i785[9]
  i784.alphaSource = i785[10]
  i784.graphicsFormat = i785[11]
  i784.sRGBTexture = !!i785[12]
  i784.desiredColorSpace = i785[13]
  i784.wrapU = i785[14]
  i784.wrapV = i785[15]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i787 = data
  i786.name = i787[0]
  i786.halfPrecision = !!i787[1]
  i786.useUInt32IndexFormat = !!i787[2]
  i786.vertexCount = i787[3]
  i786.aabb = i787[4]
  var i789 = i787[5]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( !!i789[i + 0] );
  }
  i786.streams = i788
  i786.vertices = i787[6]
  var i791 = i787[7]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i791[i + 0]) );
  }
  i786.subMeshes = i790
  var i793 = i787[8]
  var i792 = []
  for(var i = 0; i < i793.length; i += 16) {
    i792.push( new pc.Mat4().setData(i793[i + 0], i793[i + 1], i793[i + 2], i793[i + 3],  i793[i + 4], i793[i + 5], i793[i + 6], i793[i + 7],  i793[i + 8], i793[i + 9], i793[i + 10], i793[i + 11],  i793[i + 12], i793[i + 13], i793[i + 14], i793[i + 15]) );
  }
  i786.bindposes = i792
  var i795 = i787[9]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i795[i + 0]) );
  }
  i786.blendShapes = i794
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i801 = data
  i800.triangles = i801[0]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i807 = data
  i806.name = i807[0]
  var i809 = i807[1]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i809[i + 0]) );
  }
  i806.frames = i808
  return i806
}

Deserializers["DeathObstacleEffect"] = function (request, data, root) {
  var i810 = root || request.c( 'DeathObstacleEffect' )
  var i811 = data
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i813 = data
  i812.center = new pc.Vec3( i813[0], i813[1], i813[2] )
  i812.size = new pc.Vec3( i813[3], i813[4], i813[5] )
  i812.enabled = !!i813[6]
  i812.isTrigger = !!i813[7]
  request.r(i813[8], i813[9], 0, i812, 'material')
  return i812
}

Deserializers["LocalRotationController"] = function (request, data, root) {
  var i814 = root || request.c( 'LocalRotationController' )
  var i815 = data
  i814.rotationSpeed = new pc.Vec3( i815[0], i815[1], i815[2] )
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i817 = data
  i816.enabled = !!i817[0]
  i816.isTrigger = !!i817[1]
  request.r(i817[2], i817[3], 0, i816, 'material')
  request.r(i817[4], i817[5], 0, i816, 'sharedMesh')
  i816.convex = !!i817[6]
  return i816
}

Deserializers["BasicPushObstacleEffect"] = function (request, data, root) {
  var i818 = root || request.c( 'BasicPushObstacleEffect' )
  var i819 = data
  i818.pushVector = new pc.Vec3( i819[0], i819[1], i819[2] )
  return i818
}

Deserializers["RotaterPushObstacleEffect"] = function (request, data, root) {
  var i820 = root || request.c( 'RotaterPushObstacleEffect' )
  var i821 = data
  i820.pushForce = i821[0]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i823 = data
  i822.center = new pc.Vec3( i823[0], i823[1], i823[2] )
  i822.radius = i823[3]
  i822.height = i823[4]
  i822.direction = i823[5]
  i822.enabled = !!i823[6]
  i822.isTrigger = !!i823[7]
  request.r(i823[8], i823[9], 0, i822, 'material')
  return i822
}

Deserializers["ShiningObstacleEffect"] = function (request, data, root) {
  var i824 = root || request.c( 'ShiningObstacleEffect' )
  var i825 = data
  i824.pushForce = i825[0]
  request.r(i825[1], i825[2], 0, i824, 'shineParticle')
  return i824
}

Deserializers["PatrolMovementController"] = function (request, data, root) {
  var i826 = root || request.c( 'PatrolMovementController' )
  var i827 = data
  i826.movementSpeed = new pc.Vec3( i827[0], i827[1], i827[2] )
  i826.minX = i827[3]
  i826.maxX = i827[4]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i829 = data
  i828.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i829[0], i828.main)
  i828.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i829[1], i828.colorBySpeed)
  i828.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i829[2], i828.colorOverLifetime)
  i828.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i829[3], i828.emission)
  i828.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i829[4], i828.rotationBySpeed)
  i828.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i829[5], i828.rotationOverLifetime)
  i828.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i829[6], i828.shape)
  i828.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i829[7], i828.sizeBySpeed)
  i828.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i829[8], i828.sizeOverLifetime)
  i828.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i829[9], i828.textureSheetAnimation)
  i828.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i829[10], i828.velocityOverLifetime)
  i828.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i829[11], i828.noise)
  i828.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i829[12], i828.inheritVelocity)
  i828.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i829[13], i828.forceOverLifetime)
  i828.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i829[14], i828.limitVelocityOverLifetime)
  i828.useAutoRandomSeed = !!i829[15]
  i828.randomSeed = i829[16]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i830 = root || new pc.ParticleSystemMain()
  var i831 = data
  i830.duration = i831[0]
  i830.loop = !!i831[1]
  i830.prewarm = !!i831[2]
  i830.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[3], i830.startDelay)
  i830.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[4], i830.startLifetime)
  i830.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[5], i830.startSpeed)
  i830.startSize3D = !!i831[6]
  i830.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[7], i830.startSizeX)
  i830.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[8], i830.startSizeY)
  i830.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[9], i830.startSizeZ)
  i830.startRotation3D = !!i831[10]
  i830.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[11], i830.startRotationX)
  i830.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[12], i830.startRotationY)
  i830.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[13], i830.startRotationZ)
  i830.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i831[14], i830.startColor)
  i830.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[15], i830.gravityModifier)
  i830.simulationSpace = i831[16]
  request.r(i831[17], i831[18], 0, i830, 'customSimulationSpace')
  i830.simulationSpeed = i831[19]
  i830.useUnscaledTime = !!i831[20]
  i830.scalingMode = i831[21]
  i830.playOnAwake = !!i831[22]
  i830.maxParticles = i831[23]
  i830.emitterVelocityMode = i831[24]
  i830.stopAction = i831[25]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i832 = root || new pc.MinMaxCurve()
  var i833 = data
  i832.mode = i833[0]
  i832.curveMin = new pc.AnimationCurve( { keys_flow: i833[1] } )
  i832.curveMax = new pc.AnimationCurve( { keys_flow: i833[2] } )
  i832.curveMultiplier = i833[3]
  i832.constantMin = i833[4]
  i832.constantMax = i833[5]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i834 = root || new pc.MinMaxGradient()
  var i835 = data
  i834.mode = i835[0]
  i834.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i835[1], i834.gradientMin)
  i834.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i835[2], i834.gradientMax)
  i834.colorMin = new pc.Color(i835[3], i835[4], i835[5], i835[6])
  i834.colorMax = new pc.Color(i835[7], i835[8], i835[9], i835[10])
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i837 = data
  i836.mode = i837[0]
  var i839 = i837[1]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i839[i + 0]) );
  }
  i836.colorKeys = i838
  var i841 = i837[2]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i841[i + 0]) );
  }
  i836.alphaKeys = i840
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i842 = root || new pc.ParticleSystemColorBySpeed()
  var i843 = data
  i842.enabled = !!i843[0]
  i842.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i843[1], i842.color)
  i842.range = new pc.Vec2( i843[2], i843[3] )
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i847 = data
  i846.color = new pc.Color(i847[0], i847[1], i847[2], i847[3])
  i846.time = i847[4]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i851 = data
  i850.alpha = i851[0]
  i850.time = i851[1]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i852 = root || new pc.ParticleSystemColorOverLifetime()
  var i853 = data
  i852.enabled = !!i853[0]
  i852.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i853[1], i852.color)
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i854 = root || new pc.ParticleSystemEmitter()
  var i855 = data
  i854.enabled = !!i855[0]
  i854.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[1], i854.rateOverTime)
  i854.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[2], i854.rateOverDistance)
  var i857 = i855[3]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i857[i + 0]) );
  }
  i854.bursts = i856
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i860 = root || new pc.ParticleSystemBurst()
  var i861 = data
  i860.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[0], i860.count)
  i860.cycleCount = i861[1]
  i860.minCount = i861[2]
  i860.maxCount = i861[3]
  i860.repeatInterval = i861[4]
  i860.time = i861[5]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i862 = root || new pc.ParticleSystemRotationBySpeed()
  var i863 = data
  i862.enabled = !!i863[0]
  i862.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[1], i862.x)
  i862.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[2], i862.y)
  i862.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[3], i862.z)
  i862.separateAxes = !!i863[4]
  i862.range = new pc.Vec2( i863[5], i863[6] )
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i864 = root || new pc.ParticleSystemRotationOverLifetime()
  var i865 = data
  i864.enabled = !!i865[0]
  i864.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i865[1], i864.x)
  i864.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i865[2], i864.y)
  i864.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i865[3], i864.z)
  i864.separateAxes = !!i865[4]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i866 = root || new pc.ParticleSystemShape()
  var i867 = data
  i866.enabled = !!i867[0]
  i866.shapeType = i867[1]
  i866.randomDirectionAmount = i867[2]
  i866.sphericalDirectionAmount = i867[3]
  i866.randomPositionAmount = i867[4]
  i866.alignToDirection = !!i867[5]
  i866.radius = i867[6]
  i866.radiusMode = i867[7]
  i866.radiusSpread = i867[8]
  i866.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[9], i866.radiusSpeed)
  i866.radiusThickness = i867[10]
  i866.angle = i867[11]
  i866.length = i867[12]
  i866.boxThickness = new pc.Vec3( i867[13], i867[14], i867[15] )
  i866.meshShapeType = i867[16]
  request.r(i867[17], i867[18], 0, i866, 'mesh')
  request.r(i867[19], i867[20], 0, i866, 'meshRenderer')
  request.r(i867[21], i867[22], 0, i866, 'skinnedMeshRenderer')
  i866.useMeshMaterialIndex = !!i867[23]
  i866.meshMaterialIndex = i867[24]
  i866.useMeshColors = !!i867[25]
  i866.normalOffset = i867[26]
  i866.arc = i867[27]
  i866.arcMode = i867[28]
  i866.arcSpread = i867[29]
  i866.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[30], i866.arcSpeed)
  i866.donutRadius = i867[31]
  i866.position = new pc.Vec3( i867[32], i867[33], i867[34] )
  i866.rotation = new pc.Vec3( i867[35], i867[36], i867[37] )
  i866.scale = new pc.Vec3( i867[38], i867[39], i867[40] )
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i868 = root || new pc.ParticleSystemSizeBySpeed()
  var i869 = data
  i868.enabled = !!i869[0]
  i868.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[1], i868.x)
  i868.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[2], i868.y)
  i868.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[3], i868.z)
  i868.separateAxes = !!i869[4]
  i868.range = new pc.Vec2( i869[5], i869[6] )
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i870 = root || new pc.ParticleSystemSizeOverLifetime()
  var i871 = data
  i870.enabled = !!i871[0]
  i870.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[1], i870.x)
  i870.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[2], i870.y)
  i870.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[3], i870.z)
  i870.separateAxes = !!i871[4]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i872 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i873 = data
  i872.enabled = !!i873[0]
  i872.mode = i873[1]
  i872.animation = i873[2]
  i872.numTilesX = i873[3]
  i872.numTilesY = i873[4]
  i872.useRandomRow = !!i873[5]
  i872.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[6], i872.frameOverTime)
  i872.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[7], i872.startFrame)
  i872.cycleCount = i873[8]
  i872.rowIndex = i873[9]
  i872.flipU = i873[10]
  i872.flipV = i873[11]
  i872.spriteCount = i873[12]
  var i875 = i873[13]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i872.sprites = i874
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i878 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i879 = data
  i878.enabled = !!i879[0]
  i878.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[1], i878.x)
  i878.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[2], i878.y)
  i878.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[3], i878.z)
  i878.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[4], i878.radial)
  i878.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[5], i878.speedModifier)
  i878.space = i879[6]
  i878.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[7], i878.orbitalX)
  i878.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[8], i878.orbitalY)
  i878.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[9], i878.orbitalZ)
  i878.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[10], i878.orbitalOffsetX)
  i878.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[11], i878.orbitalOffsetY)
  i878.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[12], i878.orbitalOffsetZ)
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i880 = root || new pc.ParticleSystemNoise()
  var i881 = data
  i880.enabled = !!i881[0]
  i880.separateAxes = !!i881[1]
  i880.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[2], i880.strengthX)
  i880.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[3], i880.strengthY)
  i880.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[4], i880.strengthZ)
  i880.frequency = i881[5]
  i880.damping = !!i881[6]
  i880.octaveCount = i881[7]
  i880.octaveMultiplier = i881[8]
  i880.octaveScale = i881[9]
  i880.quality = i881[10]
  i880.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[11], i880.scrollSpeed)
  i880.scrollSpeedMultiplier = i881[12]
  i880.remapEnabled = !!i881[13]
  i880.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[14], i880.remapX)
  i880.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[15], i880.remapY)
  i880.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[16], i880.remapZ)
  i880.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[17], i880.positionAmount)
  i880.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[18], i880.rotationAmount)
  i880.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[19], i880.sizeAmount)
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i882 = root || new pc.ParticleSystemInheritVelocity()
  var i883 = data
  i882.enabled = !!i883[0]
  i882.mode = i883[1]
  i882.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[2], i882.curve)
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i884 = root || new pc.ParticleSystemForceOverLifetime()
  var i885 = data
  i884.enabled = !!i885[0]
  i884.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[1], i884.x)
  i884.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[2], i884.y)
  i884.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[3], i884.z)
  i884.space = i885[4]
  i884.randomized = !!i885[5]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i886 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i887 = data
  i886.enabled = !!i887[0]
  i886.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[1], i886.limit)
  i886.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[2], i886.limitX)
  i886.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[3], i886.limitY)
  i886.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[4], i886.limitZ)
  i886.dampen = i887[5]
  i886.separateAxes = !!i887[6]
  i886.space = i887[7]
  i886.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[8], i886.drag)
  i886.multiplyDragByParticleSize = !!i887[9]
  i886.multiplyDragByParticleVelocity = !!i887[10]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i889 = data
  i888.enabled = !!i889[0]
  request.r(i889[1], i889[2], 0, i888, 'sharedMaterial')
  var i891 = i889[3]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i888.sharedMaterials = i890
  i888.receiveShadows = !!i889[4]
  i888.shadowCastingMode = i889[5]
  i888.sortingLayerID = i889[6]
  i888.sortingOrder = i889[7]
  i888.lightmapIndex = i889[8]
  i888.lightmapSceneIndex = i889[9]
  i888.lightmapScaleOffset = new pc.Vec4( i889[10], i889[11], i889[12], i889[13] )
  i888.lightProbeUsage = i889[14]
  i888.reflectionProbeUsage = i889[15]
  request.r(i889[16], i889[17], 0, i888, 'mesh')
  i888.meshCount = i889[18]
  i888.activeVertexStreamsCount = i889[19]
  i888.alignment = i889[20]
  i888.renderMode = i889[21]
  i888.sortMode = i889[22]
  i888.lengthScale = i889[23]
  i888.velocityScale = i889[24]
  i888.cameraVelocityScale = i889[25]
  i888.normalDirection = i889[26]
  i888.sortingFudge = i889[27]
  i888.minParticleSize = i889[28]
  i888.maxParticleSize = i889[29]
  i888.pivot = new pc.Vec3( i889[30], i889[31], i889[32] )
  request.r(i889[33], i889[34], 0, i888, 'trailMaterial')
  return i888
}

Deserializers["CoinCollectible"] = function (request, data, root) {
  var i892 = root || request.c( 'CoinCollectible' )
  var i893 = data
  i892.distance = i893[0]
  i892.moveTime = i893[1]
  return i892
}

Deserializers["BotController"] = function (request, data, root) {
  var i894 = root || request.c( 'BotController' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, '_animator')
  i894.moveDirection = new pc.Vec3( i895[2], i895[3], i895[4] )
  i894._hasAnimator = !!i895[5]
  i894._animIDSpeed = i895[6]
  i894._animIDMotionSpeed = i895[7]
  i894._animIEnd = i895[8]
  i894.MoveSpeed = i895[9]
  i894.SpeedChangeRate = i895[10]
  i894.RotationSmoothTime = i895[11]
  i894.gravity = i895[12]
  i894.fallThreshold = i895[13]
  i894.pushForceDecayRate = i895[14]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i897 = data
  i896.pivot = new pc.Vec2( i897[0], i897[1] )
  i896.anchorMin = new pc.Vec2( i897[2], i897[3] )
  i896.anchorMax = new pc.Vec2( i897[4], i897[5] )
  i896.sizeDelta = new pc.Vec2( i897[6], i897[7] )
  i896.anchoredPosition3D = new pc.Vec3( i897[8], i897[9], i897[10] )
  i896.rotation = new pc.Quat(i897[11], i897[12], i897[13], i897[14])
  i896.scale = new pc.Vec3( i897[15], i897[16], i897[17] )
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i899 = data
  i898.cullTransparentMesh = !!i899[0]
  return i898
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.UI.Image' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'm_Sprite')
  i900.m_Type = i901[2]
  i900.m_PreserveAspect = !!i901[3]
  i900.m_FillCenter = !!i901[4]
  i900.m_FillMethod = i901[5]
  i900.m_FillAmount = i901[6]
  i900.m_FillClockwise = !!i901[7]
  i900.m_FillOrigin = i901[8]
  i900.m_UseSpriteMesh = !!i901[9]
  i900.m_PixelsPerUnitMultiplier = i901[10]
  request.r(i901[11], i901[12], 0, i900, 'm_Material')
  i900.m_Maskable = !!i901[13]
  i900.m_Color = new pc.Color(i901[14], i901[15], i901[16], i901[17])
  i900.m_RaycastTarget = !!i901[18]
  i900.m_RaycastPadding = new pc.Vec4( i901[19], i901[20], i901[21], i901[22] )
  return i900
}

Deserializers["BombPrefab"] = function (request, data, root) {
  var i902 = root || request.c( 'BombPrefab' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'explosionEffect')
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i905 = data
  i904.name = i905[0]
  i904.atlasId = i905[1]
  i904.mipmapCount = i905[2]
  i904.hdr = !!i905[3]
  i904.size = i905[4]
  i904.anisoLevel = i905[5]
  i904.filterMode = i905[6]
  var i907 = i905[7]
  var i906 = []
  for(var i = 0; i < i907.length; i += 4) {
    i906.push( UnityEngine.Rect.MinMaxRect(i907[i + 0], i907[i + 1], i907[i + 2], i907[i + 3]) );
  }
  i904.rects = i906
  i904.wrapU = i905[8]
  i904.wrapV = i905[9]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i911 = data
  i910.name = i911[0]
  i910.index = i911[1]
  i910.startup = !!i911[2]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i913 = data
  i912.enabled = !!i913[0]
  i912.aspect = i913[1]
  i912.orthographic = !!i913[2]
  i912.orthographicSize = i913[3]
  i912.backgroundColor = new pc.Color(i913[4], i913[5], i913[6], i913[7])
  i912.nearClipPlane = i913[8]
  i912.farClipPlane = i913[9]
  i912.fieldOfView = i913[10]
  i912.depth = i913[11]
  i912.clearFlags = i913[12]
  i912.cullingMask = i913[13]
  i912.rect = i913[14]
  request.r(i913[15], i913[16], 0, i912, 'targetTexture')
  i912.usePhysicalProperties = !!i913[17]
  i912.focalLength = i913[18]
  i912.sensorSize = new pc.Vec2( i913[19], i913[20] )
  i912.lensShift = new pc.Vec2( i913[21], i913[22] )
  i912.gateFit = i913[23]
  i912.commandBufferCount = i913[24]
  i912.cameraType = i913[25]
  return i912
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i914 = root || request.c( 'CameraFollow' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'target')
  request.r(i915[2], i915[3], 0, i914, 'finishTarget')
  return i914
}

Deserializers["FOVCalculator"] = function (request, data, root) {
  var i916 = root || request.c( 'FOVCalculator' )
  var i917 = data
  return i916
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i918 = root || request.c( 'SoundManager' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'pushSound')
  request.r(i919[2], i919[3], 0, i918, 'coinSound')
  request.r(i919[4], i919[5], 0, i918, 'countdownSound')
  request.r(i919[6], i919[7], 0, i918, 'botDeathSound')
  request.r(i919[8], i919[9], 0, i918, 'coinFirstInteractionSound')
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'clip')
  request.r(i921[2], i921[3], 0, i920, 'outputAudioMixerGroup')
  i920.playOnAwake = !!i921[4]
  i920.loop = !!i921[5]
  i920.time = i921[6]
  i920.volume = i921[7]
  i920.pitch = i921[8]
  i920.enabled = !!i921[9]
  return i920
}

Deserializers["RankManager"] = function (request, data, root) {
  var i922 = root || request.c( 'RankManager' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'rankImage')
  var i925 = i923[2]
  var i924 = []
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 2, i924, '')
  }
  i922.rankSprites = i924
  var i927 = i923[3]
  var i926 = []
  for(var i = 0; i < i927.length; i += 2) {
  request.r(i927[i + 0], i927[i + 1], 2, i926, '')
  }
  i922.racers = i926
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i931 = data
  i930.enabled = !!i931[0]
  i930.planeDistance = i931[1]
  i930.referencePixelsPerUnit = i931[2]
  i930.isFallbackOverlay = !!i931[3]
  i930.renderMode = i931[4]
  i930.renderOrder = i931[5]
  i930.sortingLayerName = i931[6]
  i930.sortingOrder = i931[7]
  i930.scaleFactor = i931[8]
  request.r(i931[9], i931[10], 0, i930, 'worldCamera')
  i930.overrideSorting = !!i931[11]
  i930.pixelPerfect = !!i931[12]
  i930.targetDisplay = i931[13]
  i930.overridePixelPerfect = !!i931[14]
  return i930
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i933 = data
  i932.m_UiScaleMode = i933[0]
  i932.m_ReferencePixelsPerUnit = i933[1]
  i932.m_ScaleFactor = i933[2]
  i932.m_ReferenceResolution = new pc.Vec2( i933[3], i933[4] )
  i932.m_ScreenMatchMode = i933[5]
  i932.m_MatchWidthOrHeight = i933[6]
  i932.m_PhysicalUnit = i933[7]
  i932.m_FallbackScreenDPI = i933[8]
  i932.m_DefaultSpriteDPI = i933[9]
  i932.m_DynamicPixelsPerUnit = i933[10]
  i932.m_PresetInfoIsWorld = !!i933[11]
  return i932
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i935 = data
  i934.m_IgnoreReversedGraphics = !!i935[0]
  i934.m_BlockingObjects = i935[1]
  i934.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i935[2] )
  return i934
}

Deserializers["Joystick"] = function (request, data, root) {
  var i936 = root || request.c( 'Joystick' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'joystickBackground')
  request.r(i937[2], i937[3], 0, i936, 'joystickHandle')
  return i936
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i939 = data
  i938.m_Spacing = i939[0]
  i938.m_ChildForceExpandWidth = !!i939[1]
  i938.m_ChildForceExpandHeight = !!i939[2]
  i938.m_ChildControlWidth = !!i939[3]
  i938.m_ChildControlHeight = !!i939[4]
  i938.m_ChildScaleWidth = !!i939[5]
  i938.m_ChildScaleHeight = !!i939[6]
  i938.m_ReverseArrangement = !!i939[7]
  i938.m_Padding = UnityEngine.RectOffset.FromPaddings(i939[8], i939[9], i939[10], i939[11])
  i938.m_ChildAlignment = i939[12]
  return i938
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i941 = data
  i940.m_HorizontalFit = i941[0]
  i940.m_VerticalFit = i941[1]
  return i940
}

Deserializers["DeathCounter"] = function (request, data, root) {
  var i942 = root || request.c( 'DeathCounter' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'deathCounterText')
  return i942
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i944 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i945 = data
  i944.m_hasFontAssetChanged = !!i945[0]
  request.r(i945[1], i945[2], 0, i944, 'm_baseMaterial')
  i944.m_maskOffset = new pc.Vec4( i945[3], i945[4], i945[5], i945[6] )
  i944.m_text = i945[7]
  i944.m_isRightToLeft = !!i945[8]
  request.r(i945[9], i945[10], 0, i944, 'm_fontAsset')
  request.r(i945[11], i945[12], 0, i944, 'm_sharedMaterial')
  var i947 = i945[13]
  var i946 = []
  for(var i = 0; i < i947.length; i += 2) {
  request.r(i947[i + 0], i947[i + 1], 2, i946, '')
  }
  i944.m_fontSharedMaterials = i946
  request.r(i945[14], i945[15], 0, i944, 'm_fontMaterial')
  var i949 = i945[16]
  var i948 = []
  for(var i = 0; i < i949.length; i += 2) {
  request.r(i949[i + 0], i949[i + 1], 2, i948, '')
  }
  i944.m_fontMaterials = i948
  i944.m_fontColor32 = UnityEngine.Color32.ConstructColor(i945[17], i945[18], i945[19], i945[20])
  i944.m_fontColor = new pc.Color(i945[21], i945[22], i945[23], i945[24])
  i944.m_enableVertexGradient = !!i945[25]
  i944.m_colorMode = i945[26]
  i944.m_fontColorGradient = request.d('TMPro.VertexGradient', i945[27], i944.m_fontColorGradient)
  request.r(i945[28], i945[29], 0, i944, 'm_fontColorGradientPreset')
  request.r(i945[30], i945[31], 0, i944, 'm_spriteAsset')
  i944.m_tintAllSprites = !!i945[32]
  request.r(i945[33], i945[34], 0, i944, 'm_StyleSheet')
  i944.m_TextStyleHashCode = i945[35]
  i944.m_overrideHtmlColors = !!i945[36]
  i944.m_faceColor = UnityEngine.Color32.ConstructColor(i945[37], i945[38], i945[39], i945[40])
  i944.m_fontSize = i945[41]
  i944.m_fontSizeBase = i945[42]
  i944.m_fontWeight = i945[43]
  i944.m_enableAutoSizing = !!i945[44]
  i944.m_fontSizeMin = i945[45]
  i944.m_fontSizeMax = i945[46]
  i944.m_fontStyle = i945[47]
  i944.m_HorizontalAlignment = i945[48]
  i944.m_VerticalAlignment = i945[49]
  i944.m_textAlignment = i945[50]
  i944.m_characterSpacing = i945[51]
  i944.m_wordSpacing = i945[52]
  i944.m_lineSpacing = i945[53]
  i944.m_lineSpacingMax = i945[54]
  i944.m_paragraphSpacing = i945[55]
  i944.m_charWidthMaxAdj = i945[56]
  i944.m_enableWordWrapping = !!i945[57]
  i944.m_wordWrappingRatios = i945[58]
  i944.m_overflowMode = i945[59]
  request.r(i945[60], i945[61], 0, i944, 'm_linkedTextComponent')
  request.r(i945[62], i945[63], 0, i944, 'parentLinkedComponent')
  i944.m_enableKerning = !!i945[64]
  i944.m_enableExtraPadding = !!i945[65]
  i944.checkPaddingRequired = !!i945[66]
  i944.m_isRichText = !!i945[67]
  i944.m_parseCtrlCharacters = !!i945[68]
  i944.m_isOrthographic = !!i945[69]
  i944.m_isCullingEnabled = !!i945[70]
  i944.m_horizontalMapping = i945[71]
  i944.m_verticalMapping = i945[72]
  i944.m_uvLineOffset = i945[73]
  i944.m_geometrySortingOrder = i945[74]
  i944.m_IsTextObjectScaleStatic = !!i945[75]
  i944.m_VertexBufferAutoSizeReduction = !!i945[76]
  i944.m_useMaxVisibleDescender = !!i945[77]
  i944.m_pageToDisplay = i945[78]
  i944.m_margin = new pc.Vec4( i945[79], i945[80], i945[81], i945[82] )
  i944.m_isUsingLegacyAnimationComponent = !!i945[83]
  i944.m_isVolumetricText = !!i945[84]
  request.r(i945[85], i945[86], 0, i944, 'm_Material')
  i944.m_Maskable = !!i945[87]
  i944.m_Color = new pc.Color(i945[88], i945[89], i945[90], i945[91])
  i944.m_RaycastTarget = !!i945[92]
  i944.m_RaycastPadding = new pc.Vec4( i945[93], i945[94], i945[95], i945[96] )
  return i944
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i950 = root || request.c( 'TMPro.VertexGradient' )
  var i951 = data
  i950.topLeft = new pc.Color(i951[0], i951[1], i951[2], i951[3])
  i950.topRight = new pc.Color(i951[4], i951[5], i951[6], i951[7])
  i950.bottomLeft = new pc.Color(i951[8], i951[9], i951[10], i951[11])
  i950.bottomRight = new pc.Color(i951[12], i951[13], i951[14], i951[15])
  return i950
}

Deserializers["CoinManager"] = function (request, data, root) {
  var i952 = root || request.c( 'CoinManager' )
  var i953 = data
  request.r(i953[0], i953[1], 0, i952, 'coinCounterText')
  request.r(i953[2], i953[3], 0, i952, 'flyingCoinPrefab')
  request.r(i953[4], i953[5], 0, i952, 'uiTarget')
  return i952
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i954 = root || request.c( 'UnityEngine.UI.Button' )
  var i955 = data
  i954.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i955[0], i954.m_OnClick)
  i954.m_Navigation = request.d('UnityEngine.UI.Navigation', i955[1], i954.m_Navigation)
  i954.m_Transition = i955[2]
  i954.m_Colors = request.d('UnityEngine.UI.ColorBlock', i955[3], i954.m_Colors)
  i954.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i955[4], i954.m_SpriteState)
  i954.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i955[5], i954.m_AnimationTriggers)
  i954.m_Interactable = !!i955[6]
  request.r(i955[7], i955[8], 0, i954, 'm_TargetGraphic')
  return i954
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i956 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i957 = data
  i956.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i957[0], i956.m_PersistentCalls)
  return i956
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i959 = data
  var i961 = i959[0]
  var i960 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i961.length; i += 1) {
    i960.add(request.d('UnityEngine.Events.PersistentCall', i961[i + 0]));
  }
  i958.m_Calls = i960
  return i958
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'm_Target')
  i964.m_TargetAssemblyTypeName = i965[2]
  i964.m_MethodName = i965[3]
  i964.m_Mode = i965[4]
  i964.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i965[5], i964.m_Arguments)
  i964.m_CallState = i965[6]
  return i964
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i967 = data
  request.r(i967[0], i967[1], 0, i966, 'm_ObjectArgument')
  i966.m_ObjectArgumentAssemblyTypeName = i967[2]
  i966.m_IntArgument = i967[3]
  i966.m_FloatArgument = i967[4]
  i966.m_StringArgument = i967[5]
  i966.m_BoolArgument = !!i967[6]
  return i966
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i968 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i969 = data
  i968.m_Mode = i969[0]
  i968.m_WrapAround = !!i969[1]
  request.r(i969[2], i969[3], 0, i968, 'm_SelectOnUp')
  request.r(i969[4], i969[5], 0, i968, 'm_SelectOnDown')
  request.r(i969[6], i969[7], 0, i968, 'm_SelectOnLeft')
  request.r(i969[8], i969[9], 0, i968, 'm_SelectOnRight')
  return i968
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i971 = data
  i970.m_NormalColor = new pc.Color(i971[0], i971[1], i971[2], i971[3])
  i970.m_HighlightedColor = new pc.Color(i971[4], i971[5], i971[6], i971[7])
  i970.m_PressedColor = new pc.Color(i971[8], i971[9], i971[10], i971[11])
  i970.m_SelectedColor = new pc.Color(i971[12], i971[13], i971[14], i971[15])
  i970.m_DisabledColor = new pc.Color(i971[16], i971[17], i971[18], i971[19])
  i970.m_ColorMultiplier = i971[20]
  i970.m_FadeDuration = i971[21]
  return i970
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i972 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'm_HighlightedSprite')
  request.r(i973[2], i973[3], 0, i972, 'm_PressedSprite')
  request.r(i973[4], i973[5], 0, i972, 'm_SelectedSprite')
  request.r(i973[6], i973[7], 0, i972, 'm_DisabledSprite')
  return i972
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i975 = data
  i974.m_NormalTrigger = i975[0]
  i974.m_HighlightedTrigger = i975[1]
  i974.m_PressedTrigger = i975[2]
  i974.m_SelectedTrigger = i975[3]
  i974.m_DisabledTrigger = i975[4]
  return i974
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i976 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'm_FirstSelected')
  i976.m_sendNavigationEvents = !!i977[2]
  i976.m_DragThreshold = i977[3]
  return i976
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i978 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i979 = data
  i978.m_HorizontalAxis = i979[0]
  i978.m_VerticalAxis = i979[1]
  i978.m_SubmitButton = i979[2]
  i978.m_CancelButton = i979[3]
  i978.m_InputActionsPerSecond = i979[4]
  i978.m_RepeatDelay = i979[5]
  i978.m_ForceModuleActive = !!i979[6]
  i978.m_SendPointerHoverToParent = !!i979[7]
  return i978
}

Deserializers["GameManager"] = function (request, data, root) {
  var i980 = root || request.c( 'GameManager' )
  var i981 = data
  i980.isRunnerGameStarted = !!i981[0]
  i980.isGameCompleted = !!i981[1]
  request.r(i981[2], i981[3], 0, i980, 'completeGameUI')
  request.r(i981[4], i981[5], 0, i980, 'startGameUI')
  request.r(i981[6], i981[7], 0, i980, 'starterText')
  request.r(i981[8], i981[9], 0, i980, 'starterImage')
  var i983 = i981[10]
  var i982 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i983.length; i += 2) {
  request.r(i983[i + 0], i983[i + 1], 1, i982, '')
  }
  i980.starterImages = i982
  request.r(i981[11], i981[12], 0, i980, 'tapToStartText')
  i980.skipStartScreen = !!i981[13]
  return i980
}

Deserializers["FinishLine"] = function (request, data, root) {
  var i986 = root || request.c( 'FinishLine' )
  var i987 = data
  return i986
}

Deserializers["PowerUp"] = function (request, data, root) {
  var i988 = root || request.c( 'PowerUp' )
  var i989 = data
  i988.powerUpType = i989[0]
  i988.distance = i989[1]
  i988.moveTime = i989[2]
  return i988
}

Deserializers["BackgroundMusic"] = function (request, data, root) {
  var i990 = root || request.c( 'BackgroundMusic' )
  var i991 = data
  return i990
}

Deserializers["NodeManager"] = function (request, data, root) {
  var i992 = root || request.c( 'NodeManager' )
  var i993 = data
  return i992
}

Deserializers["AINode"] = function (request, data, root) {
  var i994 = root || request.c( 'AINode' )
  var i995 = data
  i994.leftOffset = i995[0]
  i994.rightOffset = i995[1]
  request.r(i995[2], i995[3], 0, i994, 'nextNode')
  return i994
}

Deserializers["PowerupManager"] = function (request, data, root) {
  var i996 = root || request.c( 'PowerupManager' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'bananaPrefab')
  request.r(i997[2], i997[3], 0, i996, 'placePowerUpText')
  request.r(i997[4], i997[5], 0, i996, 'cursor')
  request.r(i997[6], i997[7], 0, i996, 'powerUpUI')
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i999 = data
  i998.ambientIntensity = i999[0]
  i998.reflectionIntensity = i999[1]
  i998.ambientMode = i999[2]
  i998.ambientLight = new pc.Color(i999[3], i999[4], i999[5], i999[6])
  i998.ambientSkyColor = new pc.Color(i999[7], i999[8], i999[9], i999[10])
  i998.ambientGroundColor = new pc.Color(i999[11], i999[12], i999[13], i999[14])
  i998.ambientEquatorColor = new pc.Color(i999[15], i999[16], i999[17], i999[18])
  i998.fogColor = new pc.Color(i999[19], i999[20], i999[21], i999[22])
  i998.fogEndDistance = i999[23]
  i998.fogStartDistance = i999[24]
  i998.fogDensity = i999[25]
  i998.fog = !!i999[26]
  request.r(i999[27], i999[28], 0, i998, 'skybox')
  i998.fogMode = i999[29]
  var i1001 = i999[30]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1001[i + 0]) );
  }
  i998.lightmaps = i1000
  i998.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i999[31], i998.lightProbes)
  i998.lightmapsMode = i999[32]
  i998.mixedBakeMode = i999[33]
  i998.environmentLightingMode = i999[34]
  i998.ambientProbe = new pc.SphericalHarmonicsL2(i999[35])
  i998.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i999[36])
  i998.useReferenceAmbientProbe = !!i999[37]
  request.r(i999[38], i999[39], 0, i998, 'customReflection')
  request.r(i999[40], i999[41], 0, i998, 'defaultReflection')
  i998.defaultReflectionMode = i999[42]
  i998.defaultReflectionResolution = i999[43]
  i998.sunLightObjectId = i999[44]
  i998.pixelLightCount = i999[45]
  i998.defaultReflectionHDR = !!i999[46]
  i998.hasLightDataAsset = !!i999[47]
  i998.hasManualGenerate = !!i999[48]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'lightmapColor')
  request.r(i1005[2], i1005[3], 0, i1004, 'lightmapDirection')
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1006 = root || new UnityEngine.LightProbes()
  var i1007 = data
  return i1006
}

Deserializers["WallPainter"] = function (request, data, root) {
  var i1014 = root || request.c( 'WallPainter' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'texturePaint')
  request.r(i1015[2], i1015[3], 0, i1014, 'brushSizeSlider')
  request.r(i1015[4], i1015[5], 0, i1014, 'paintedPercentageText')
  request.r(i1015[6], i1015[7], 0, i1014, 'yellowButton')
  request.r(i1015[8], i1015[9], 0, i1014, 'redButton')
  request.r(i1015[10], i1015[11], 0, i1014, 'blueButton')
  request.r(i1015[12], i1015[13], 0, i1014, 'canvas')
  request.r(i1015[14], i1015[15], 0, i1014, 'mainMaterial')
  request.r(i1015[16], i1015[17], 0, i1014, '_meshRenderer')
  request.r(i1015[18], i1015[19], 0, i1014, 'wallTransform')
  request.r(i1015[20], i1015[21], 0, i1014, '_audioSource')
  i1014.maxVolume = i1015[22]
  i1014.volumeFadeSpeed = i1015[23]
  return i1014
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'm_FillRect')
  request.r(i1017[2], i1017[3], 0, i1016, 'm_HandleRect')
  i1016.m_Direction = i1017[4]
  i1016.m_MinValue = i1017[5]
  i1016.m_MaxValue = i1017[6]
  i1016.m_WholeNumbers = !!i1017[7]
  i1016.m_Value = i1017[8]
  i1016.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1017[9], i1016.m_OnValueChanged)
  i1016.m_Navigation = request.d('UnityEngine.UI.Navigation', i1017[10], i1016.m_Navigation)
  i1016.m_Transition = i1017[11]
  i1016.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1017[12], i1016.m_Colors)
  i1016.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1017[13], i1016.m_SpriteState)
  i1016.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1017[14], i1016.m_AnimationTriggers)
  i1016.m_Interactable = !!i1017[15]
  request.r(i1017[16], i1017[17], 0, i1016, 'm_TargetGraphic')
  return i1016
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1019 = data
  i1018.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1019[0], i1018.m_PersistentCalls)
  return i1018
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i1020 = root || request.c( 'TMPro.TextMeshPro' )
  var i1021 = data
  i1020._SortingLayer = i1021[0]
  i1020._SortingLayerID = i1021[1]
  i1020._SortingOrder = i1021[2]
  i1020.m_hasFontAssetChanged = !!i1021[3]
  request.r(i1021[4], i1021[5], 0, i1020, 'm_renderer')
  i1020.m_maskType = i1021[6]
  i1020.m_text = i1021[7]
  i1020.m_isRightToLeft = !!i1021[8]
  request.r(i1021[9], i1021[10], 0, i1020, 'm_fontAsset')
  request.r(i1021[11], i1021[12], 0, i1020, 'm_sharedMaterial')
  var i1023 = i1021[13]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 2) {
  request.r(i1023[i + 0], i1023[i + 1], 2, i1022, '')
  }
  i1020.m_fontSharedMaterials = i1022
  request.r(i1021[14], i1021[15], 0, i1020, 'm_fontMaterial')
  var i1025 = i1021[16]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 2) {
  request.r(i1025[i + 0], i1025[i + 1], 2, i1024, '')
  }
  i1020.m_fontMaterials = i1024
  i1020.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1021[17], i1021[18], i1021[19], i1021[20])
  i1020.m_fontColor = new pc.Color(i1021[21], i1021[22], i1021[23], i1021[24])
  i1020.m_enableVertexGradient = !!i1021[25]
  i1020.m_colorMode = i1021[26]
  i1020.m_fontColorGradient = request.d('TMPro.VertexGradient', i1021[27], i1020.m_fontColorGradient)
  request.r(i1021[28], i1021[29], 0, i1020, 'm_fontColorGradientPreset')
  request.r(i1021[30], i1021[31], 0, i1020, 'm_spriteAsset')
  i1020.m_tintAllSprites = !!i1021[32]
  request.r(i1021[33], i1021[34], 0, i1020, 'm_StyleSheet')
  i1020.m_TextStyleHashCode = i1021[35]
  i1020.m_overrideHtmlColors = !!i1021[36]
  i1020.m_faceColor = UnityEngine.Color32.ConstructColor(i1021[37], i1021[38], i1021[39], i1021[40])
  i1020.m_fontSize = i1021[41]
  i1020.m_fontSizeBase = i1021[42]
  i1020.m_fontWeight = i1021[43]
  i1020.m_enableAutoSizing = !!i1021[44]
  i1020.m_fontSizeMin = i1021[45]
  i1020.m_fontSizeMax = i1021[46]
  i1020.m_fontStyle = i1021[47]
  i1020.m_HorizontalAlignment = i1021[48]
  i1020.m_VerticalAlignment = i1021[49]
  i1020.m_textAlignment = i1021[50]
  i1020.m_characterSpacing = i1021[51]
  i1020.m_wordSpacing = i1021[52]
  i1020.m_lineSpacing = i1021[53]
  i1020.m_lineSpacingMax = i1021[54]
  i1020.m_paragraphSpacing = i1021[55]
  i1020.m_charWidthMaxAdj = i1021[56]
  i1020.m_enableWordWrapping = !!i1021[57]
  i1020.m_wordWrappingRatios = i1021[58]
  i1020.m_overflowMode = i1021[59]
  request.r(i1021[60], i1021[61], 0, i1020, 'm_linkedTextComponent')
  request.r(i1021[62], i1021[63], 0, i1020, 'parentLinkedComponent')
  i1020.m_enableKerning = !!i1021[64]
  i1020.m_enableExtraPadding = !!i1021[65]
  i1020.checkPaddingRequired = !!i1021[66]
  i1020.m_isRichText = !!i1021[67]
  i1020.m_parseCtrlCharacters = !!i1021[68]
  i1020.m_isOrthographic = !!i1021[69]
  i1020.m_isCullingEnabled = !!i1021[70]
  i1020.m_horizontalMapping = i1021[71]
  i1020.m_verticalMapping = i1021[72]
  i1020.m_uvLineOffset = i1021[73]
  i1020.m_geometrySortingOrder = i1021[74]
  i1020.m_IsTextObjectScaleStatic = !!i1021[75]
  i1020.m_VertexBufferAutoSizeReduction = !!i1021[76]
  i1020.m_useMaxVisibleDescender = !!i1021[77]
  i1020.m_pageToDisplay = i1021[78]
  i1020.m_margin = new pc.Vec4( i1021[79], i1021[80], i1021[81], i1021[82] )
  i1020.m_isUsingLegacyAnimationComponent = !!i1021[83]
  i1020.m_isVolumetricText = !!i1021[84]
  request.r(i1021[85], i1021[86], 0, i1020, 'm_Material')
  i1020.m_Maskable = !!i1021[87]
  i1020.m_Color = new pc.Color(i1021[88], i1021[89], i1021[90], i1021[91])
  i1020.m_RaycastTarget = !!i1021[92]
  i1020.m_RaycastPadding = new pc.Vec4( i1021[93], i1021[94], i1021[95], i1021[96] )
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1027 = data
  var i1029 = i1027[0]
  var i1028 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1029[i + 0]));
  }
  i1026.ShaderCompilationErrors = i1028
  i1026.name = i1027[1]
  i1026.guid = i1027[2]
  var i1031 = i1027[3]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( i1031[i + 0] );
  }
  i1026.shaderDefinedKeywords = i1030
  var i1033 = i1027[4]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1033[i + 0]) );
  }
  i1026.passes = i1032
  var i1035 = i1027[5]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1035[i + 0]) );
  }
  i1026.usePasses = i1034
  var i1037 = i1027[6]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1037[i + 0]) );
  }
  i1026.defaultParameterValues = i1036
  request.r(i1027[7], i1027[8], 0, i1026, 'unityFallbackShader')
  i1026.readDepth = !!i1027[9]
  i1026.isCreatedByShaderGraph = !!i1027[10]
  i1026.compiled = !!i1027[11]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1041 = data
  i1040.shaderName = i1041[0]
  i1040.errorMessage = i1041[1]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1046 = root || new pc.UnityShaderPass()
  var i1047 = data
  i1046.id = i1047[0]
  i1046.subShaderIndex = i1047[1]
  i1046.name = i1047[2]
  i1046.passType = i1047[3]
  i1046.grabPassTextureName = i1047[4]
  i1046.usePass = !!i1047[5]
  i1046.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[6], i1046.zTest)
  i1046.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[7], i1046.zWrite)
  i1046.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[8], i1046.culling)
  i1046.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1047[9], i1046.blending)
  i1046.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1047[10], i1046.alphaBlending)
  i1046.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[11], i1046.colorWriteMask)
  i1046.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[12], i1046.offsetUnits)
  i1046.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[13], i1046.offsetFactor)
  i1046.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[14], i1046.stencilRef)
  i1046.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[15], i1046.stencilReadMask)
  i1046.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[16], i1046.stencilWriteMask)
  i1046.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1047[17], i1046.stencilOp)
  i1046.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1047[18], i1046.stencilOpFront)
  i1046.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1047[19], i1046.stencilOpBack)
  var i1049 = i1047[20]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1049[i + 0]) );
  }
  i1046.tags = i1048
  var i1051 = i1047[21]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( i1051[i + 0] );
  }
  i1046.passDefinedKeywords = i1050
  var i1053 = i1047[22]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1053[i + 0]) );
  }
  i1046.passDefinedKeywordGroups = i1052
  var i1055 = i1047[23]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1055[i + 0]) );
  }
  i1046.variants = i1054
  var i1057 = i1047[24]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1057[i + 0]) );
  }
  i1046.excludedVariants = i1056
  i1046.hasDepthReader = !!i1047[25]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1059 = data
  i1058.val = i1059[0]
  i1058.name = i1059[1]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1061 = data
  i1060.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[0], i1060.src)
  i1060.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[1], i1060.dst)
  i1060.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[2], i1060.op)
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1063 = data
  i1062.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1063[0], i1062.pass)
  i1062.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1063[1], i1062.fail)
  i1062.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1063[2], i1062.zFail)
  i1062.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1063[3], i1062.comp)
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1067 = data
  i1066.name = i1067[0]
  i1066.value = i1067[1]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1071 = data
  var i1073 = i1071[0]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( i1073[i + 0] );
  }
  i1070.keywords = i1072
  i1070.hasDiscard = !!i1071[1]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1077 = data
  i1076.passId = i1077[0]
  i1076.subShaderIndex = i1077[1]
  var i1079 = i1077[2]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( i1079[i + 0] );
  }
  i1076.keywords = i1078
  i1076.vertexProgram = i1077[3]
  i1076.fragmentProgram = i1077[4]
  i1076.exportedForWebGl2 = !!i1077[5]
  i1076.readDepth = !!i1077[6]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1083 = data
  request.r(i1083[0], i1083[1], 0, i1082, 'shader')
  i1082.pass = i1083[2]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1087 = data
  i1086.name = i1087[0]
  i1086.type = i1087[1]
  i1086.value = new pc.Vec4( i1087[2], i1087[3], i1087[4], i1087[5] )
  i1086.textureValue = i1087[6]
  i1086.shaderPropertyFlag = i1087[7]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1089 = data
  i1088.name = i1089[0]
  request.r(i1089[1], i1089[2], 0, i1088, 'texture')
  i1088.aabb = i1089[3]
  i1088.vertices = i1089[4]
  i1088.triangles = i1089[5]
  i1088.textureRect = UnityEngine.Rect.MinMaxRect(i1089[6], i1089[7], i1089[8], i1089[9])
  i1088.packedRect = UnityEngine.Rect.MinMaxRect(i1089[10], i1089[11], i1089[12], i1089[13])
  i1088.border = new pc.Vec4( i1089[14], i1089[15], i1089[16], i1089[17] )
  i1088.transparency = i1089[18]
  i1088.bounds = i1089[19]
  i1088.pixelsPerUnit = i1089[20]
  i1088.textureWidth = i1089[21]
  i1088.textureHeight = i1089[22]
  i1088.nativeSize = new pc.Vec2( i1089[23], i1089[24] )
  i1088.pivot = new pc.Vec2( i1089[25], i1089[26] )
  i1088.textureRectOffset = new pc.Vec2( i1089[27], i1089[28] )
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1091 = data
  i1090.name = i1091[0]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1093 = data
  i1092.name = i1093[0]
  i1092.wrapMode = i1093[1]
  i1092.isLooping = !!i1093[2]
  i1092.length = i1093[3]
  var i1095 = i1093[4]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1095[i + 0]) );
  }
  i1092.curves = i1094
  var i1097 = i1093[5]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1097[i + 0]) );
  }
  i1092.events = i1096
  i1092.halfPrecision = !!i1093[6]
  i1092._frameRate = i1093[7]
  i1092.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1093[8], i1092.localBounds)
  i1092.hasMuscleCurves = !!i1093[9]
  var i1099 = i1093[10]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( i1099[i + 0] );
  }
  i1092.clipMuscleConstant = i1098
  i1092.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1093[11], i1092.clipBindingConstant)
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1103 = data
  i1102.path = i1103[0]
  i1102.hash = i1103[1]
  i1102.componentType = i1103[2]
  i1102.property = i1103[3]
  i1102.keys = i1103[4]
  var i1105 = i1103[5]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1105[i + 0]) );
  }
  i1102.objectReferenceKeys = i1104
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1109 = data
  i1108.time = i1109[0]
  request.r(i1109[1], i1109[2], 0, i1108, 'value')
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1113 = data
  i1112.functionName = i1113[0]
  i1112.floatParameter = i1113[1]
  i1112.intParameter = i1113[2]
  i1112.stringParameter = i1113[3]
  request.r(i1113[4], i1113[5], 0, i1112, 'objectReferenceParameter')
  i1112.time = i1113[6]
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1115 = data
  i1114.center = new pc.Vec3( i1115[0], i1115[1], i1115[2] )
  i1114.extends = new pc.Vec3( i1115[3], i1115[4], i1115[5] )
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1119 = data
  var i1121 = i1119[0]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( i1121[i + 0] );
  }
  i1118.genericBindings = i1120
  var i1123 = i1119[1]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( i1123[i + 0] );
  }
  i1118.pptrCurveMapping = i1122
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i1125 = data
  i1124.name = i1125[0]
  i1124.blendParameter = i1125[1]
  i1124.blendParameterY = i1125[2]
  i1124.blendType = i1125[3]
  var i1127 = i1125[4]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i1127[i + 0]) );
  }
  i1124.children = i1126
  i1124.useAutomaticThresholds = !!i1125[5]
  i1124.minThreshold = i1125[6]
  i1124.maxThreshold = i1125[7]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i1131 = data
  request.r(i1131[0], i1131[1], 0, i1130, 'motion')
  i1130.threshold = i1131[2]
  i1130.position = new pc.Vec2( i1131[3], i1131[4] )
  i1130.timeScale = i1131[5]
  i1130.cycleOffset = i1131[6]
  i1130.directBlendParameter = i1131[7]
  i1130.mirror = !!i1131[8]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1133 = data
  i1132.name = i1133[0]
  i1132.ascent = i1133[1]
  i1132.originalLineHeight = i1133[2]
  i1132.fontSize = i1133[3]
  var i1135 = i1133[4]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1135[i + 0]) );
  }
  i1132.characterInfo = i1134
  request.r(i1133[5], i1133[6], 0, i1132, 'texture')
  i1132.originalFontSize = i1133[7]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1139 = data
  i1138.index = i1139[0]
  i1138.advance = i1139[1]
  i1138.bearing = i1139[2]
  i1138.glyphWidth = i1139[3]
  i1138.glyphHeight = i1139[4]
  i1138.minX = i1139[5]
  i1138.maxX = i1139[6]
  i1138.minY = i1139[7]
  i1138.maxY = i1139[8]
  i1138.uvBottomLeftX = i1139[9]
  i1138.uvBottomLeftY = i1139[10]
  i1138.uvBottomRightX = i1139[11]
  i1138.uvBottomRightY = i1139[12]
  i1138.uvTopLeftX = i1139[13]
  i1138.uvTopLeftY = i1139[14]
  i1138.uvTopRightX = i1139[15]
  i1138.uvTopRightY = i1139[16]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1141 = data
  i1140.name = i1141[0]
  var i1143 = i1141[1]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1143[i + 0]) );
  }
  i1140.layers = i1142
  var i1145 = i1141[2]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1145[i + 0]) );
  }
  i1140.parameters = i1144
  i1140.animationClips = i1141[3]
  i1140.avatarUnsupported = i1141[4]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1149 = data
  i1148.name = i1149[0]
  i1148.defaultWeight = i1149[1]
  i1148.blendingMode = i1149[2]
  i1148.avatarMask = i1149[3]
  i1148.syncedLayerIndex = i1149[4]
  i1148.syncedLayerAffectsTiming = !!i1149[5]
  i1148.syncedLayers = i1149[6]
  i1148.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1149[7], i1148.stateMachine)
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1151 = data
  i1150.id = i1151[0]
  i1150.name = i1151[1]
  i1150.path = i1151[2]
  var i1153 = i1151[3]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1153[i + 0]) );
  }
  i1150.states = i1152
  var i1155 = i1151[4]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1155[i + 0]) );
  }
  i1150.machines = i1154
  var i1157 = i1151[5]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1157[i + 0]) );
  }
  i1150.entryStateTransitions = i1156
  var i1159 = i1151[6]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1159[i + 0]) );
  }
  i1150.exitStateTransitions = i1158
  var i1161 = i1151[7]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1161[i + 0]) );
  }
  i1150.anyStateTransitions = i1160
  i1150.defaultStateId = i1151[8]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1165 = data
  i1164.id = i1165[0]
  i1164.name = i1165[1]
  i1164.cycleOffset = i1165[2]
  i1164.cycleOffsetParameter = i1165[3]
  i1164.cycleOffsetParameterActive = !!i1165[4]
  i1164.mirror = !!i1165[5]
  i1164.mirrorParameter = i1165[6]
  i1164.mirrorParameterActive = !!i1165[7]
  i1164.motionId = i1165[8]
  i1164.nameHash = i1165[9]
  i1164.fullPathHash = i1165[10]
  i1164.speed = i1165[11]
  i1164.speedParameter = i1165[12]
  i1164.speedParameterActive = !!i1165[13]
  i1164.tag = i1165[14]
  i1164.tagHash = i1165[15]
  i1164.writeDefaultValues = !!i1165[16]
  var i1167 = i1165[17]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 2) {
  request.r(i1167[i + 0], i1167[i + 1], 2, i1166, '')
  }
  i1164.behaviours = i1166
  var i1169 = i1165[18]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1169[i + 0]) );
  }
  i1164.transitions = i1168
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1175 = data
  i1174.fullPath = i1175[0]
  i1174.canTransitionToSelf = !!i1175[1]
  i1174.duration = i1175[2]
  i1174.exitTime = i1175[3]
  i1174.hasExitTime = !!i1175[4]
  i1174.hasFixedDuration = !!i1175[5]
  i1174.interruptionSource = i1175[6]
  i1174.offset = i1175[7]
  i1174.orderedInterruption = !!i1175[8]
  i1174.destinationStateId = i1175[9]
  i1174.isExit = !!i1175[10]
  i1174.mute = !!i1175[11]
  i1174.solo = !!i1175[12]
  var i1177 = i1175[13]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1177[i + 0]) );
  }
  i1174.conditions = i1176
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1181 = data
  i1180.mode = i1181[0]
  i1180.parameter = i1181[1]
  i1180.threshold = i1181[2]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1187 = data
  i1186.destinationStateId = i1187[0]
  i1186.isExit = !!i1187[1]
  i1186.mute = !!i1187[2]
  i1186.solo = !!i1187[3]
  var i1189 = i1187[4]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1189[i + 0]) );
  }
  i1186.conditions = i1188
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1193 = data
  i1192.defaultBool = !!i1193[0]
  i1192.defaultFloat = i1193[1]
  i1192.defaultInt = i1193[2]
  i1192.name = i1193[3]
  i1192.nameHash = i1193[4]
  i1192.type = i1193[5]
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1195 = data
  i1194.name = i1195[0]
  i1194.bytes64 = i1195[1]
  i1194.data = i1195[2]
  return i1194
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1196 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1197 = data
  i1196.hashCode = i1197[0]
  request.r(i1197[1], i1197[2], 0, i1196, 'material')
  i1196.materialHashCode = i1197[3]
  request.r(i1197[4], i1197[5], 0, i1196, 'atlas')
  i1196.normalStyle = i1197[6]
  i1196.normalSpacingOffset = i1197[7]
  i1196.boldStyle = i1197[8]
  i1196.boldSpacing = i1197[9]
  i1196.italicStyle = i1197[10]
  i1196.tabSize = i1197[11]
  i1196.m_Version = i1197[12]
  i1196.m_SourceFontFileGUID = i1197[13]
  request.r(i1197[14], i1197[15], 0, i1196, 'm_SourceFontFile_EditorRef')
  request.r(i1197[16], i1197[17], 0, i1196, 'm_SourceFontFile')
  i1196.m_AtlasPopulationMode = i1197[18]
  i1196.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1197[19], i1196.m_FaceInfo)
  var i1199 = i1197[20]
  var i1198 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.add(request.d('UnityEngine.TextCore.Glyph', i1199[i + 0]));
  }
  i1196.m_GlyphTable = i1198
  var i1201 = i1197[21]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.add(request.d('TMPro.TMP_Character', i1201[i + 0]));
  }
  i1196.m_CharacterTable = i1200
  var i1203 = i1197[22]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 2) {
  request.r(i1203[i + 0], i1203[i + 1], 2, i1202, '')
  }
  i1196.m_AtlasTextures = i1202
  i1196.m_AtlasTextureIndex = i1197[23]
  i1196.m_IsMultiAtlasTexturesEnabled = !!i1197[24]
  i1196.m_ClearDynamicDataOnBuild = !!i1197[25]
  var i1205 = i1197[26]
  var i1204 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.add(request.d('UnityEngine.TextCore.GlyphRect', i1205[i + 0]));
  }
  i1196.m_UsedGlyphRects = i1204
  var i1207 = i1197[27]
  var i1206 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.add(request.d('UnityEngine.TextCore.GlyphRect', i1207[i + 0]));
  }
  i1196.m_FreeGlyphRects = i1206
  i1196.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1197[28], i1196.m_fontInfo)
  i1196.m_AtlasWidth = i1197[29]
  i1196.m_AtlasHeight = i1197[30]
  i1196.m_AtlasPadding = i1197[31]
  i1196.m_AtlasRenderMode = i1197[32]
  var i1209 = i1197[33]
  var i1208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.add(request.d('TMPro.TMP_Glyph', i1209[i + 0]));
  }
  i1196.m_glyphInfoList = i1208
  i1196.m_KerningTable = request.d('TMPro.KerningTable', i1197[34], i1196.m_KerningTable)
  i1196.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1197[35], i1196.m_FontFeatureTable)
  var i1211 = i1197[36]
  var i1210 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1211.length; i += 2) {
  request.r(i1211[i + 0], i1211[i + 1], 1, i1210, '')
  }
  i1196.fallbackFontAssets = i1210
  var i1213 = i1197[37]
  var i1212 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1213.length; i += 2) {
  request.r(i1213[i + 0], i1213[i + 1], 1, i1212, '')
  }
  i1196.m_FallbackFontAssetTable = i1212
  i1196.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1197[38], i1196.m_CreationSettings)
  var i1215 = i1197[39]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.push( request.d('TMPro.TMP_FontWeightPair', i1215[i + 0]) );
  }
  i1196.m_FontWeightTable = i1214
  var i1217 = i1197[40]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( request.d('TMPro.TMP_FontWeightPair', i1217[i + 0]) );
  }
  i1196.fontWeights = i1216
  return i1196
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1218 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1219 = data
  i1218.m_FaceIndex = i1219[0]
  i1218.m_FamilyName = i1219[1]
  i1218.m_StyleName = i1219[2]
  i1218.m_PointSize = i1219[3]
  i1218.m_Scale = i1219[4]
  i1218.m_UnitsPerEM = i1219[5]
  i1218.m_LineHeight = i1219[6]
  i1218.m_AscentLine = i1219[7]
  i1218.m_CapLine = i1219[8]
  i1218.m_MeanLine = i1219[9]
  i1218.m_Baseline = i1219[10]
  i1218.m_DescentLine = i1219[11]
  i1218.m_SuperscriptOffset = i1219[12]
  i1218.m_SuperscriptSize = i1219[13]
  i1218.m_SubscriptOffset = i1219[14]
  i1218.m_SubscriptSize = i1219[15]
  i1218.m_UnderlineOffset = i1219[16]
  i1218.m_UnderlineThickness = i1219[17]
  i1218.m_StrikethroughOffset = i1219[18]
  i1218.m_StrikethroughThickness = i1219[19]
  i1218.m_TabWidth = i1219[20]
  return i1218
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1222 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1223 = data
  i1222.m_Index = i1223[0]
  i1222.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1223[1], i1222.m_Metrics)
  i1222.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1223[2], i1222.m_GlyphRect)
  i1222.m_Scale = i1223[3]
  i1222.m_AtlasIndex = i1223[4]
  i1222.m_ClassDefinitionType = i1223[5]
  return i1222
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1224 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1225 = data
  i1224.m_Width = i1225[0]
  i1224.m_Height = i1225[1]
  i1224.m_HorizontalBearingX = i1225[2]
  i1224.m_HorizontalBearingY = i1225[3]
  i1224.m_HorizontalAdvance = i1225[4]
  return i1224
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1226 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1227 = data
  i1226.m_X = i1227[0]
  i1226.m_Y = i1227[1]
  i1226.m_Width = i1227[2]
  i1226.m_Height = i1227[3]
  return i1226
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1230 = root || request.c( 'TMPro.TMP_Character' )
  var i1231 = data
  i1230.m_ElementType = i1231[0]
  i1230.m_Unicode = i1231[1]
  i1230.m_GlyphIndex = i1231[2]
  i1230.m_Scale = i1231[3]
  return i1230
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1236 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1237 = data
  i1236.Name = i1237[0]
  i1236.PointSize = i1237[1]
  i1236.Scale = i1237[2]
  i1236.CharacterCount = i1237[3]
  i1236.LineHeight = i1237[4]
  i1236.Baseline = i1237[5]
  i1236.Ascender = i1237[6]
  i1236.CapHeight = i1237[7]
  i1236.Descender = i1237[8]
  i1236.CenterLine = i1237[9]
  i1236.SuperscriptOffset = i1237[10]
  i1236.SubscriptOffset = i1237[11]
  i1236.SubSize = i1237[12]
  i1236.Underline = i1237[13]
  i1236.UnderlineThickness = i1237[14]
  i1236.strikethrough = i1237[15]
  i1236.strikethroughThickness = i1237[16]
  i1236.TabWidth = i1237[17]
  i1236.Padding = i1237[18]
  i1236.AtlasWidth = i1237[19]
  i1236.AtlasHeight = i1237[20]
  return i1236
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1240 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1241 = data
  i1240.id = i1241[0]
  i1240.x = i1241[1]
  i1240.y = i1241[2]
  i1240.width = i1241[3]
  i1240.height = i1241[4]
  i1240.xOffset = i1241[5]
  i1240.yOffset = i1241[6]
  i1240.xAdvance = i1241[7]
  i1240.scale = i1241[8]
  return i1240
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1242 = root || request.c( 'TMPro.KerningTable' )
  var i1243 = data
  var i1245 = i1243[0]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.add(request.d('TMPro.KerningPair', i1245[i + 0]));
  }
  i1242.kerningPairs = i1244
  return i1242
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1248 = root || request.c( 'TMPro.KerningPair' )
  var i1249 = data
  i1248.xOffset = i1249[0]
  i1248.m_FirstGlyph = i1249[1]
  i1248.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1249[2], i1248.m_FirstGlyphAdjustments)
  i1248.m_SecondGlyph = i1249[3]
  i1248.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1249[4], i1248.m_SecondGlyphAdjustments)
  i1248.m_IgnoreSpacingAdjustments = !!i1249[5]
  return i1248
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1250 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1251 = data
  var i1253 = i1251[0]
  var i1252 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1253[i + 0]));
  }
  i1250.m_GlyphPairAdjustmentRecords = i1252
  return i1250
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1256 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1257 = data
  i1256.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1257[0], i1256.m_FirstAdjustmentRecord)
  i1256.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1257[1], i1256.m_SecondAdjustmentRecord)
  i1256.m_FeatureLookupFlags = i1257[2]
  return i1256
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1258 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1259 = data
  i1258.m_GlyphIndex = i1259[0]
  i1258.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1259[1], i1258.m_GlyphValueRecord)
  return i1258
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1260 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1261 = data
  i1260.m_XPlacement = i1261[0]
  i1260.m_YPlacement = i1261[1]
  i1260.m_XAdvance = i1261[2]
  i1260.m_YAdvance = i1261[3]
  return i1260
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1264 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1265 = data
  i1264.sourceFontFileName = i1265[0]
  i1264.sourceFontFileGUID = i1265[1]
  i1264.pointSizeSamplingMode = i1265[2]
  i1264.pointSize = i1265[3]
  i1264.padding = i1265[4]
  i1264.packingMode = i1265[5]
  i1264.atlasWidth = i1265[6]
  i1264.atlasHeight = i1265[7]
  i1264.characterSetSelectionMode = i1265[8]
  i1264.characterSequence = i1265[9]
  i1264.referencedFontAssetGUID = i1265[10]
  i1264.referencedTextAssetGUID = i1265[11]
  i1264.fontStyle = i1265[12]
  i1264.fontStyleModifier = i1265[13]
  i1264.renderMode = i1265[14]
  i1264.includeFontFeatures = !!i1265[15]
  return i1264
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1268 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1269 = data
  request.r(i1269[0], i1269[1], 0, i1268, 'regularTypeface')
  request.r(i1269[2], i1269[3], 0, i1268, 'italicTypeface')
  return i1268
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1270 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1271 = data
  i1270.useSafeMode = !!i1271[0]
  i1270.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1271[1], i1270.safeModeOptions)
  i1270.timeScale = i1271[2]
  i1270.unscaledTimeScale = i1271[3]
  i1270.useSmoothDeltaTime = !!i1271[4]
  i1270.maxSmoothUnscaledTime = i1271[5]
  i1270.rewindCallbackMode = i1271[6]
  i1270.showUnityEditorReport = !!i1271[7]
  i1270.logBehaviour = i1271[8]
  i1270.drawGizmos = !!i1271[9]
  i1270.defaultRecyclable = !!i1271[10]
  i1270.defaultAutoPlay = i1271[11]
  i1270.defaultUpdateType = i1271[12]
  i1270.defaultTimeScaleIndependent = !!i1271[13]
  i1270.defaultEaseType = i1271[14]
  i1270.defaultEaseOvershootOrAmplitude = i1271[15]
  i1270.defaultEasePeriod = i1271[16]
  i1270.defaultAutoKill = !!i1271[17]
  i1270.defaultLoopType = i1271[18]
  i1270.debugMode = !!i1271[19]
  i1270.debugStoreTargetId = !!i1271[20]
  i1270.showPreviewPanel = !!i1271[21]
  i1270.storeSettingsLocation = i1271[22]
  i1270.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1271[23], i1270.modules)
  i1270.createASMDEF = !!i1271[24]
  i1270.showPlayingTweens = !!i1271[25]
  i1270.showPausedTweens = !!i1271[26]
  return i1270
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1272 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1273 = data
  i1272.logBehaviour = i1273[0]
  i1272.nestedTweenFailureBehaviour = i1273[1]
  return i1272
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1274 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1275 = data
  i1274.showPanel = !!i1275[0]
  i1274.audioEnabled = !!i1275[1]
  i1274.physicsEnabled = !!i1275[2]
  i1274.physics2DEnabled = !!i1275[3]
  i1274.spriteEnabled = !!i1275[4]
  i1274.uiEnabled = !!i1275[5]
  i1274.textMeshProEnabled = !!i1275[6]
  i1274.tk2DEnabled = !!i1275[7]
  i1274.deAudioEnabled = !!i1275[8]
  i1274.deUnityExtendedEnabled = !!i1275[9]
  i1274.epoOutlineEnabled = !!i1275[10]
  return i1274
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1276 = root || request.c( 'TMPro.TMP_Settings' )
  var i1277 = data
  i1276.m_enableWordWrapping = !!i1277[0]
  i1276.m_enableKerning = !!i1277[1]
  i1276.m_enableExtraPadding = !!i1277[2]
  i1276.m_enableTintAllSprites = !!i1277[3]
  i1276.m_enableParseEscapeCharacters = !!i1277[4]
  i1276.m_EnableRaycastTarget = !!i1277[5]
  i1276.m_GetFontFeaturesAtRuntime = !!i1277[6]
  i1276.m_missingGlyphCharacter = i1277[7]
  i1276.m_warningsDisabled = !!i1277[8]
  request.r(i1277[9], i1277[10], 0, i1276, 'm_defaultFontAsset')
  i1276.m_defaultFontAssetPath = i1277[11]
  i1276.m_defaultFontSize = i1277[12]
  i1276.m_defaultAutoSizeMinRatio = i1277[13]
  i1276.m_defaultAutoSizeMaxRatio = i1277[14]
  i1276.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1277[15], i1277[16] )
  i1276.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1277[17], i1277[18] )
  i1276.m_autoSizeTextContainer = !!i1277[19]
  i1276.m_IsTextObjectScaleStatic = !!i1277[20]
  var i1279 = i1277[21]
  var i1278 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1279.length; i += 2) {
  request.r(i1279[i + 0], i1279[i + 1], 1, i1278, '')
  }
  i1276.m_fallbackFontAssets = i1278
  i1276.m_matchMaterialPreset = !!i1277[22]
  request.r(i1277[23], i1277[24], 0, i1276, 'm_defaultSpriteAsset')
  i1276.m_defaultSpriteAssetPath = i1277[25]
  i1276.m_enableEmojiSupport = !!i1277[26]
  i1276.m_MissingCharacterSpriteUnicode = i1277[27]
  i1276.m_defaultColorGradientPresetsPath = i1277[28]
  request.r(i1277[29], i1277[30], 0, i1276, 'm_defaultStyleSheet')
  i1276.m_StyleSheetsResourcePath = i1277[31]
  request.r(i1277[32], i1277[33], 0, i1276, 'm_leadingCharacters')
  request.r(i1277[34], i1277[35], 0, i1276, 'm_followingCharacters')
  i1276.m_UseModernHangulLineBreakingRules = !!i1277[36]
  return i1276
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1281 = data
  i1280.hashCode = i1281[0]
  request.r(i1281[1], i1281[2], 0, i1280, 'material')
  i1280.materialHashCode = i1281[3]
  request.r(i1281[4], i1281[5], 0, i1280, 'spriteSheet')
  var i1283 = i1281[6]
  var i1282 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.add(request.d('TMPro.TMP_Sprite', i1283[i + 0]));
  }
  i1280.spriteInfoList = i1282
  var i1285 = i1281[7]
  var i1284 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1285.length; i += 2) {
  request.r(i1285[i + 0], i1285[i + 1], 1, i1284, '')
  }
  i1280.fallbackSpriteAssets = i1284
  i1280.m_Version = i1281[8]
  i1280.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1281[9], i1280.m_FaceInfo)
  var i1287 = i1281[10]
  var i1286 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.add(request.d('TMPro.TMP_SpriteCharacter', i1287[i + 0]));
  }
  i1280.m_SpriteCharacterTable = i1286
  var i1289 = i1281[11]
  var i1288 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.add(request.d('TMPro.TMP_SpriteGlyph', i1289[i + 0]));
  }
  i1280.m_SpriteGlyphTable = i1288
  return i1280
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1292 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1293 = data
  i1292.name = i1293[0]
  i1292.hashCode = i1293[1]
  i1292.unicode = i1293[2]
  i1292.pivot = new pc.Vec2( i1293[3], i1293[4] )
  request.r(i1293[5], i1293[6], 0, i1292, 'sprite')
  i1292.id = i1293[7]
  i1292.x = i1293[8]
  i1292.y = i1293[9]
  i1292.width = i1293[10]
  i1292.height = i1293[11]
  i1292.xOffset = i1293[12]
  i1292.yOffset = i1293[13]
  i1292.xAdvance = i1293[14]
  i1292.scale = i1293[15]
  return i1292
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1299 = data
  i1298.m_Name = i1299[0]
  i1298.m_HashCode = i1299[1]
  i1298.m_ElementType = i1299[2]
  i1298.m_Unicode = i1299[3]
  i1298.m_GlyphIndex = i1299[4]
  i1298.m_Scale = i1299[5]
  return i1298
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1303 = data
  request.r(i1303[0], i1303[1], 0, i1302, 'sprite')
  i1302.m_Index = i1303[2]
  i1302.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1303[3], i1302.m_Metrics)
  i1302.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1303[4], i1302.m_GlyphRect)
  i1302.m_Scale = i1303[5]
  i1302.m_AtlasIndex = i1303[6]
  i1302.m_ClassDefinitionType = i1303[7]
  return i1302
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1304 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1305 = data
  var i1307 = i1305[0]
  var i1306 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.add(request.d('TMPro.TMP_Style', i1307[i + 0]));
  }
  i1304.m_StyleList = i1306
  return i1304
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1310 = root || request.c( 'TMPro.TMP_Style' )
  var i1311 = data
  i1310.m_Name = i1311[0]
  i1310.m_HashCode = i1311[1]
  i1310.m_OpeningDefinition = i1311[2]
  i1310.m_ClosingDefinition = i1311[3]
  i1310.m_OpeningTagArray = i1311[4]
  i1310.m_ClosingTagArray = i1311[5]
  i1310.m_OpeningTagUnicodeArray = i1311[6]
  i1310.m_ClosingTagUnicodeArray = i1311[7]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1313 = data
  var i1315 = i1313[0]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1315[i + 0]) );
  }
  i1312.files = i1314
  i1312.componentToPrefabIds = i1313[1]
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1319 = data
  i1318.path = i1319[0]
  request.r(i1319[1], i1319[2], 0, i1318, 'unityObject')
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1321 = data
  var i1323 = i1321[0]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1323[i + 0]) );
  }
  i1320.scriptsExecutionOrder = i1322
  var i1325 = i1321[1]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1325[i + 0]) );
  }
  i1320.sortingLayers = i1324
  var i1327 = i1321[2]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1327[i + 0]) );
  }
  i1320.cullingLayers = i1326
  i1320.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1321[3], i1320.timeSettings)
  i1320.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1321[4], i1320.physicsSettings)
  i1320.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1321[5], i1320.physics2DSettings)
  i1320.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1321[6], i1320.qualitySettings)
  i1320.enableRealtimeShadows = !!i1321[7]
  i1320.enableAutoInstancing = !!i1321[8]
  i1320.enableDynamicBatching = !!i1321[9]
  i1320.lightmapEncodingQuality = i1321[10]
  i1320.desiredColorSpace = i1321[11]
  var i1329 = i1321[12]
  var i1328 = []
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.push( i1329[i + 0] );
  }
  i1320.allTags = i1328
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1333 = data
  i1332.name = i1333[0]
  i1332.value = i1333[1]
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1337 = data
  i1336.id = i1337[0]
  i1336.name = i1337[1]
  i1336.value = i1337[2]
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1341 = data
  i1340.id = i1341[0]
  i1340.name = i1341[1]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1343 = data
  i1342.fixedDeltaTime = i1343[0]
  i1342.maximumDeltaTime = i1343[1]
  i1342.timeScale = i1343[2]
  i1342.maximumParticleTimestep = i1343[3]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1345 = data
  i1344.gravity = new pc.Vec3( i1345[0], i1345[1], i1345[2] )
  i1344.defaultSolverIterations = i1345[3]
  i1344.bounceThreshold = i1345[4]
  i1344.autoSyncTransforms = !!i1345[5]
  i1344.autoSimulation = !!i1345[6]
  var i1347 = i1345[7]
  var i1346 = []
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1347[i + 0]) );
  }
  i1344.collisionMatrix = i1346
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1351 = data
  i1350.enabled = !!i1351[0]
  i1350.layerId = i1351[1]
  i1350.otherLayerId = i1351[2]
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1353 = data
  request.r(i1353[0], i1353[1], 0, i1352, 'material')
  i1352.gravity = new pc.Vec2( i1353[2], i1353[3] )
  i1352.positionIterations = i1353[4]
  i1352.velocityIterations = i1353[5]
  i1352.velocityThreshold = i1353[6]
  i1352.maxLinearCorrection = i1353[7]
  i1352.maxAngularCorrection = i1353[8]
  i1352.maxTranslationSpeed = i1353[9]
  i1352.maxRotationSpeed = i1353[10]
  i1352.baumgarteScale = i1353[11]
  i1352.baumgarteTOIScale = i1353[12]
  i1352.timeToSleep = i1353[13]
  i1352.linearSleepTolerance = i1353[14]
  i1352.angularSleepTolerance = i1353[15]
  i1352.defaultContactOffset = i1353[16]
  i1352.autoSimulation = !!i1353[17]
  i1352.queriesHitTriggers = !!i1353[18]
  i1352.queriesStartInColliders = !!i1353[19]
  i1352.callbacksOnDisable = !!i1353[20]
  i1352.reuseCollisionCallbacks = !!i1353[21]
  i1352.autoSyncTransforms = !!i1353[22]
  var i1355 = i1353[23]
  var i1354 = []
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1355[i + 0]) );
  }
  i1352.collisionMatrix = i1354
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1359 = data
  i1358.enabled = !!i1359[0]
  i1358.layerId = i1359[1]
  i1358.otherLayerId = i1359[2]
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1361 = data
  var i1363 = i1361[0]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1363[i + 0]) );
  }
  i1360.qualityLevels = i1362
  var i1365 = i1361[1]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( i1365[i + 0] );
  }
  i1360.names = i1364
  i1360.shadows = i1361[2]
  i1360.anisotropicFiltering = i1361[3]
  i1360.antiAliasing = i1361[4]
  i1360.lodBias = i1361[5]
  i1360.shadowCascades = i1361[6]
  i1360.shadowDistance = i1361[7]
  i1360.shadowmaskMode = i1361[8]
  i1360.shadowProjection = i1361[9]
  i1360.shadowResolution = i1361[10]
  i1360.softParticles = !!i1361[11]
  i1360.softVegetation = !!i1361[12]
  i1360.activeColorSpace = i1361[13]
  i1360.desiredColorSpace = i1361[14]
  i1360.masterTextureLimit = i1361[15]
  i1360.maxQueuedFrames = i1361[16]
  i1360.particleRaycastBudget = i1361[17]
  i1360.pixelLightCount = i1361[18]
  i1360.realtimeReflectionProbes = !!i1361[19]
  i1360.shadowCascade2Split = i1361[20]
  i1360.shadowCascade4Split = new pc.Vec3( i1361[21], i1361[22], i1361[23] )
  i1360.streamingMipmapsActive = !!i1361[24]
  i1360.vSyncCount = i1361[25]
  i1360.asyncUploadBufferSize = i1361[26]
  i1360.asyncUploadTimeSlice = i1361[27]
  i1360.billboardsFaceCameraPosition = !!i1361[28]
  i1360.shadowNearPlaneOffset = i1361[29]
  i1360.streamingMipmapsMemoryBudget = i1361[30]
  i1360.maximumLODLevel = i1361[31]
  i1360.streamingMipmapsAddAllCameras = !!i1361[32]
  i1360.streamingMipmapsMaxLevelReduction = i1361[33]
  i1360.streamingMipmapsRenderersPerFrame = i1361[34]
  i1360.resolutionScalingFixedDPIFactor = i1361[35]
  i1360.streamingMipmapsMaxFileIORequests = i1361[36]
  i1360.currentQualityLevel = i1361[37]
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1369 = data
  i1368.name = i1369[0]
  var i1371 = i1369[1]
  var i1370 = []
  for(var i = 0; i < i1371.length; i += 1) {
    i1370.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1371[i + 0]) );
  }
  i1368.tos = i1370
  var i1373 = i1369[2]
  var i1372 = []
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.push( i1373[i + 0] );
  }
  i1368.constant = i1372
  i1368.isValid = !!i1369[3]
  i1368.isHuman = !!i1369[4]
  i1368.hasRootMotion = !!i1369[5]
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1377 = data
  i1376.hash = i1377[0]
  i1376.path = i1377[1]
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1381 = data
  i1380.weight = i1381[0]
  i1380.vertices = i1381[1]
  i1380.normals = i1381[2]
  i1380.tangents = i1381[3]
  return i1380
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1382 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1383 = data
  i1382.xPlacement = i1383[0]
  i1382.yPlacement = i1383[1]
  i1382.xAdvance = i1383[2]
  i1382.yAdvance = i1383[3]
  return i1382
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

Deserializers.buildID = "a3d9fcf7-16c2-48f7-977f-d35cf05c114c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Rendering","Universal","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

