import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Button, Header, TextInput } from '../../components';
import { heightToDp, widthToDp, width } from '../../utils/Dimensions';

import { fonts, useTheme } from '../../utils/theme';
import attachfile from '../../assets/attachfile.png';
import { useSelector } from 'react-redux';
import DocumentPicker from 'react-native-document-picker';
import { shareIdea } from '../../redux/actions';
import makeStyle from './artistShareIdea.styles';

const theme = useTheme();

export default function ArtistShareIdea(props) {
  const [selected, setSelected] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const styles = makeStyle(theme)
  const { feedbackCategory } = useSelector(state => state.common);
  const handleSelect = id => {
    setSelected(id);
  };
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('idea_description', message);
    formData.append('feedback_category_id', selected);

    formData.append('file', file[0].url);

    shareIdea(formData, () => {
      props.navigation.goBack();
    });
  };
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        limit: 1,
      });

      setFile(result);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Picker cancelled');
      } else {
        console.error('Error picking document:', err);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title="Share an idea" backBtn />
      </View>
      <View>
        <Text style={[styles.subHeading, { marginBottom: 15 }]}>Which area does your idea relate to?</Text>
      </View>
      <View style={styles.optionsContainer}>
        <View style={styles.rowContainer}>
          {feedbackCategory.map((item, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity
                style={[
                  styles.optionContainer,
                  selected !== item.id ? { backgroundColor: '#EEEEEE' } : { backgroundColor: theme.brown },
                ]}
                onPress={() => handleSelect(item.id)}>
                {/* <View style={styles.iconContainer}>{icon}</View> */}
                <Text style={styles.optionTitle}>{item.title}</Text>
              </TouchableOpacity>
            </React.Fragment>
          ))}
        </View>
      </View>

      <View>
        <Text style={styles.subHeading}>Tell us about your idea</Text>
      </View>
      <View>
        <TextInput
          input={text => setMessage(text)}
          placeholder={'What did you expect and what happened instead?'}
          multiline
          inputBoxStyle={{
            backgroundColor: '#ffffff',
            borderBottomColor: '#ffffff',
            padding: 10,
            height: heightToDp(45),
            borderRadius: 10,
            textAlignVertical: 'top',
          }}
        />
      </View>
      <View>
        <View style={styles.files}>
          <TouchableOpacity
            onPress={pickDocument}
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.imageFileContainer}>
              <Image source={attachfile} style={styles.imageFile} />
            </View>
            <Text
              style={{
                paddingHorizontal: 5,
                fontSize: 12,
                color: '#ABABAB',
                fontFamily: fonts.robo_med,
              }}>
              {file ? file[0].name.slice(0, 15) : 'Attach a file'}
            </Text>
          </TouchableOpacity>
          <Text style={{ color: '#29AAE2' }}>{message.length}/2500</Text>
        </View>
      </View>
      <View style={{ marginTop: 60 }}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
}


