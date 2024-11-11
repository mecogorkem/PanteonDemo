var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5966 = root || request.c( 'UnityEngine.JointSpring' )
  var i5967 = data
  i5966.spring = i5967[0]
  i5966.damper = i5967[1]
  i5966.targetPosition = i5967[2]
  return i5966
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5968 = root || request.c( 'UnityEngine.JointMotor' )
  var i5969 = data
  i5968.m_TargetVelocity = i5969[0]
  i5968.m_Force = i5969[1]
  i5968.m_FreeSpin = i5969[2]
  return i5968
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5970 = root || request.c( 'UnityEngine.JointLimits' )
  var i5971 = data
  i5970.m_Min = i5971[0]
  i5970.m_Max = i5971[1]
  i5970.m_Bounciness = i5971[2]
  i5970.m_BounceMinVelocity = i5971[3]
  i5970.m_ContactDistance = i5971[4]
  i5970.minBounce = i5971[5]
  i5970.maxBounce = i5971[6]
  return i5970
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5972 = root || request.c( 'UnityEngine.JointDrive' )
  var i5973 = data
  i5972.m_PositionSpring = i5973[0]
  i5972.m_PositionDamper = i5973[1]
  i5972.m_MaximumForce = i5973[2]
  return i5972
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5974 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5975 = data
  i5974.m_Spring = i5975[0]
  i5974.m_Damper = i5975[1]
  return i5974
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5976 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5977 = data
  i5976.m_Limit = i5977[0]
  i5976.m_Bounciness = i5977[1]
  i5976.m_ContactDistance = i5977[2]
  return i5976
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5978 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5979 = data
  i5978.m_ExtremumSlip = i5979[0]
  i5978.m_ExtremumValue = i5979[1]
  i5978.m_AsymptoteSlip = i5979[2]
  i5978.m_AsymptoteValue = i5979[3]
  i5978.m_Stiffness = i5979[4]
  return i5978
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5980 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5981 = data
  i5980.m_LowerAngle = i5981[0]
  i5980.m_UpperAngle = i5981[1]
  return i5980
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5982 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5983 = data
  i5982.m_MotorSpeed = i5983[0]
  i5982.m_MaximumMotorTorque = i5983[1]
  return i5982
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5984 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5985 = data
  i5984.m_DampingRatio = i5985[0]
  i5984.m_Frequency = i5985[1]
  i5984.m_Angle = i5985[2]
  return i5984
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5986 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5987 = data
  i5986.m_LowerTranslation = i5987[0]
  i5986.m_UpperTranslation = i5987[1]
  return i5986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i5988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i5989 = data
  i5988.name = i5989[0]
  i5988.halfPrecision = !!i5989[1]
  i5988.useUInt32IndexFormat = !!i5989[2]
  i5988.vertexCount = i5989[3]
  i5988.aabb = i5989[4]
  var i5991 = i5989[5]
  var i5990 = []
  for(var i = 0; i < i5991.length; i += 1) {
    i5990.push( !!i5991[i + 0] );
  }
  i5988.streams = i5990
  i5988.vertices = i5989[6]
  var i5993 = i5989[7]
  var i5992 = []
  for(var i = 0; i < i5993.length; i += 1) {
    i5992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i5993[i + 0]) );
  }
  i5988.subMeshes = i5992
  var i5995 = i5989[8]
  var i5994 = []
  for(var i = 0; i < i5995.length; i += 16) {
    i5994.push( new pc.Mat4().setData(i5995[i + 0], i5995[i + 1], i5995[i + 2], i5995[i + 3],  i5995[i + 4], i5995[i + 5], i5995[i + 6], i5995[i + 7],  i5995[i + 8], i5995[i + 9], i5995[i + 10], i5995[i + 11],  i5995[i + 12], i5995[i + 13], i5995[i + 14], i5995[i + 15]) );
  }
  i5988.bindposes = i5994
  var i5997 = i5989[9]
  var i5996 = []
  for(var i = 0; i < i5997.length; i += 1) {
    i5996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i5997[i + 0]) );
  }
  i5988.blendShapes = i5996
  return i5988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i6002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i6003 = data
  i6002.triangles = i6003[0]
  return i6002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i6008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i6009 = data
  i6008.name = i6009[0]
  var i6011 = i6009[1]
  var i6010 = []
  for(var i = 0; i < i6011.length; i += 1) {
    i6010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i6011[i + 0]) );
  }
  i6008.frames = i6010
  return i6008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i6012 = root || new pc.UnityMaterial()
  var i6013 = data
  i6012.name = i6013[0]
  request.r(i6013[1], i6013[2], 0, i6012, 'shader')
  i6012.renderQueue = i6013[3]
  i6012.enableInstancing = !!i6013[4]
  var i6015 = i6013[5]
  var i6014 = []
  for(var i = 0; i < i6015.length; i += 1) {
    i6014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i6015[i + 0]) );
  }
  i6012.floatParameters = i6014
  var i6017 = i6013[6]
  var i6016 = []
  for(var i = 0; i < i6017.length; i += 1) {
    i6016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i6017[i + 0]) );
  }
  i6012.colorParameters = i6016
  var i6019 = i6013[7]
  var i6018 = []
  for(var i = 0; i < i6019.length; i += 1) {
    i6018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i6019[i + 0]) );
  }
  i6012.vectorParameters = i6018
  var i6021 = i6013[8]
  var i6020 = []
  for(var i = 0; i < i6021.length; i += 1) {
    i6020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i6021[i + 0]) );
  }
  i6012.textureParameters = i6020
  var i6023 = i6013[9]
  var i6022 = []
  for(var i = 0; i < i6023.length; i += 1) {
    i6022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i6023[i + 0]) );
  }
  i6012.materialFlags = i6022
  return i6012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i6026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i6027 = data
  i6026.name = i6027[0]
  i6026.value = i6027[1]
  return i6026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i6030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i6031 = data
  i6030.name = i6031[0]
  i6030.value = new pc.Color(i6031[1], i6031[2], i6031[3], i6031[4])
  return i6030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i6034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i6035 = data
  i6034.name = i6035[0]
  i6034.value = new pc.Vec4( i6035[1], i6035[2], i6035[3], i6035[4] )
  return i6034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i6038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i6039 = data
  i6038.name = i6039[0]
  request.r(i6039[1], i6039[2], 0, i6038, 'value')
  return i6038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i6042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i6043 = data
  i6042.name = i6043[0]
  i6042.enabled = !!i6043[1]
  return i6042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i6044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i6045 = data
  i6044.name = i6045[0]
  i6044.width = i6045[1]
  i6044.height = i6045[2]
  i6044.mipmapCount = i6045[3]
  i6044.anisoLevel = i6045[4]
  i6044.filterMode = i6045[5]
  i6044.hdr = !!i6045[6]
  i6044.format = i6045[7]
  i6044.wrapMode = i6045[8]
  i6044.alphaIsTransparency = !!i6045[9]
  i6044.alphaSource = i6045[10]
  i6044.graphicsFormat = i6045[11]
  i6044.sRGBTexture = !!i6045[12]
  i6044.desiredColorSpace = i6045[13]
  i6044.wrapU = i6045[14]
  i6044.wrapV = i6045[15]
  return i6044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i6046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i6047 = data
  i6046.name = i6047[0]
  i6046.atlasId = i6047[1]
  i6046.mipmapCount = i6047[2]
  i6046.hdr = !!i6047[3]
  i6046.size = i6047[4]
  i6046.anisoLevel = i6047[5]
  i6046.filterMode = i6047[6]
  var i6049 = i6047[7]
  var i6048 = []
  for(var i = 0; i < i6049.length; i += 4) {
    i6048.push( UnityEngine.Rect.MinMaxRect(i6049[i + 0], i6049[i + 1], i6049[i + 2], i6049[i + 3]) );
  }
  i6046.rects = i6048
  i6046.wrapU = i6047[8]
  i6046.wrapV = i6047[9]
  return i6046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i6052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i6053 = data
  i6052.name = i6053[0]
  i6052.index = i6053[1]
  i6052.startup = !!i6053[2]
  return i6052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i6054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i6055 = data
  i6054.position = new pc.Vec3( i6055[0], i6055[1], i6055[2] )
  i6054.scale = new pc.Vec3( i6055[3], i6055[4], i6055[5] )
  i6054.rotation = new pc.Quat(i6055[6], i6055[7], i6055[8], i6055[9])
  return i6054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i6056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i6057 = data
  i6056.enabled = !!i6057[0]
  i6056.aspect = i6057[1]
  i6056.orthographic = !!i6057[2]
  i6056.orthographicSize = i6057[3]
  i6056.backgroundColor = new pc.Color(i6057[4], i6057[5], i6057[6], i6057[7])
  i6056.nearClipPlane = i6057[8]
  i6056.farClipPlane = i6057[9]
  i6056.fieldOfView = i6057[10]
  i6056.depth = i6057[11]
  i6056.clearFlags = i6057[12]
  i6056.cullingMask = i6057[13]
  i6056.rect = i6057[14]
  request.r(i6057[15], i6057[16], 0, i6056, 'targetTexture')
  i6056.usePhysicalProperties = !!i6057[17]
  i6056.focalLength = i6057[18]
  i6056.sensorSize = new pc.Vec2( i6057[19], i6057[20] )
  i6056.lensShift = new pc.Vec2( i6057[21], i6057[22] )
  i6056.gateFit = i6057[23]
  i6056.commandBufferCount = i6057[24]
  i6056.cameraType = i6057[25]
  return i6056
}

Deserializers["FOVCalculator"] = function (request, data, root) {
  var i6058 = root || request.c( 'FOVCalculator' )
  var i6059 = data
  return i6058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i6060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i6061 = data
  i6060.name = i6061[0]
  i6060.tagId = i6061[1]
  i6060.enabled = !!i6061[2]
  i6060.isStatic = !!i6061[3]
  i6060.layer = i6061[4]
  return i6060
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6062 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6063 = data
  request.r(i6063[0], i6063[1], 0, i6062, 'm_FirstSelected')
  i6062.m_sendNavigationEvents = !!i6063[2]
  i6062.m_DragThreshold = i6063[3]
  return i6062
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6064 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6065 = data
  i6064.m_HorizontalAxis = i6065[0]
  i6064.m_VerticalAxis = i6065[1]
  i6064.m_SubmitButton = i6065[2]
  i6064.m_CancelButton = i6065[3]
  i6064.m_InputActionsPerSecond = i6065[4]
  i6064.m_RepeatDelay = i6065[5]
  i6064.m_ForceModuleActive = !!i6065[6]
  i6064.m_SendPointerHoverToParent = !!i6065[7]
  return i6064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i6066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i6067 = data
  request.r(i6067[0], i6067[1], 0, i6066, 'sharedMesh')
  return i6066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i6068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i6069 = data
  request.r(i6069[0], i6069[1], 0, i6068, 'additionalVertexStreams')
  i6068.enabled = !!i6069[2]
  request.r(i6069[3], i6069[4], 0, i6068, 'sharedMaterial')
  var i6071 = i6069[5]
  var i6070 = []
  for(var i = 0; i < i6071.length; i += 2) {
  request.r(i6071[i + 0], i6071[i + 1], 2, i6070, '')
  }
  i6068.sharedMaterials = i6070
  i6068.receiveShadows = !!i6069[6]
  i6068.shadowCastingMode = i6069[7]
  i6068.sortingLayerID = i6069[8]
  i6068.sortingOrder = i6069[9]
  i6068.lightmapIndex = i6069[10]
  i6068.lightmapSceneIndex = i6069[11]
  i6068.lightmapScaleOffset = new pc.Vec4( i6069[12], i6069[13], i6069[14], i6069[15] )
  i6068.lightProbeUsage = i6069[16]
  i6068.reflectionProbeUsage = i6069[17]
  return i6068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i6074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i6075 = data
  i6074.enabled = !!i6075[0]
  i6074.isTrigger = !!i6075[1]
  request.r(i6075[2], i6075[3], 0, i6074, 'material')
  request.r(i6075[4], i6075[5], 0, i6074, 'sharedMesh')
  i6074.convex = !!i6075[6]
  return i6074
}

Deserializers["PainterGame"] = function (request, data, root) {
  var i6076 = root || request.c( 'PainterGame' )
  var i6077 = data
  request.r(i6077[0], i6077[1], 0, i6076, 'texturePaint')
  request.r(i6077[2], i6077[3], 0, i6076, 'brushSizeSlider')
  request.r(i6077[4], i6077[5], 0, i6076, 'yellowButton')
  request.r(i6077[6], i6077[7], 0, i6076, 'redButton')
  request.r(i6077[8], i6077[9], 0, i6076, 'blueButton')
  request.r(i6077[10], i6077[11], 0, i6076, 'canvas')
  request.r(i6077[12], i6077[13], 0, i6076, 'mainMaterial')
  request.r(i6077[14], i6077[15], 0, i6076, '_meshRenderer')
  request.r(i6077[16], i6077[17], 0, i6076, 'wallTransform')
  request.r(i6077[18], i6077[19], 0, i6076, '_audioSource')
  i6076.maxVolume = i6077[20]
  i6076.volumeFadeSpeed = i6077[21]
  var i6079 = i6077[22]
  var i6078 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i6079.length; i += 2) {
  request.r(i6079[i + 0], i6079[i + 1], 1, i6078, '')
  }
  i6076.maskSprites = i6078
  request.r(i6077[23], i6077[24], 0, i6076, 'maskRenderer')
  request.r(i6077[25], i6077[26], 0, i6076, 'completeGameUI')
  return i6076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i6082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i6083 = data
  request.r(i6083[0], i6083[1], 0, i6082, 'clip')
  request.r(i6083[2], i6083[3], 0, i6082, 'outputAudioMixerGroup')
  i6082.playOnAwake = !!i6083[4]
  i6082.loop = !!i6083[5]
  i6082.time = i6083[6]
  i6082.volume = i6083[7]
  i6082.pitch = i6083[8]
  i6082.enabled = !!i6083[9]
  return i6082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6085 = data
  i6084.pivot = new pc.Vec2( i6085[0], i6085[1] )
  i6084.anchorMin = new pc.Vec2( i6085[2], i6085[3] )
  i6084.anchorMax = new pc.Vec2( i6085[4], i6085[5] )
  i6084.sizeDelta = new pc.Vec2( i6085[6], i6085[7] )
  i6084.anchoredPosition3D = new pc.Vec3( i6085[8], i6085[9], i6085[10] )
  i6084.rotation = new pc.Quat(i6085[11], i6085[12], i6085[13], i6085[14])
  i6084.scale = new pc.Vec3( i6085[15], i6085[16], i6085[17] )
  return i6084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i6086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i6087 = data
  i6086.enabled = !!i6087[0]
  i6086.planeDistance = i6087[1]
  i6086.referencePixelsPerUnit = i6087[2]
  i6086.isFallbackOverlay = !!i6087[3]
  i6086.renderMode = i6087[4]
  i6086.renderOrder = i6087[5]
  i6086.sortingLayerName = i6087[6]
  i6086.sortingOrder = i6087[7]
  i6086.scaleFactor = i6087[8]
  request.r(i6087[9], i6087[10], 0, i6086, 'worldCamera')
  i6086.overrideSorting = !!i6087[11]
  i6086.pixelPerfect = !!i6087[12]
  i6086.targetDisplay = i6087[13]
  i6086.overridePixelPerfect = !!i6087[14]
  return i6086
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i6088 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i6089 = data
  i6088.m_UiScaleMode = i6089[0]
  i6088.m_ReferencePixelsPerUnit = i6089[1]
  i6088.m_ScaleFactor = i6089[2]
  i6088.m_ReferenceResolution = new pc.Vec2( i6089[3], i6089[4] )
  i6088.m_ScreenMatchMode = i6089[5]
  i6088.m_MatchWidthOrHeight = i6089[6]
  i6088.m_PhysicalUnit = i6089[7]
  i6088.m_FallbackScreenDPI = i6089[8]
  i6088.m_DefaultSpriteDPI = i6089[9]
  i6088.m_DynamicPixelsPerUnit = i6089[10]
  i6088.m_PresetInfoIsWorld = !!i6089[11]
  return i6088
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6090 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6091 = data
  i6090.m_IgnoreReversedGraphics = !!i6091[0]
  i6090.m_BlockingObjects = i6091[1]
  i6090.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6091[2] )
  return i6090
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i6092 = root || request.c( 'UnityEngine.UI.Slider' )
  var i6093 = data
  request.r(i6093[0], i6093[1], 0, i6092, 'm_FillRect')
  request.r(i6093[2], i6093[3], 0, i6092, 'm_HandleRect')
  i6092.m_Direction = i6093[4]
  i6092.m_MinValue = i6093[5]
  i6092.m_MaxValue = i6093[6]
  i6092.m_WholeNumbers = !!i6093[7]
  i6092.m_Value = i6093[8]
  i6092.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i6093[9], i6092.m_OnValueChanged)
  i6092.m_Navigation = request.d('UnityEngine.UI.Navigation', i6093[10], i6092.m_Navigation)
  i6092.m_Transition = i6093[11]
  i6092.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6093[12], i6092.m_Colors)
  i6092.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6093[13], i6092.m_SpriteState)
  i6092.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6093[14], i6092.m_AnimationTriggers)
  i6092.m_Interactable = !!i6093[15]
  request.r(i6093[16], i6093[17], 0, i6092, 'm_TargetGraphic')
  return i6092
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i6094 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i6095 = data
  i6094.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6095[0], i6094.m_PersistentCalls)
  return i6094
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i6096 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i6097 = data
  var i6099 = i6097[0]
  var i6098 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i6099.length; i += 1) {
    i6098.add(request.d('UnityEngine.Events.PersistentCall', i6099[i + 0]));
  }
  i6096.m_Calls = i6098
  return i6096
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i6102 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i6103 = data
  request.r(i6103[0], i6103[1], 0, i6102, 'm_Target')
  i6102.m_TargetAssemblyTypeName = i6103[2]
  i6102.m_MethodName = i6103[3]
  i6102.m_Mode = i6103[4]
  i6102.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i6103[5], i6102.m_Arguments)
  i6102.m_CallState = i6103[6]
  return i6102
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i6104 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i6105 = data
  i6104.m_Mode = i6105[0]
  i6104.m_WrapAround = !!i6105[1]
  request.r(i6105[2], i6105[3], 0, i6104, 'm_SelectOnUp')
  request.r(i6105[4], i6105[5], 0, i6104, 'm_SelectOnDown')
  request.r(i6105[6], i6105[7], 0, i6104, 'm_SelectOnLeft')
  request.r(i6105[8], i6105[9], 0, i6104, 'm_SelectOnRight')
  return i6104
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i6106 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i6107 = data
  i6106.m_NormalColor = new pc.Color(i6107[0], i6107[1], i6107[2], i6107[3])
  i6106.m_HighlightedColor = new pc.Color(i6107[4], i6107[5], i6107[6], i6107[7])
  i6106.m_PressedColor = new pc.Color(i6107[8], i6107[9], i6107[10], i6107[11])
  i6106.m_SelectedColor = new pc.Color(i6107[12], i6107[13], i6107[14], i6107[15])
  i6106.m_DisabledColor = new pc.Color(i6107[16], i6107[17], i6107[18], i6107[19])
  i6106.m_ColorMultiplier = i6107[20]
  i6106.m_FadeDuration = i6107[21]
  return i6106
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i6108 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i6109 = data
  request.r(i6109[0], i6109[1], 0, i6108, 'm_HighlightedSprite')
  request.r(i6109[2], i6109[3], 0, i6108, 'm_PressedSprite')
  request.r(i6109[4], i6109[5], 0, i6108, 'm_SelectedSprite')
  request.r(i6109[6], i6109[7], 0, i6108, 'm_DisabledSprite')
  return i6108
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i6110 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i6111 = data
  i6110.m_NormalTrigger = i6111[0]
  i6110.m_HighlightedTrigger = i6111[1]
  i6110.m_PressedTrigger = i6111[2]
  i6110.m_SelectedTrigger = i6111[3]
  i6110.m_DisabledTrigger = i6111[4]
  return i6110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6113 = data
  i6112.cullTransparentMesh = !!i6113[0]
  return i6112
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6114 = root || request.c( 'UnityEngine.UI.Image' )
  var i6115 = data
  request.r(i6115[0], i6115[1], 0, i6114, 'm_Sprite')
  i6114.m_Type = i6115[2]
  i6114.m_PreserveAspect = !!i6115[3]
  i6114.m_FillCenter = !!i6115[4]
  i6114.m_FillMethod = i6115[5]
  i6114.m_FillAmount = i6115[6]
  i6114.m_FillClockwise = !!i6115[7]
  i6114.m_FillOrigin = i6115[8]
  i6114.m_UseSpriteMesh = !!i6115[9]
  i6114.m_PixelsPerUnitMultiplier = i6115[10]
  request.r(i6115[11], i6115[12], 0, i6114, 'm_Material')
  i6114.m_Maskable = !!i6115[13]
  i6114.m_Color = new pc.Color(i6115[14], i6115[15], i6115[16], i6115[17])
  i6114.m_RaycastTarget = !!i6115[18]
  i6114.m_RaycastPadding = new pc.Vec4( i6115[19], i6115[20], i6115[21], i6115[22] )
  return i6114
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i6116 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i6117 = data
  i6116.m_Spacing = i6117[0]
  i6116.m_ChildForceExpandWidth = !!i6117[1]
  i6116.m_ChildForceExpandHeight = !!i6117[2]
  i6116.m_ChildControlWidth = !!i6117[3]
  i6116.m_ChildControlHeight = !!i6117[4]
  i6116.m_ChildScaleWidth = !!i6117[5]
  i6116.m_ChildScaleHeight = !!i6117[6]
  i6116.m_ReverseArrangement = !!i6117[7]
  i6116.m_Padding = UnityEngine.RectOffset.FromPaddings(i6117[8], i6117[9], i6117[10], i6117[11])
  i6116.m_ChildAlignment = i6117[12]
  return i6116
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i6118 = root || request.c( 'UnityEngine.UI.Button' )
  var i6119 = data
  i6118.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i6119[0], i6118.m_OnClick)
  i6118.m_Navigation = request.d('UnityEngine.UI.Navigation', i6119[1], i6118.m_Navigation)
  i6118.m_Transition = i6119[2]
  i6118.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6119[3], i6118.m_Colors)
  i6118.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6119[4], i6118.m_SpriteState)
  i6118.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6119[5], i6118.m_AnimationTriggers)
  i6118.m_Interactable = !!i6119[6]
  request.r(i6119[7], i6119[8], 0, i6118, 'm_TargetGraphic')
  return i6118
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i6120 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i6121 = data
  i6120.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6121[0], i6120.m_PersistentCalls)
  return i6120
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i6122 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i6123 = data
  request.r(i6123[0], i6123[1], 0, i6122, 'm_ObjectArgument')
  i6122.m_ObjectArgumentAssemblyTypeName = i6123[2]
  i6122.m_IntArgument = i6123[3]
  i6122.m_FloatArgument = i6123[4]
  i6122.m_StringArgument = i6123[5]
  i6122.m_BoolArgument = !!i6123[6]
  return i6122
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i6124 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i6125 = data
  i6124.m_hasFontAssetChanged = !!i6125[0]
  request.r(i6125[1], i6125[2], 0, i6124, 'm_baseMaterial')
  i6124.m_maskOffset = new pc.Vec4( i6125[3], i6125[4], i6125[5], i6125[6] )
  i6124.m_text = i6125[7]
  i6124.m_isRightToLeft = !!i6125[8]
  request.r(i6125[9], i6125[10], 0, i6124, 'm_fontAsset')
  request.r(i6125[11], i6125[12], 0, i6124, 'm_sharedMaterial')
  var i6127 = i6125[13]
  var i6126 = []
  for(var i = 0; i < i6127.length; i += 2) {
  request.r(i6127[i + 0], i6127[i + 1], 2, i6126, '')
  }
  i6124.m_fontSharedMaterials = i6126
  request.r(i6125[14], i6125[15], 0, i6124, 'm_fontMaterial')
  var i6129 = i6125[16]
  var i6128 = []
  for(var i = 0; i < i6129.length; i += 2) {
  request.r(i6129[i + 0], i6129[i + 1], 2, i6128, '')
  }
  i6124.m_fontMaterials = i6128
  i6124.m_fontColor32 = UnityEngine.Color32.ConstructColor(i6125[17], i6125[18], i6125[19], i6125[20])
  i6124.m_fontColor = new pc.Color(i6125[21], i6125[22], i6125[23], i6125[24])
  i6124.m_enableVertexGradient = !!i6125[25]
  i6124.m_colorMode = i6125[26]
  i6124.m_fontColorGradient = request.d('TMPro.VertexGradient', i6125[27], i6124.m_fontColorGradient)
  request.r(i6125[28], i6125[29], 0, i6124, 'm_fontColorGradientPreset')
  request.r(i6125[30], i6125[31], 0, i6124, 'm_spriteAsset')
  i6124.m_tintAllSprites = !!i6125[32]
  request.r(i6125[33], i6125[34], 0, i6124, 'm_StyleSheet')
  i6124.m_TextStyleHashCode = i6125[35]
  i6124.m_overrideHtmlColors = !!i6125[36]
  i6124.m_faceColor = UnityEngine.Color32.ConstructColor(i6125[37], i6125[38], i6125[39], i6125[40])
  i6124.m_fontSize = i6125[41]
  i6124.m_fontSizeBase = i6125[42]
  i6124.m_fontWeight = i6125[43]
  i6124.m_enableAutoSizing = !!i6125[44]
  i6124.m_fontSizeMin = i6125[45]
  i6124.m_fontSizeMax = i6125[46]
  i6124.m_fontStyle = i6125[47]
  i6124.m_HorizontalAlignment = i6125[48]
  i6124.m_VerticalAlignment = i6125[49]
  i6124.m_textAlignment = i6125[50]
  i6124.m_characterSpacing = i6125[51]
  i6124.m_wordSpacing = i6125[52]
  i6124.m_lineSpacing = i6125[53]
  i6124.m_lineSpacingMax = i6125[54]
  i6124.m_paragraphSpacing = i6125[55]
  i6124.m_charWidthMaxAdj = i6125[56]
  i6124.m_enableWordWrapping = !!i6125[57]
  i6124.m_wordWrappingRatios = i6125[58]
  i6124.m_overflowMode = i6125[59]
  request.r(i6125[60], i6125[61], 0, i6124, 'm_linkedTextComponent')
  request.r(i6125[62], i6125[63], 0, i6124, 'parentLinkedComponent')
  i6124.m_enableKerning = !!i6125[64]
  i6124.m_enableExtraPadding = !!i6125[65]
  i6124.checkPaddingRequired = !!i6125[66]
  i6124.m_isRichText = !!i6125[67]
  i6124.m_parseCtrlCharacters = !!i6125[68]
  i6124.m_isOrthographic = !!i6125[69]
  i6124.m_isCullingEnabled = !!i6125[70]
  i6124.m_horizontalMapping = i6125[71]
  i6124.m_verticalMapping = i6125[72]
  i6124.m_uvLineOffset = i6125[73]
  i6124.m_geometrySortingOrder = i6125[74]
  i6124.m_IsTextObjectScaleStatic = !!i6125[75]
  i6124.m_VertexBufferAutoSizeReduction = !!i6125[76]
  i6124.m_useMaxVisibleDescender = !!i6125[77]
  i6124.m_pageToDisplay = i6125[78]
  i6124.m_margin = new pc.Vec4( i6125[79], i6125[80], i6125[81], i6125[82] )
  i6124.m_isUsingLegacyAnimationComponent = !!i6125[83]
  i6124.m_isVolumetricText = !!i6125[84]
  request.r(i6125[85], i6125[86], 0, i6124, 'm_Material')
  i6124.m_Maskable = !!i6125[87]
  i6124.m_Color = new pc.Color(i6125[88], i6125[89], i6125[90], i6125[91])
  i6124.m_RaycastTarget = !!i6125[92]
  i6124.m_RaycastPadding = new pc.Vec4( i6125[93], i6125[94], i6125[95], i6125[96] )
  return i6124
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i6130 = root || request.c( 'TMPro.VertexGradient' )
  var i6131 = data
  i6130.topLeft = new pc.Color(i6131[0], i6131[1], i6131[2], i6131[3])
  i6130.topRight = new pc.Color(i6131[4], i6131[5], i6131[6], i6131[7])
  i6130.bottomLeft = new pc.Color(i6131[8], i6131[9], i6131[10], i6131[11])
  i6130.bottomRight = new pc.Color(i6131[12], i6131[13], i6131[14], i6131[15])
  return i6130
}

Deserializers["EscToMainMenu"] = function (request, data, root) {
  var i6132 = root || request.c( 'EscToMainMenu' )
  var i6133 = data
  return i6132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i6134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i6135 = data
  i6134.ambientIntensity = i6135[0]
  i6134.reflectionIntensity = i6135[1]
  i6134.ambientMode = i6135[2]
  i6134.ambientLight = new pc.Color(i6135[3], i6135[4], i6135[5], i6135[6])
  i6134.ambientSkyColor = new pc.Color(i6135[7], i6135[8], i6135[9], i6135[10])
  i6134.ambientGroundColor = new pc.Color(i6135[11], i6135[12], i6135[13], i6135[14])
  i6134.ambientEquatorColor = new pc.Color(i6135[15], i6135[16], i6135[17], i6135[18])
  i6134.fogColor = new pc.Color(i6135[19], i6135[20], i6135[21], i6135[22])
  i6134.fogEndDistance = i6135[23]
  i6134.fogStartDistance = i6135[24]
  i6134.fogDensity = i6135[25]
  i6134.fog = !!i6135[26]
  request.r(i6135[27], i6135[28], 0, i6134, 'skybox')
  i6134.fogMode = i6135[29]
  var i6137 = i6135[30]
  var i6136 = []
  for(var i = 0; i < i6137.length; i += 1) {
    i6136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i6137[i + 0]) );
  }
  i6134.lightmaps = i6136
  i6134.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i6135[31], i6134.lightProbes)
  i6134.lightmapsMode = i6135[32]
  i6134.mixedBakeMode = i6135[33]
  i6134.environmentLightingMode = i6135[34]
  i6134.ambientProbe = new pc.SphericalHarmonicsL2(i6135[35])
  i6134.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i6135[36])
  i6134.useReferenceAmbientProbe = !!i6135[37]
  request.r(i6135[38], i6135[39], 0, i6134, 'customReflection')
  request.r(i6135[40], i6135[41], 0, i6134, 'defaultReflection')
  i6134.defaultReflectionMode = i6135[42]
  i6134.defaultReflectionResolution = i6135[43]
  i6134.sunLightObjectId = i6135[44]
  i6134.pixelLightCount = i6135[45]
  i6134.defaultReflectionHDR = !!i6135[46]
  i6134.hasLightDataAsset = !!i6135[47]
  i6134.hasManualGenerate = !!i6135[48]
  return i6134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i6140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i6141 = data
  request.r(i6141[0], i6141[1], 0, i6140, 'lightmapColor')
  request.r(i6141[2], i6141[3], 0, i6140, 'lightmapDirection')
  return i6140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i6142 = root || new UnityEngine.LightProbes()
  var i6143 = data
  return i6142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i6150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i6151 = data
  var i6153 = i6151[0]
  var i6152 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i6153.length; i += 1) {
    i6152.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i6153[i + 0]));
  }
  i6150.ShaderCompilationErrors = i6152
  i6150.name = i6151[1]
  i6150.guid = i6151[2]
  var i6155 = i6151[3]
  var i6154 = []
  for(var i = 0; i < i6155.length; i += 1) {
    i6154.push( i6155[i + 0] );
  }
  i6150.shaderDefinedKeywords = i6154
  var i6157 = i6151[4]
  var i6156 = []
  for(var i = 0; i < i6157.length; i += 1) {
    i6156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i6157[i + 0]) );
  }
  i6150.passes = i6156
  var i6159 = i6151[5]
  var i6158 = []
  for(var i = 0; i < i6159.length; i += 1) {
    i6158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i6159[i + 0]) );
  }
  i6150.usePasses = i6158
  var i6161 = i6151[6]
  var i6160 = []
  for(var i = 0; i < i6161.length; i += 1) {
    i6160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i6161[i + 0]) );
  }
  i6150.defaultParameterValues = i6160
  request.r(i6151[7], i6151[8], 0, i6150, 'unityFallbackShader')
  i6150.readDepth = !!i6151[9]
  i6150.isCreatedByShaderGraph = !!i6151[10]
  i6150.compiled = !!i6151[11]
  return i6150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i6164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i6165 = data
  i6164.shaderName = i6165[0]
  i6164.errorMessage = i6165[1]
  return i6164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6170 = root || new pc.UnityShaderPass()
  var i6171 = data
  i6170.id = i6171[0]
  i6170.subShaderIndex = i6171[1]
  i6170.name = i6171[2]
  i6170.passType = i6171[3]
  i6170.grabPassTextureName = i6171[4]
  i6170.usePass = !!i6171[5]
  i6170.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6171[6], i6170.zTest)
  i6170.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6171[7], i6170.zWrite)
  i6170.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6171[8], i6170.culling)
  i6170.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6171[9], i6170.blending)
  i6170.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6171[10], i6170.alphaBlending)
  i6170.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6171[11], i6170.colorWriteMask)
  i6170.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6171[12], i6170.offsetUnits)
  i6170.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6171[13], i6170.offsetFactor)
  i6170.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6171[14], i6170.stencilRef)
  i6170.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6171[15], i6170.stencilReadMask)
  i6170.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6171[16], i6170.stencilWriteMask)
  i6170.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6171[17], i6170.stencilOp)
  i6170.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6171[18], i6170.stencilOpFront)
  i6170.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6171[19], i6170.stencilOpBack)
  var i6173 = i6171[20]
  var i6172 = []
  for(var i = 0; i < i6173.length; i += 1) {
    i6172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6173[i + 0]) );
  }
  i6170.tags = i6172
  var i6175 = i6171[21]
  var i6174 = []
  for(var i = 0; i < i6175.length; i += 1) {
    i6174.push( i6175[i + 0] );
  }
  i6170.passDefinedKeywords = i6174
  var i6177 = i6171[22]
  var i6176 = []
  for(var i = 0; i < i6177.length; i += 1) {
    i6176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i6177[i + 0]) );
  }
  i6170.passDefinedKeywordGroups = i6176
  var i6179 = i6171[23]
  var i6178 = []
  for(var i = 0; i < i6179.length; i += 1) {
    i6178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6179[i + 0]) );
  }
  i6170.variants = i6178
  var i6181 = i6171[24]
  var i6180 = []
  for(var i = 0; i < i6181.length; i += 1) {
    i6180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6181[i + 0]) );
  }
  i6170.excludedVariants = i6180
  i6170.hasDepthReader = !!i6171[25]
  return i6170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i6182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i6183 = data
  i6182.val = i6183[0]
  i6182.name = i6183[1]
  return i6182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i6184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i6185 = data
  i6184.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6185[0], i6184.src)
  i6184.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6185[1], i6184.dst)
  i6184.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6185[2], i6184.op)
  return i6184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i6186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i6187 = data
  i6186.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6187[0], i6186.pass)
  i6186.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6187[1], i6186.fail)
  i6186.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6187[2], i6186.zFail)
  i6186.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6187[3], i6186.comp)
  return i6186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i6190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i6191 = data
  i6190.name = i6191[0]
  i6190.value = i6191[1]
  return i6190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i6194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i6195 = data
  var i6197 = i6195[0]
  var i6196 = []
  for(var i = 0; i < i6197.length; i += 1) {
    i6196.push( i6197[i + 0] );
  }
  i6194.keywords = i6196
  i6194.hasDiscard = !!i6195[1]
  return i6194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i6200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i6201 = data
  i6200.passId = i6201[0]
  i6200.subShaderIndex = i6201[1]
  var i6203 = i6201[2]
  var i6202 = []
  for(var i = 0; i < i6203.length; i += 1) {
    i6202.push( i6203[i + 0] );
  }
  i6200.keywords = i6202
  i6200.vertexProgram = i6201[3]
  i6200.fragmentProgram = i6201[4]
  i6200.exportedForWebGl2 = !!i6201[5]
  i6200.readDepth = !!i6201[6]
  return i6200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i6206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i6207 = data
  request.r(i6207[0], i6207[1], 0, i6206, 'shader')
  i6206.pass = i6207[2]
  return i6206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i6210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i6211 = data
  i6210.name = i6211[0]
  i6210.type = i6211[1]
  i6210.value = new pc.Vec4( i6211[2], i6211[3], i6211[4], i6211[5] )
  i6210.textureValue = i6211[6]
  i6210.shaderPropertyFlag = i6211[7]
  return i6210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i6212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i6213 = data
  i6212.name = i6213[0]
  request.r(i6213[1], i6213[2], 0, i6212, 'texture')
  i6212.aabb = i6213[3]
  i6212.vertices = i6213[4]
  i6212.triangles = i6213[5]
  i6212.textureRect = UnityEngine.Rect.MinMaxRect(i6213[6], i6213[7], i6213[8], i6213[9])
  i6212.packedRect = UnityEngine.Rect.MinMaxRect(i6213[10], i6213[11], i6213[12], i6213[13])
  i6212.border = new pc.Vec4( i6213[14], i6213[15], i6213[16], i6213[17] )
  i6212.transparency = i6213[18]
  i6212.bounds = i6213[19]
  i6212.pixelsPerUnit = i6213[20]
  i6212.textureWidth = i6213[21]
  i6212.textureHeight = i6213[22]
  i6212.nativeSize = new pc.Vec2( i6213[23], i6213[24] )
  i6212.pivot = new pc.Vec2( i6213[25], i6213[26] )
  i6212.textureRectOffset = new pc.Vec2( i6213[27], i6213[28] )
  return i6212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i6214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i6215 = data
  i6214.name = i6215[0]
  return i6214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i6216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i6217 = data
  i6216.name = i6217[0]
  i6216.ascent = i6217[1]
  i6216.originalLineHeight = i6217[2]
  i6216.fontSize = i6217[3]
  var i6219 = i6217[4]
  var i6218 = []
  for(var i = 0; i < i6219.length; i += 1) {
    i6218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i6219[i + 0]) );
  }
  i6216.characterInfo = i6218
  request.r(i6217[5], i6217[6], 0, i6216, 'texture')
  i6216.originalFontSize = i6217[7]
  return i6216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i6222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i6223 = data
  i6222.index = i6223[0]
  i6222.advance = i6223[1]
  i6222.bearing = i6223[2]
  i6222.glyphWidth = i6223[3]
  i6222.glyphHeight = i6223[4]
  i6222.minX = i6223[5]
  i6222.maxX = i6223[6]
  i6222.minY = i6223[7]
  i6222.maxY = i6223[8]
  i6222.uvBottomLeftX = i6223[9]
  i6222.uvBottomLeftY = i6223[10]
  i6222.uvBottomRightX = i6223[11]
  i6222.uvBottomRightY = i6223[12]
  i6222.uvTopLeftX = i6223[13]
  i6222.uvTopLeftY = i6223[14]
  i6222.uvTopRightX = i6223[15]
  i6222.uvTopRightY = i6223[16]
  return i6222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i6224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i6225 = data
  i6224.name = i6225[0]
  i6224.bytes64 = i6225[1]
  i6224.data = i6225[2]
  return i6224
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i6226 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i6227 = data
  i6226.hashCode = i6227[0]
  request.r(i6227[1], i6227[2], 0, i6226, 'material')
  i6226.materialHashCode = i6227[3]
  request.r(i6227[4], i6227[5], 0, i6226, 'atlas')
  i6226.normalStyle = i6227[6]
  i6226.normalSpacingOffset = i6227[7]
  i6226.boldStyle = i6227[8]
  i6226.boldSpacing = i6227[9]
  i6226.italicStyle = i6227[10]
  i6226.tabSize = i6227[11]
  i6226.m_Version = i6227[12]
  i6226.m_SourceFontFileGUID = i6227[13]
  request.r(i6227[14], i6227[15], 0, i6226, 'm_SourceFontFile_EditorRef')
  request.r(i6227[16], i6227[17], 0, i6226, 'm_SourceFontFile')
  i6226.m_AtlasPopulationMode = i6227[18]
  i6226.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6227[19], i6226.m_FaceInfo)
  var i6229 = i6227[20]
  var i6228 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i6229.length; i += 1) {
    i6228.add(request.d('UnityEngine.TextCore.Glyph', i6229[i + 0]));
  }
  i6226.m_GlyphTable = i6228
  var i6231 = i6227[21]
  var i6230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i6231.length; i += 1) {
    i6230.add(request.d('TMPro.TMP_Character', i6231[i + 0]));
  }
  i6226.m_CharacterTable = i6230
  var i6233 = i6227[22]
  var i6232 = []
  for(var i = 0; i < i6233.length; i += 2) {
  request.r(i6233[i + 0], i6233[i + 1], 2, i6232, '')
  }
  i6226.m_AtlasTextures = i6232
  i6226.m_AtlasTextureIndex = i6227[23]
  i6226.m_IsMultiAtlasTexturesEnabled = !!i6227[24]
  i6226.m_ClearDynamicDataOnBuild = !!i6227[25]
  var i6235 = i6227[26]
  var i6234 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6235.length; i += 1) {
    i6234.add(request.d('UnityEngine.TextCore.GlyphRect', i6235[i + 0]));
  }
  i6226.m_UsedGlyphRects = i6234
  var i6237 = i6227[27]
  var i6236 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6237.length; i += 1) {
    i6236.add(request.d('UnityEngine.TextCore.GlyphRect', i6237[i + 0]));
  }
  i6226.m_FreeGlyphRects = i6236
  i6226.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i6227[28], i6226.m_fontInfo)
  i6226.m_AtlasWidth = i6227[29]
  i6226.m_AtlasHeight = i6227[30]
  i6226.m_AtlasPadding = i6227[31]
  i6226.m_AtlasRenderMode = i6227[32]
  var i6239 = i6227[33]
  var i6238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i6239.length; i += 1) {
    i6238.add(request.d('TMPro.TMP_Glyph', i6239[i + 0]));
  }
  i6226.m_glyphInfoList = i6238
  i6226.m_KerningTable = request.d('TMPro.KerningTable', i6227[34], i6226.m_KerningTable)
  i6226.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i6227[35], i6226.m_FontFeatureTable)
  var i6241 = i6227[36]
  var i6240 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6241.length; i += 2) {
  request.r(i6241[i + 0], i6241[i + 1], 1, i6240, '')
  }
  i6226.fallbackFontAssets = i6240
  var i6243 = i6227[37]
  var i6242 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6243.length; i += 2) {
  request.r(i6243[i + 0], i6243[i + 1], 1, i6242, '')
  }
  i6226.m_FallbackFontAssetTable = i6242
  i6226.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i6227[38], i6226.m_CreationSettings)
  var i6245 = i6227[39]
  var i6244 = []
  for(var i = 0; i < i6245.length; i += 1) {
    i6244.push( request.d('TMPro.TMP_FontWeightPair', i6245[i + 0]) );
  }
  i6226.m_FontWeightTable = i6244
  var i6247 = i6227[40]
  var i6246 = []
  for(var i = 0; i < i6247.length; i += 1) {
    i6246.push( request.d('TMPro.TMP_FontWeightPair', i6247[i + 0]) );
  }
  i6226.fontWeights = i6246
  return i6226
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i6248 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i6249 = data
  i6248.m_FaceIndex = i6249[0]
  i6248.m_FamilyName = i6249[1]
  i6248.m_StyleName = i6249[2]
  i6248.m_PointSize = i6249[3]
  i6248.m_Scale = i6249[4]
  i6248.m_UnitsPerEM = i6249[5]
  i6248.m_LineHeight = i6249[6]
  i6248.m_AscentLine = i6249[7]
  i6248.m_CapLine = i6249[8]
  i6248.m_MeanLine = i6249[9]
  i6248.m_Baseline = i6249[10]
  i6248.m_DescentLine = i6249[11]
  i6248.m_SuperscriptOffset = i6249[12]
  i6248.m_SuperscriptSize = i6249[13]
  i6248.m_SubscriptOffset = i6249[14]
  i6248.m_SubscriptSize = i6249[15]
  i6248.m_UnderlineOffset = i6249[16]
  i6248.m_UnderlineThickness = i6249[17]
  i6248.m_StrikethroughOffset = i6249[18]
  i6248.m_StrikethroughThickness = i6249[19]
  i6248.m_TabWidth = i6249[20]
  return i6248
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i6252 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i6253 = data
  i6252.m_Index = i6253[0]
  i6252.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6253[1], i6252.m_Metrics)
  i6252.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6253[2], i6252.m_GlyphRect)
  i6252.m_Scale = i6253[3]
  i6252.m_AtlasIndex = i6253[4]
  i6252.m_ClassDefinitionType = i6253[5]
  return i6252
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i6254 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i6255 = data
  i6254.m_Width = i6255[0]
  i6254.m_Height = i6255[1]
  i6254.m_HorizontalBearingX = i6255[2]
  i6254.m_HorizontalBearingY = i6255[3]
  i6254.m_HorizontalAdvance = i6255[4]
  return i6254
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i6256 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i6257 = data
  i6256.m_X = i6257[0]
  i6256.m_Y = i6257[1]
  i6256.m_Width = i6257[2]
  i6256.m_Height = i6257[3]
  return i6256
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i6260 = root || request.c( 'TMPro.TMP_Character' )
  var i6261 = data
  i6260.m_ElementType = i6261[0]
  i6260.m_Unicode = i6261[1]
  i6260.m_GlyphIndex = i6261[2]
  i6260.m_Scale = i6261[3]
  return i6260
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i6266 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i6267 = data
  i6266.Name = i6267[0]
  i6266.PointSize = i6267[1]
  i6266.Scale = i6267[2]
  i6266.CharacterCount = i6267[3]
  i6266.LineHeight = i6267[4]
  i6266.Baseline = i6267[5]
  i6266.Ascender = i6267[6]
  i6266.CapHeight = i6267[7]
  i6266.Descender = i6267[8]
  i6266.CenterLine = i6267[9]
  i6266.SuperscriptOffset = i6267[10]
  i6266.SubscriptOffset = i6267[11]
  i6266.SubSize = i6267[12]
  i6266.Underline = i6267[13]
  i6266.UnderlineThickness = i6267[14]
  i6266.strikethrough = i6267[15]
  i6266.strikethroughThickness = i6267[16]
  i6266.TabWidth = i6267[17]
  i6266.Padding = i6267[18]
  i6266.AtlasWidth = i6267[19]
  i6266.AtlasHeight = i6267[20]
  return i6266
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i6270 = root || request.c( 'TMPro.TMP_Glyph' )
  var i6271 = data
  i6270.id = i6271[0]
  i6270.x = i6271[1]
  i6270.y = i6271[2]
  i6270.width = i6271[3]
  i6270.height = i6271[4]
  i6270.xOffset = i6271[5]
  i6270.yOffset = i6271[6]
  i6270.xAdvance = i6271[7]
  i6270.scale = i6271[8]
  return i6270
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i6272 = root || request.c( 'TMPro.KerningTable' )
  var i6273 = data
  var i6275 = i6273[0]
  var i6274 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i6275.length; i += 1) {
    i6274.add(request.d('TMPro.KerningPair', i6275[i + 0]));
  }
  i6272.kerningPairs = i6274
  return i6272
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i6278 = root || request.c( 'TMPro.KerningPair' )
  var i6279 = data
  i6278.xOffset = i6279[0]
  i6278.m_FirstGlyph = i6279[1]
  i6278.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6279[2], i6278.m_FirstGlyphAdjustments)
  i6278.m_SecondGlyph = i6279[3]
  i6278.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6279[4], i6278.m_SecondGlyphAdjustments)
  i6278.m_IgnoreSpacingAdjustments = !!i6279[5]
  return i6278
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i6280 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i6281 = data
  var i6283 = i6281[0]
  var i6282 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i6283.length; i += 1) {
    i6282.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i6283[i + 0]));
  }
  i6280.m_GlyphPairAdjustmentRecords = i6282
  return i6280
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i6286 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i6287 = data
  i6286.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i6287[0], i6286.m_FirstAdjustmentRecord)
  i6286.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i6287[1], i6286.m_SecondAdjustmentRecord)
  i6286.m_FeatureLookupFlags = i6287[2]
  return i6286
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i6288 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i6289 = data
  i6288.m_GlyphIndex = i6289[0]
  i6288.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i6289[1], i6288.m_GlyphValueRecord)
  return i6288
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i6290 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i6291 = data
  i6290.m_XPlacement = i6291[0]
  i6290.m_YPlacement = i6291[1]
  i6290.m_XAdvance = i6291[2]
  i6290.m_YAdvance = i6291[3]
  return i6290
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i6294 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i6295 = data
  i6294.sourceFontFileName = i6295[0]
  i6294.sourceFontFileGUID = i6295[1]
  i6294.pointSizeSamplingMode = i6295[2]
  i6294.pointSize = i6295[3]
  i6294.padding = i6295[4]
  i6294.packingMode = i6295[5]
  i6294.atlasWidth = i6295[6]
  i6294.atlasHeight = i6295[7]
  i6294.characterSetSelectionMode = i6295[8]
  i6294.characterSequence = i6295[9]
  i6294.referencedFontAssetGUID = i6295[10]
  i6294.referencedTextAssetGUID = i6295[11]
  i6294.fontStyle = i6295[12]
  i6294.fontStyleModifier = i6295[13]
  i6294.renderMode = i6295[14]
  i6294.includeFontFeatures = !!i6295[15]
  return i6294
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i6298 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i6299 = data
  request.r(i6299[0], i6299[1], 0, i6298, 'regularTypeface')
  request.r(i6299[2], i6299[3], 0, i6298, 'italicTypeface')
  return i6298
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i6300 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i6301 = data
  i6300.useSafeMode = !!i6301[0]
  i6300.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i6301[1], i6300.safeModeOptions)
  i6300.timeScale = i6301[2]
  i6300.unscaledTimeScale = i6301[3]
  i6300.useSmoothDeltaTime = !!i6301[4]
  i6300.maxSmoothUnscaledTime = i6301[5]
  i6300.rewindCallbackMode = i6301[6]
  i6300.showUnityEditorReport = !!i6301[7]
  i6300.logBehaviour = i6301[8]
  i6300.drawGizmos = !!i6301[9]
  i6300.defaultRecyclable = !!i6301[10]
  i6300.defaultAutoPlay = i6301[11]
  i6300.defaultUpdateType = i6301[12]
  i6300.defaultTimeScaleIndependent = !!i6301[13]
  i6300.defaultEaseType = i6301[14]
  i6300.defaultEaseOvershootOrAmplitude = i6301[15]
  i6300.defaultEasePeriod = i6301[16]
  i6300.defaultAutoKill = !!i6301[17]
  i6300.defaultLoopType = i6301[18]
  i6300.debugMode = !!i6301[19]
  i6300.debugStoreTargetId = !!i6301[20]
  i6300.showPreviewPanel = !!i6301[21]
  i6300.storeSettingsLocation = i6301[22]
  i6300.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i6301[23], i6300.modules)
  i6300.createASMDEF = !!i6301[24]
  i6300.showPlayingTweens = !!i6301[25]
  i6300.showPausedTweens = !!i6301[26]
  return i6300
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i6302 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i6303 = data
  i6302.logBehaviour = i6303[0]
  i6302.nestedTweenFailureBehaviour = i6303[1]
  return i6302
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i6304 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i6305 = data
  i6304.showPanel = !!i6305[0]
  i6304.audioEnabled = !!i6305[1]
  i6304.physicsEnabled = !!i6305[2]
  i6304.physics2DEnabled = !!i6305[3]
  i6304.spriteEnabled = !!i6305[4]
  i6304.uiEnabled = !!i6305[5]
  i6304.textMeshProEnabled = !!i6305[6]
  i6304.tk2DEnabled = !!i6305[7]
  i6304.deAudioEnabled = !!i6305[8]
  i6304.deUnityExtendedEnabled = !!i6305[9]
  i6304.epoOutlineEnabled = !!i6305[10]
  return i6304
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i6306 = root || request.c( 'TMPro.TMP_Settings' )
  var i6307 = data
  i6306.m_enableWordWrapping = !!i6307[0]
  i6306.m_enableKerning = !!i6307[1]
  i6306.m_enableExtraPadding = !!i6307[2]
  i6306.m_enableTintAllSprites = !!i6307[3]
  i6306.m_enableParseEscapeCharacters = !!i6307[4]
  i6306.m_EnableRaycastTarget = !!i6307[5]
  i6306.m_GetFontFeaturesAtRuntime = !!i6307[6]
  i6306.m_missingGlyphCharacter = i6307[7]
  i6306.m_warningsDisabled = !!i6307[8]
  request.r(i6307[9], i6307[10], 0, i6306, 'm_defaultFontAsset')
  i6306.m_defaultFontAssetPath = i6307[11]
  i6306.m_defaultFontSize = i6307[12]
  i6306.m_defaultAutoSizeMinRatio = i6307[13]
  i6306.m_defaultAutoSizeMaxRatio = i6307[14]
  i6306.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i6307[15], i6307[16] )
  i6306.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i6307[17], i6307[18] )
  i6306.m_autoSizeTextContainer = !!i6307[19]
  i6306.m_IsTextObjectScaleStatic = !!i6307[20]
  var i6309 = i6307[21]
  var i6308 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6309.length; i += 2) {
  request.r(i6309[i + 0], i6309[i + 1], 1, i6308, '')
  }
  i6306.m_fallbackFontAssets = i6308
  i6306.m_matchMaterialPreset = !!i6307[22]
  request.r(i6307[23], i6307[24], 0, i6306, 'm_defaultSpriteAsset')
  i6306.m_defaultSpriteAssetPath = i6307[25]
  i6306.m_enableEmojiSupport = !!i6307[26]
  i6306.m_MissingCharacterSpriteUnicode = i6307[27]
  i6306.m_defaultColorGradientPresetsPath = i6307[28]
  request.r(i6307[29], i6307[30], 0, i6306, 'm_defaultStyleSheet')
  i6306.m_StyleSheetsResourcePath = i6307[31]
  request.r(i6307[32], i6307[33], 0, i6306, 'm_leadingCharacters')
  request.r(i6307[34], i6307[35], 0, i6306, 'm_followingCharacters')
  i6306.m_UseModernHangulLineBreakingRules = !!i6307[36]
  return i6306
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i6310 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i6311 = data
  i6310.hashCode = i6311[0]
  request.r(i6311[1], i6311[2], 0, i6310, 'material')
  i6310.materialHashCode = i6311[3]
  request.r(i6311[4], i6311[5], 0, i6310, 'spriteSheet')
  var i6313 = i6311[6]
  var i6312 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i6313.length; i += 1) {
    i6312.add(request.d('TMPro.TMP_Sprite', i6313[i + 0]));
  }
  i6310.spriteInfoList = i6312
  var i6315 = i6311[7]
  var i6314 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i6315.length; i += 2) {
  request.r(i6315[i + 0], i6315[i + 1], 1, i6314, '')
  }
  i6310.fallbackSpriteAssets = i6314
  i6310.m_Version = i6311[8]
  i6310.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6311[9], i6310.m_FaceInfo)
  var i6317 = i6311[10]
  var i6316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i6317.length; i += 1) {
    i6316.add(request.d('TMPro.TMP_SpriteCharacter', i6317[i + 0]));
  }
  i6310.m_SpriteCharacterTable = i6316
  var i6319 = i6311[11]
  var i6318 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i6319.length; i += 1) {
    i6318.add(request.d('TMPro.TMP_SpriteGlyph', i6319[i + 0]));
  }
  i6310.m_SpriteGlyphTable = i6318
  return i6310
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i6322 = root || request.c( 'TMPro.TMP_Sprite' )
  var i6323 = data
  i6322.name = i6323[0]
  i6322.hashCode = i6323[1]
  i6322.unicode = i6323[2]
  i6322.pivot = new pc.Vec2( i6323[3], i6323[4] )
  request.r(i6323[5], i6323[6], 0, i6322, 'sprite')
  i6322.id = i6323[7]
  i6322.x = i6323[8]
  i6322.y = i6323[9]
  i6322.width = i6323[10]
  i6322.height = i6323[11]
  i6322.xOffset = i6323[12]
  i6322.yOffset = i6323[13]
  i6322.xAdvance = i6323[14]
  i6322.scale = i6323[15]
  return i6322
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i6328 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i6329 = data
  i6328.m_Name = i6329[0]
  i6328.m_HashCode = i6329[1]
  i6328.m_ElementType = i6329[2]
  i6328.m_Unicode = i6329[3]
  i6328.m_GlyphIndex = i6329[4]
  i6328.m_Scale = i6329[5]
  return i6328
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i6332 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i6333 = data
  request.r(i6333[0], i6333[1], 0, i6332, 'sprite')
  i6332.m_Index = i6333[2]
  i6332.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6333[3], i6332.m_Metrics)
  i6332.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6333[4], i6332.m_GlyphRect)
  i6332.m_Scale = i6333[5]
  i6332.m_AtlasIndex = i6333[6]
  i6332.m_ClassDefinitionType = i6333[7]
  return i6332
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i6334 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i6335 = data
  var i6337 = i6335[0]
  var i6336 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i6337.length; i += 1) {
    i6336.add(request.d('TMPro.TMP_Style', i6337[i + 0]));
  }
  i6334.m_StyleList = i6336
  return i6334
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i6340 = root || request.c( 'TMPro.TMP_Style' )
  var i6341 = data
  i6340.m_Name = i6341[0]
  i6340.m_HashCode = i6341[1]
  i6340.m_OpeningDefinition = i6341[2]
  i6340.m_ClosingDefinition = i6341[3]
  i6340.m_OpeningTagArray = i6341[4]
  i6340.m_ClosingTagArray = i6341[5]
  i6340.m_OpeningTagUnicodeArray = i6341[6]
  i6340.m_ClosingTagUnicodeArray = i6341[7]
  return i6340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i6342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i6343 = data
  var i6345 = i6343[0]
  var i6344 = []
  for(var i = 0; i < i6345.length; i += 1) {
    i6344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i6345[i + 0]) );
  }
  i6342.files = i6344
  i6342.componentToPrefabIds = i6343[1]
  return i6342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i6348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i6349 = data
  i6348.path = i6349[0]
  request.r(i6349[1], i6349[2], 0, i6348, 'unityObject')
  return i6348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i6350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i6351 = data
  var i6353 = i6351[0]
  var i6352 = []
  for(var i = 0; i < i6353.length; i += 1) {
    i6352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i6353[i + 0]) );
  }
  i6350.scriptsExecutionOrder = i6352
  var i6355 = i6351[1]
  var i6354 = []
  for(var i = 0; i < i6355.length; i += 1) {
    i6354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i6355[i + 0]) );
  }
  i6350.sortingLayers = i6354
  var i6357 = i6351[2]
  var i6356 = []
  for(var i = 0; i < i6357.length; i += 1) {
    i6356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i6357[i + 0]) );
  }
  i6350.cullingLayers = i6356
  i6350.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i6351[3], i6350.timeSettings)
  i6350.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i6351[4], i6350.physicsSettings)
  i6350.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i6351[5], i6350.physics2DSettings)
  i6350.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6351[6], i6350.qualitySettings)
  i6350.enableRealtimeShadows = !!i6351[7]
  i6350.enableAutoInstancing = !!i6351[8]
  i6350.enableDynamicBatching = !!i6351[9]
  i6350.lightmapEncodingQuality = i6351[10]
  i6350.desiredColorSpace = i6351[11]
  var i6359 = i6351[12]
  var i6358 = []
  for(var i = 0; i < i6359.length; i += 1) {
    i6358.push( i6359[i + 0] );
  }
  i6350.allTags = i6358
  return i6350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6363 = data
  i6362.name = i6363[0]
  i6362.value = i6363[1]
  return i6362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i6366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i6367 = data
  i6366.id = i6367[0]
  i6366.name = i6367[1]
  i6366.value = i6367[2]
  return i6366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6371 = data
  i6370.id = i6371[0]
  i6370.name = i6371[1]
  return i6370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6373 = data
  i6372.fixedDeltaTime = i6373[0]
  i6372.maximumDeltaTime = i6373[1]
  i6372.timeScale = i6373[2]
  i6372.maximumParticleTimestep = i6373[3]
  return i6372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6375 = data
  i6374.gravity = new pc.Vec3( i6375[0], i6375[1], i6375[2] )
  i6374.defaultSolverIterations = i6375[3]
  i6374.bounceThreshold = i6375[4]
  i6374.autoSyncTransforms = !!i6375[5]
  i6374.autoSimulation = !!i6375[6]
  var i6377 = i6375[7]
  var i6376 = []
  for(var i = 0; i < i6377.length; i += 1) {
    i6376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6377[i + 0]) );
  }
  i6374.collisionMatrix = i6376
  return i6374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6381 = data
  i6380.enabled = !!i6381[0]
  i6380.layerId = i6381[1]
  i6380.otherLayerId = i6381[2]
  return i6380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6383 = data
  request.r(i6383[0], i6383[1], 0, i6382, 'material')
  i6382.gravity = new pc.Vec2( i6383[2], i6383[3] )
  i6382.positionIterations = i6383[4]
  i6382.velocityIterations = i6383[5]
  i6382.velocityThreshold = i6383[6]
  i6382.maxLinearCorrection = i6383[7]
  i6382.maxAngularCorrection = i6383[8]
  i6382.maxTranslationSpeed = i6383[9]
  i6382.maxRotationSpeed = i6383[10]
  i6382.baumgarteScale = i6383[11]
  i6382.baumgarteTOIScale = i6383[12]
  i6382.timeToSleep = i6383[13]
  i6382.linearSleepTolerance = i6383[14]
  i6382.angularSleepTolerance = i6383[15]
  i6382.defaultContactOffset = i6383[16]
  i6382.autoSimulation = !!i6383[17]
  i6382.queriesHitTriggers = !!i6383[18]
  i6382.queriesStartInColliders = !!i6383[19]
  i6382.callbacksOnDisable = !!i6383[20]
  i6382.reuseCollisionCallbacks = !!i6383[21]
  i6382.autoSyncTransforms = !!i6383[22]
  var i6385 = i6383[23]
  var i6384 = []
  for(var i = 0; i < i6385.length; i += 1) {
    i6384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6385[i + 0]) );
  }
  i6382.collisionMatrix = i6384
  return i6382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6389 = data
  i6388.enabled = !!i6389[0]
  i6388.layerId = i6389[1]
  i6388.otherLayerId = i6389[2]
  return i6388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6391 = data
  var i6393 = i6391[0]
  var i6392 = []
  for(var i = 0; i < i6393.length; i += 1) {
    i6392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6393[i + 0]) );
  }
  i6390.qualityLevels = i6392
  var i6395 = i6391[1]
  var i6394 = []
  for(var i = 0; i < i6395.length; i += 1) {
    i6394.push( i6395[i + 0] );
  }
  i6390.names = i6394
  i6390.shadows = i6391[2]
  i6390.anisotropicFiltering = i6391[3]
  i6390.antiAliasing = i6391[4]
  i6390.lodBias = i6391[5]
  i6390.shadowCascades = i6391[6]
  i6390.shadowDistance = i6391[7]
  i6390.shadowmaskMode = i6391[8]
  i6390.shadowProjection = i6391[9]
  i6390.shadowResolution = i6391[10]
  i6390.softParticles = !!i6391[11]
  i6390.softVegetation = !!i6391[12]
  i6390.activeColorSpace = i6391[13]
  i6390.desiredColorSpace = i6391[14]
  i6390.masterTextureLimit = i6391[15]
  i6390.maxQueuedFrames = i6391[16]
  i6390.particleRaycastBudget = i6391[17]
  i6390.pixelLightCount = i6391[18]
  i6390.realtimeReflectionProbes = !!i6391[19]
  i6390.shadowCascade2Split = i6391[20]
  i6390.shadowCascade4Split = new pc.Vec3( i6391[21], i6391[22], i6391[23] )
  i6390.streamingMipmapsActive = !!i6391[24]
  i6390.vSyncCount = i6391[25]
  i6390.asyncUploadBufferSize = i6391[26]
  i6390.asyncUploadTimeSlice = i6391[27]
  i6390.billboardsFaceCameraPosition = !!i6391[28]
  i6390.shadowNearPlaneOffset = i6391[29]
  i6390.streamingMipmapsMemoryBudget = i6391[30]
  i6390.maximumLODLevel = i6391[31]
  i6390.streamingMipmapsAddAllCameras = !!i6391[32]
  i6390.streamingMipmapsMaxLevelReduction = i6391[33]
  i6390.streamingMipmapsRenderersPerFrame = i6391[34]
  i6390.resolutionScalingFixedDPIFactor = i6391[35]
  i6390.streamingMipmapsMaxFileIORequests = i6391[36]
  i6390.currentQualityLevel = i6391[37]
  return i6390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i6400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i6401 = data
  i6400.weight = i6401[0]
  i6400.vertices = i6401[1]
  i6400.normals = i6401[2]
  i6400.tangents = i6401[3]
  return i6400
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i6402 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i6403 = data
  i6402.xPlacement = i6403[0]
  i6402.yPlacement = i6403[1]
  i6402.xAdvance = i6403[2]
  i6402.yAdvance = i6403[3]
  return i6402
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"39":[40],"41":[40],"42":[40],"43":[40],"44":[40],"45":[40],"46":[47],"48":[3],"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[50],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[58],"66":[58],"67":[58],"68":[58],"69":[58],"70":[58],"71":[3],"72":[12],"73":[74],"75":[74],"23":[22],"76":[77],"78":[77],"79":[77],"80":[81],"82":[3],"83":[3],"84":[85],"86":[22],"87":[12,22],"29":[22,27],"88":[22],"89":[27,22],"90":[12],"91":[27,22],"92":[22],"93":[94],"95":[22],"96":[22],"25":[23],"26":[27,22],"97":[22],"24":[23],"98":[22],"99":[22],"28":[22],"100":[22],"101":[22],"102":[22],"103":[22],"104":[22],"105":[22],"106":[27,22],"107":[22],"108":[22],"109":[22],"16":[22],"110":[27,22],"111":[22],"112":[8],"113":[8],"9":[8],"114":[8],"115":[3],"116":[3],"117":[22],"118":[94],"119":[94]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","FOVCalculator","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","PainterGame","UnityEngine.UI.Slider","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.AudioSource","UnityEngine.Sprite","UnityEngine.AudioClip","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.UI.HorizontalLayoutGroup","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","EscToMainMenu","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BotController","UnityEngine.CharacterController","CharacterBaseController","PlayerController","DeathObstacleEffect","ObstacleBase","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Light","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.45f1";

Deserializers.productName = "PanteonDemo";

Deserializers.lunaInitializationTime = "11/07/2024 13:58:49";

Deserializers.lunaDaysRunning = "3.5";

Deserializers.lunaVersion = "6.2.0";

Deserializers.lunaSHA = "7963e9fed253d218ae1c5298f104efd7e457ea14";

Deserializers.creativeName = "RealLastPlayable-3";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1549";

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

Deserializers.buildID = "cf37b43b-e47b-4dcf-8444-9360dc8ff761";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Rendering","Universal","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

