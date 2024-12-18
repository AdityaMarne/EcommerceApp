from rest_framework import serializers
from django.contrib.auth import get_user_model

from users.models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username','email','password','is_customer','is_admin']
        extra_kwargs = {'password':{'write_only':True}}

    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)
        return user